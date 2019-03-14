/* eslint-disable */
/**
 * observers: [
    '_selectedChanged(selected.*)',
    '_selectedRouteChanged(selectedRoute.*)'
  ],

  listeners: {
    'px-app-asset-graph-created': '__selectInitialAssets',
    'px-app-asset-should-be-selected' : '_assetSelectedByEvent',
    'px-app-asset-should-be-deselected' : '_assetDeselectedByEvent'
  },
 */
export default class AssetSelectable {
  constructor(props) {
    this.multiSelect = props.multiSelect || false;
    this._lastSelection = {
      source: null,
      reason: null,
      item: null
    };

    this.selected = this.multiSelect ? [] : null;
    this.selectedRoute = this.multiSelect ? [] : null;
    this.selectedMeta = this.multiSelect ? [] : null;
  }

  set(name, val) {
    this[name] = val;
  }

  fire(name, data) {
    console.log('fire', name, data);
  }

  get multiSelect() {
    return this._multiSelect;
  }

  set multiSelect(val) {
    if (val !== this._multiSelect) {
      this._multiSelect = val;
      this._toggleMultiSelect(val);
    }
  }

  _toggleMultiSelect(allowMultiSelect) {
    if (allowMultiSelect && !Array.isArray(this.selected)) {
      this.selected = [];
      this.selectedRoute = [];
    }
    if (!allowMultiSelect && Array.isArray(this.selected)) {
      this.selected = this.selected.length ? this.selected[0] : null;
    }
  }

  /**
   * Selects an item. Call with an object that is a direct reference to one
   * of the `items` objects.
   *
   * If multi-select mode is enabled, call with an object to select a single
   * item or an array of objects to select multiple items.
   *
   * An optional source of the change can be provided as a string.
   *
   * @param  {Object|Array} item
   * @param  {String} source
   * @return {Object|Array} - The next `selected` item or items
   */
  select(item, source = 'METHOD') {
    if ((!this.multiSelect && item === null && this._lastSelection.item !== null) ||
      (this.multiSelect && item === null && this.selected.length) ||
      (this.multiSelect && Array.isArray(item) && !item.length && this.selected.length)) {
      this.deselect(Array.isArray(this.selected) ? [...this.selected] : this.selected);
      return this.selected;
    }
    if (!item || (!this.multiSelect && item === this._lastSelection.item) || (this.multiSelect && this.selected.indexOf(item) > -1)) return this.selected;
    if (this.multiSelect && Array.isArray(item) && item.length) {
      for (let i = 0; i < item.length; i++) {
        this.select(item[i], source);
      }
      return this.selected;
    }

    if (this._assetGraph.hasNode(item)) {
      this._selectAsset(item, source);
      return this.selected;
    }
    throw new Error(`The following item could not be found in the items graph:
      ${JSON.stringify(item)}`);
  }

  /**
   * Deselects an item. Call with a direct reference to the selected item
   * or with `null` to deselect whatever is selected.
   *
   * If multi-select mode is enabled, call with a direct reference to one of
   * the selected items to deselect it, or an array of selected items to
   * deselect multiple, or `null` to deselect all items.
   *
   * @param  {Object|Array|null} item
   * @param  {String} source
   * @return {Object|Array|null} - The remaining `selected` items or null
   */
  deselect(item, source = 'METHOD') {
    if (!this.multiSelect && (!item || this.selected === item)) {
      this._deselectAsset(this.selected);
      return this.selected;
    }
    if (this.multiSelect && !item) {
      this.deselect([...this.selected]);
      return this.selected;
    }
    if (this.multiSelect && Array.isArray(item) && this.selected.length) {
      for (let i = 0; i < item.length; i++) {
        this.deselect(item[i], source);
      }
      return this.selected;
    }
    if (this.multiSelect && item && this.selected.indexOf(item) > -1) {
      this._deselectAsset(item);
      return this.selected;
    }
  }

  _getSelectedMeta(selected) {
    if (selected.base && !Array.isArray(selected.base) && this._assetGraph && this._assetGraph.hasNode(selected.base)) {
      const {
        path,
        route,
        parent,
        children,
        siblings
      } = this._assetGraph.getInfo(selected.base, this.keys.id);
      return {
        item: selected.base,
        path,
        route,
        parent,
        children,
        siblings
      };
    }
    if (selected.base && Array.isArray(selected.base) && selected.base.length) {
      return selected.base.map((item) => {
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
  _assetSelectedByEvent(evt) {
    evt.stopPropagation();
    if (evt.detail.item) {
      this.select(evt.detail.item, 'DOM_EVENT');
    }
  }

  /**
   * The event `detail.item` should be a reference to an item in the asset graph.
   */
  _assetDeselectedByEvent(evt) {
    evt.stopPropagation();
    if (evt.detail.item) {
      this.deselect(evt.detail.item, 'DOM_EVENT');
    }
  }

  /**
   * Should only sync changes to `selectedRoute` when necessary to avoid
   * infinite loop of `selected` observer triggering `selectedRoute` observer.
   */
  _selectedRouteChanged(ref) {
    if (!ref || !ref.path || !this._assetGraph || this._squashSelectedRouteChange) return;

    if (!this.multiSelect && ref.path === 'selectedRoute') {
      this._updateSelectedFromRoute(ref.base);
    }

    if (this.multiSelect && (ref.path === 'selectedRoute' || ref.path == 'selectedRoute.splices')) {
      this._updateSelectedFromRouteMulti(ref.base);
    }
  }

  _updateSelectedFromRoute(route) {
    if (!this.selected && (route === null || (Array.isArray(route) && !route.length))) {
      /* We hit this case when the asset graph is created early (before our
         default `selectedRoute` property has been evaluated to null) and
         we call into this method. We should do nothing in this case. */
      return;
    }
    if (this.selected && (route === null || (Array.isArray(route) && !route.length))) {
      this._squashSelectedChange = true;
      this.deselect(this.selected, 'ROUTE_CHANGED');
      this._squashSelectedChange = false;
      return;
    }

    const item = this._assetGraph.getNodeAtRoute(route, this.keys.id);
    if (item === this.selected) {

    } else if (item) {
      this.select(item, 'ROUTE_CHANGED');
    } else {
      throw new Error(`The route ${JSON.stringify(route)} could not be found in the items graph.`);
    }
  }

  _updateSelectedFromRouteMulti(route) {
    if (this.selected.length && (route === null || (Array.isArray(route) && !route.length))) {
      this._squashSelectedChange = true;
      this.deselect(null, 'ROUTE_CHANGED');
      this._squashSelectedChange = false;
      return;
    }

    if (Array.isArray(route)) {
      for (let i = 0; i < route.length; i++) {
        this._squashSelectedChange = true;
        this.selected = route.map((route) => {
          const item = this._assetGraph.getNodeAtRoute(route, this.keys.id);
          if (!item) {
            throw new Error(`The following item could not be found in the items graph:
              ${JSON.stringify(item)}`);
          }

          return item;
        });
        this._squashSelectedChange = false;
      }
    }
  }

  /**
   * Should only sync changes to `selectedRoute` when necessary to avoid
   * infinite loop of `selected` observer triggering `selectedRoute` observer.
   */
  _selectedChanged(ref) {
    if (!ref || !ref.path || this._squashSelectedChange || !this._assetGraph) return;

    if (!this.multiSelect && ref.path === 'selected' && typeof this.selectedRoute !== 'undefined') {
      this._updateSelectedRoute(ref.base);
    }

    if (this.multiSelect && (ref.path === 'selected' || ref.path === 'selected.splices') && typeof this.selectedRoute !== 'undefined') {
      this._updateSelectedRouteMulti(ref.base);
    }
  }

  _checkIfEmpty(item) {
    if (Array.isArray(item)) return !!item.length;
    return !!item;
  }

  _updateSelectedRoute(selected) {
    if (this._checkIfEmpty(selected)) {
      if (!this._assetGraph.hasNode(selected)) {
        throw new Error(`The following item could not be found in the items graph:
          ${JSON.stringify(selected)}`);
      }

      const route = this._assetGraph.getRoute(selected, this.keys.id);
      if (this._routeIsDifferent(route, this.selectedRoute)) {
        this._squashSelectedRouteChange = true;
        this.selectedRoute = route;
        this._squashSelectedRouteChange = false;
      }
    } else {
      this._squashSelectedRouteChange = true;
      this.selectedRoute = null;
      this._squashSelectedRouteChange = false;
    }
  }

  _updateSelectedRouteMulti(selected) {
    if (selected && Array.isArray(selected) && selected.length) {
      this._squashSelectedRouteChange = true;
      this.selectedRoute = selected.map((item) => {
        if (!this._assetGraph.hasNode(item)) {
          throw new Error(`The following item could not be found in the items graph:
            ${JSON.stringify(item)}`);
        }

        return this._assetGraph.getRoute(item, this.keys.id);
      });
      this._squashSelectedRouteChange = false;
    } else {
      this._squashSelectedRouteChange = true;
      this.selectedRoute = [];
      this._squashSelectedRouteChange = false;
    }
  }

  __selectInitialAssets() {
    if (!this.multiSelect && this.selected && !this.selectedRoute) {
      this._updateSelectedRoute(this.selected);
    } else if (!this.multiSelect && !this.selected && this.selectedRoute) {
      this._updateSelectedFromRoute(this.selectedRoute);
    } else if (this.multiSelect && !!this.selected && this.selected.length && !this.selectedRoute.length) {
      this._updateSelectedRouteMulti(this.selected);
    } else if (this.multiSelect && !!this.selected && !this.selected.length && this.selectedRoute.length) {
      this._updateSelectedFromRouteMulti(this.selected);
    }
  }

  _routeIsDifferent(r1, r2) {
    if (!r1 || !r2) return true;
    if (r1.length !== r2.length) return true;
    for (let i = 0; i < r1.length; i++) {
      if (r1[i] !== r2[i]) return true;
    }
    return false;
  }

  _selectAsset(item, source) {
    const {
      route,
      path
    } = this._assetGraph.getInfo(item, this.keys.id);
    this._lastSelection = {
      item,
      source,
      route
    };
    if (!this.multiSelect) {
      this.selected = item;
    }
    if (this.multiSelect) {
      this.push('selected', item);
    }
    this.fire('px-app-asset-selected', {
      source,
      item,
      route,
      path
    });
  }
  /**
   * Fired when a new item is selected. Includes details about how the item
   * was selected, and information about the new selected item.
   *
   * The `source` property is a string describing what triggered
   * the selection:
   *
   *   * 'DOM_EVENT' - the user interacted with an item and selected it
   *   * 'ROUTE_CHANGED' - the array bound to `selectedRoute` changed
   *   * 'ITEM_CHANGED' - the object bound to `selected` changed
   *   * 'METHOD' - the `select()` method was called
   *
   * The event will have the following properties:
   *
   *   * {Object} detail - Contains the event details
   *   * {String} detail.source - Info about the change trigger, see above
   *   * {Object} detail.item - Reference to the item
   *   * {Array} detail.route - Route from the top of the graph to the item
   *   * {Array} detail.path - Path from the top of the graph to the item
   *
   * @event px-app-asset-selected
   */

  _deselectAsset(item, source) {
    const {
      route,
      path
    } = this._assetGraph.getInfo(item, this.keys.id);
    this._lastSelection = {
      item: null,
      source: null,
      route: null
    };
    if (!this.multiSelect) {
      this.set('selected', null);
      this.fire('px-app-asset-deselected', {
        source,
        item,
        route,
        path
      });
    }
    if (this.multiSelect) {
      this.splice('selected', this.selected.indexOf(item), 1);
      this.fire('px-app-asset-deselected', {
        source,
        item,
        route,
        path
      });
    }
  }
  /**
   * Fired when a new item is deselected. Includes details about how the item
   * was deselected.
   *
   * The `source` property is a string describing what triggered
   * the deselection:
   *
   *   * 'DOM_EVENT' - the user interacted with an item and selected it
   *   * 'ROUTE_CHANGED' - the array bound to `selectedRoute` changed
   *   * 'ITEM_CHANGED' - the object bound to `selected` changed
   *   * 'METHOD' - the `select()` method was called
   *
   * The event will have the following properties:
   *
   *   * {Object} detail - Contains the event details
   *   * {String} detail.source - Info about the change trigger, see above
   *   * {Object} detail.item - Reference to the witem
   *   * {Array} detail.route - Route from the top of the graph to the item
   *   * {Array} detail.path - Path from the top of the graph to the item
   *
   * @event px-app-asset-deselected
   */
}
