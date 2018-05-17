/* eslint-disable */
import BaseClass from './BaseClass';

export default class AssetActivatable extends BaseClass {
  multiActivate = false;
  active = this.multiActivate ? [] : null;
  activeRoute = this.multiActivate ? [] : null;
  activeMeta = {};

  constructor() {
    super();
    this._lastActivation = {
      source: null,
      reason: null,
      item: null
    };
    // this.on('px-app-asset-should-be-activated', this._assetActivatedByEvent).bind(this);
  }

  get multiActivate() {
    return this._multiActivate;
  }

  set multiActivate(val) {
    if (val !== this._multiActivate) {
      this._multiActivate = val;
      this._toggleMultiActivate(val);
    }
  }
  _toggleMultiActivate(allowMultiActivate) {
    if (allowMultiActivate && !Array.isArray(this.active)) {
      this.active = [];
      this.activeRoute = [];
    }
    if (!allowMultiActivate && Array.isArray(this.active)) {
      this.active = this.active.length ? this.active[0] : null;
    }
  }
  /**
   * Activates an item. Call with an object that is a direct reference to one
   * of the `items` objects.
   *
   * If multi-activate mode is enabled, call with an object to activate a single
   * item or an array of objects to activate multiple items.
   *
   * An optional source of the change can be provided as a string.
   *
   * @param  {Object|Array} item
   * @param  {String} source
   * @return {Object|Array} - The next `active` item or items
   */
  activate(item, source = 'METHOD') {
    if ((!this.multiActivate && item === null && this._lastActivation.item !== null) ||
      (this.multiActivate && item === null && this.active.length) ||
      (this.multiActivate && Array.isArray(item) && !item.length && this.active.length)) {
      this.deactivate(Array.isArray(this.active) ? [...this.active] : this.active);
      return this.active;
    }
    if (!item || (!this.multiActivate && item === this._lastActivation.item)
    || (this.multiActivate && this.active.indexOf(item) > -1)) {
      return this.active;
    }
    if (this.multiActivate && Array.isArray(item) && item.length) {
      for (let i = 0; i < item.length; i++) {
        this.activate(item[i], source);
      }
      return this.active;
    }
    if (this._assetGraph.hasNode(item)) {
      this._activateAsset(item, source);
      return this.active;
    }
    throw new Error(`The following item could not be found in the items graph:
      ${JSON.stringify(item)}`);
  }
  /**
   * Deactivates an item. Call with a direct reference to the active item
   * or with `null` to deactivate whatever is active.
   *
   * If multi-activate mode is enabled, call with a direct reference to one of
   * the active items to deactivate it, or an array of active items to
   * deactivate multiple, or `null` to deactivate all items.
   *
   * @param  {Object|Array|null} item
   * @param  {String} source
   * @return {Object|Array|null} - The remaining `active` items or null
   */
  deactivate(item, source = 'METHOD') {
    if (!this.multiActivate && (!item || this.active === item)) {
      this._deactivateAsset(this.active);
      return this.active;
    }
    if (this.multiActivate && !item) {
      this.deactivate([...this.active]);
      return this.active;
    }
    if (this.multiActivate && Array.isArray(item) && this.active.length) {
      for (let i = 0; i < item.length; i++) {
        this.deactivate(item[i], source);
      }
      return this.active;
    }
    if (this.multiActivate && item && this.active.indexOf(item) > -1) {
      this._deactivateAsset(item);
    }
    return this.active;
  }
  _getActiveMeta(active) {
    if (active.base && !Array.isArray(active.base)
    && this._assetGraph && this._assetGraph.hasNode(active.base)) {
      const {
        path,
        route,
        parent,
        children,
        siblings
      } = this._assetGraph.getInfo(active.base, this.keys.id);
      return {
        item: active.base,
        path,
        route,
        parent,
        children,
        siblings
      };
    }
    if (active.base && Array.isArray(active.base) && active.base.length) {
      return active.base.map((item) => {
        const {
          path,
          route,
          parent,
          children,
          siblings
        } = this._assetGraph.getInfo(item, this.keys.id);
        return {
          item,
          path,
          route,
          parent,
          children,
          siblings
        };
      });
    }
    return {
      item: null,
      path: null,
      route: null,
      parent: null,
      children: null,
      siblings: null
    };
  }
  /**
   * The event `detail.item` should be a reference to an item in the asset graph.
   */
  _assetActivatedByEvent(evt) {
    evt.stopPropagation();
    if (evt.detail.item) {
      this.activate(evt.detail.item, 'DOM_EVENT');
    }
  }
  /**
   * The event `detail.item` should be a reference to an item in the asset graph.
   */
  _assetDeactivatedByEvent(evt) {
    evt.stopPropagation();
    if (evt.detail.item) {
      this.deactivate(evt.detail.item, 'DOM_EVENT');
    }
  }
  /**
   * Should only sync changes to `activeRoute` when necessary to avoid
   * infinite loop of `active` observer triggering `activeRoute` observer.
   */
  _activeRouteChanged(ref) {
    if (!ref || !ref.path || !this._assetGraph || this._squashActiveRouteChange) return;
    if (!this.multiActivate && ref.path === 'activeRoute') {
      this._updateActiveFromRoute(ref.base);
    }
    if (this.multiActivate && (ref.path === 'activeRoute' || ref.path === 'activeRoute.splices')) {
      this._updateActiveFromRouteMulti(ref.base);
    }
  }
  _updateActiveFromRoute(route) {
    if (!this.active && (route === null || (Array.isArray(route) && !route.length))) {
      /* We hit this case when the asset graph is created early (before our
         default `activeRoute` property has been evaluated to null) and
         we call into this method. We should do nothing in this case. */
      return;
    }
    if (this.active && (route === null || (Array.isArray(route) && !route.length))) {
      this._squashActiveChange = true;
      this.deactivate(this.active, 'ROUTE_CHANGED');
      this._squashActiveChange = false;
      return;
    }
    const item = this._assetGraph.getNodeAtRoute(route, this.keys.id);
    if (item) {
      this.activate(item, 'ROUTE_CHANGED');
    } else {
      throw new Error(`The route ${JSON.stringify(route)} could not be found in the items graph.`);
    }
  }
  _updateActiveFromRouteMulti(route) {
    if (this.active.length && (route === null || (Array.isArray(route) && !route.length))) {
      this._squashActiveChange = true;
      this.deactivate(null, 'ROUTE_CHANGED');
      this._squashActiveChange = false;
      return;
    }
    if (Array.isArray(route)) {
      for (let i = 0; i < route.length; i++) {
        this._squashActiveChange = true;
        this.active = route.map((r) => {
          const item = this._assetGraph.getNodeAtRoute(r, this.keys.id);
          if (!item) {
            throw new Error(`The following item could not be found in the items graph:
              ${JSON.stringify(item)}`);
          }
          return item;
        });
        this._squashActiveChange = false;
      }
    }
  }
  /**
   * Should only sync changes to `activeRoute` when necessary to avoid
   * infinite loop of `active` observer triggering `activeRoute` observer.
   */
  _activeChanged(ref) {
    if (!ref || !ref.path || this._squashActiveChange) return;
    if (!this.multiActivate && ref.path === 'active') {
      this._updateActiveRoute(ref.base);
    }
    if (this.multiActivate && (ref.path === 'active' || ref.path === 'active.splices')) {
      this._updateActiveRouteMulti(ref.base);
    }
  }
  _updateActiveRoute(active) {
    if (active) {
      if (!this._assetGraph.hasNode(active)) {
        throw new Error(`The following item could not be found in the items graph:
          ${JSON.stringify(active)}`);
      }
      const route = this._assetGraph.getRoute(active, this.keys.id);
      if (this._routeIsDifferent(route, this.activeRoute)) {
        this._squashActiveRouteChange = true;
        this.activeRoute = route;
        this._squashActiveRouteChange = false;
      }
    } else {
      this._squashActiveRouteChange = true;
      this.activeRoute = null;
      this._squashActiveRouteChange = false;
    }
  }
  _updateActiveRouteMulti(active) {
    if (active && Array.isArray(active) && active.length) {
      this._squashActiveRouteChange = true;
      this.activeRoute = active.map((item) => {
        if (!this._assetGraph.hasNode(item)) {
          throw new Error(`The following item could not be found in the items graph:
            ${JSON.stringify(item)}`);
        }
        return this._assetGraph.getRoute(item, this.keys.id);
      });
      this._squashActiveRouteChange = false;
    } else {
      this._squashActiveRouteChange = true;
      this.activeRoute = [];
      this._squashActiveRouteChange = false;
    }
  }
  _routeIsDifferent = (r1, r2) => {
    if (!r1 || !r2) {
      return true;
    }
    if (r1.length !== r2.length) {
      return true;
    }
    for (let i = 0; i < r1.length; i++) {
      if (r1[i] !== r2[i]) {
        return true;
      }
    }
    return false;
  }
  _activateAsset(item, source) {
    const {
      route,
      path
    } = this._assetGraph.getInfo(item, this.keys.id);
    this._lastActivation = {
      item,
      source,
      route
    };
    if (!this.multiActivate) {
      this.active = item;
    }
    if (this.multiActivate) {
      this.push('active', item);
    }
    this.fire('px-app-asset-activated', {
      source,
      item,
      route,
      path
    });
  }
  /**
   * Fired when a new item is activated. Includes details about how the item
   * was activated, and information about the new active item.
   *
   * The `source` property is a string describing what triggered
   * the activation:
   *
   *   * 'DOM_EVENT' - the user interacted with an item and activated it
   *   * 'ROUTE_CHANGED' - the array bound to `activeRoute` changed
   *   * 'ITEM_CHANGED' - the object bound to `active` changed
   *   * 'METHOD' - the `activate()` method was called
   *
   * The event will have the following properties:
   *
   *   * {Object} detail - Contains the event details
   *   * {String} detail.source - Info about the change trigger, see above
   *   * {Object} detail.item - Reference to the item
   *   * {Array} detail.route - Route from the top of the graph to the item
   *
   * @event px-app-asset-activated
   */
  _deactivateAsset(item, source) {
    const {
      route,
      path
    } = this._assetGraph.getInfo(item, this.keys.id);
    this._lastActivation = {
      item: null,
      source: null,
      route: null
    };
    if (!this.multiActivate) {
      this.set('active', null);
      this.fire('px-app-asset-deactivated', {
        source,
        item,
        route,
        path
      });
    }
    if (this.multiActivate) {
      this.splice('active', this.active.indexOf(item), 1);
      this.fire('px-app-asset-deactivated', {
        source,
        item,
        route,
        path
      });
    }
  }
}
