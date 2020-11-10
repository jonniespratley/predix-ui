import { AssetGraph } from './AssetGraph';

import Mitt from '../utils/mitt';

const emitter = new Mitt();

const assetGraph = options => (new AssetGraph(options));

export default class AssetGraphBehavior {
  items = null;

  keys = {
    id: 'id',
    label: 'label',
    children: 'children',
    icon: 'icon'
  };

  emitter = emitter;

  constructor() {
    this.on = emitter.on;
    this.off = emitter.off;
    this.fire = emitter.emit;
    this.addEventListener = emitter.on;
    this._createAssetGraph = assetGraph.bind(this);
  }


  select(obj) {
    this.selected = obj;
  }

  activate(obj) {
    this.active = obj;
  }


  set items(val) {
    this.__handleAssetReferenceChanged(val, this.keys);
    return this;
  }

  __handleAssetReferenceChanged(items, keys) {
    if (typeof items === 'object' && Array.isArray(items)) {
      if (this._assetGraph !== null) {
        // The items were re-assigned to a new object, re-build the asset graph and dump
        // all the previous data and state
        if (typeof this.activate === 'function') {
          this.activate(null);
        }
        if (typeof this.select === 'function') {
          this.select(null);
        }
        if (typeof this.favorite === 'function') {
          this.favorite(null);
        }
      }

      this._assetGraph = this._createAssetGraph();
      this
        ._assetGraph
        .addChildren(null, items, {
          recursive: true,
          childrenKey: keys.children
        });
      this.__rootItems = items.slice(0);
      this.fire('px-app-asset-graph-created', { graph: this._assetGraph });
    }
    return this._assetGraph;
  }

  __handleKeyUpdated(record) {
    if (!this._assetGraph) {
      return;
    }
    if (record.path === 'keys.children') {
      this.__handleAssetReferenceChanged(this.items, this.keys);
    }
    if (record.path === 'keys.id') {
      // The items were re-assigned to a new object, re-build the asset graph and dump
      // all the previous data and state
      if (typeof this.activate === 'function') {
        this.activate(null);
      }
      if (typeof this.select === 'function') {
        this.select(null);
      }
      if (typeof this.favorite === 'function') {
        this.favorite(null);
      }
    }
  }

  /**
     * Adds a child or children to the requested node. Pass a single object
     * to add one child, or an array of objects to add multiple children.
     *
     * The `node` should be a direct reference to one of the objects already
     * in the asset graph (e.g. one of the `items` objects or another node
     * added through the `addChildren` API). To remove children from the root
     * of the graph, call with `node` as null.
     *
     * @param  {Object|null} node
     * @param  {Object|Array<Object>} children
     */
  addChildren(node, children, options) {
    if (this._assetGraph !== null) {
      this
        ._assetGraph
        .addChildren(node, children, Object.assign({}, {
          recursive: true,
          childrenKey: this.keys.children
        }, options || {}));
      if (node === null) {
        const childrenArray = Array.isArray(children)
          ? children
          : [children];
        this.__rootItems = this
          .__rootItems
          .concat(childrenArray);
      }
      this.fire('px-app-asset-children-updated', node === null
        ? {
          item: null,
          added: children,
          children: this.__rootItems
        }
        : Object.assign({}, this._assetGraph.getInfo(node), { added: children }));
    }
  }

  /**
     * Removes a child or children from the requested node. Pass `children` a
     * single object to remove one child, an array of objects to remove multiple
     * children, or null to remove all children.
     *
     * The `node` should be a direct reference to one of the objects already
     * in the asset graph (e.g. one of the `items` objects or another node
     * added through the `addChildren` API). To add children to the root
     * of the graph, call with `node` as null.
     *
     * @param  {Object|null} node
     * @param  {Object|Array<Object>} children
     */
  removeChildren(node, children, options) {
    if (this._assetGraph !== null) {
      const childrenArray = Array.isArray(children)
        ? children
        : [children];

      if (typeof this.activate === 'function' || typeof this.select === 'function') {
        // Deactivate or deselect if the active/selected items are in the path of one of
        // the removed items
        let deactivated;
        let deselected;
        /* eslint-disable-next-line */
        for (let i = 0; i < childrenArray.length; i++) {
          /* eslint-disable-next-line */
          if (!deactivated && typeof this.activate === 'function' && this.activeMeta && (this.activeMeta.item === childrenArray[i] || this.activeMeta.path && this.activeMeta.path.indexOf(childrenArray[i]) > -1)) {
            this.activate(null);
            deactivated = true;
          }
          /* eslint-disable-next-line */
          if (!deselected && typeof this.select === 'function' && this.selectedMeta && (this.selectedMeta.item === childrenArray[i] || this.selectedMeta.path && this.selectedMeta.path.indexOf(childrenArray[i]) > -1)) {
            this.select(null);
            deactivated = true;
          }
        }
      }

      this
        ._assetGraph
        .removeChildren(node, children, options);
      if (node === null) {
        this.__rootItems = this
          .__rootItems
          .filter(item => childrenArray.indexOf(item) === -1);
      }
      this.fire('px-app-asset-children-updated', node === null
        ? {
          item: null,
          removed: children,
          children: this.__rootItems
        }
        : Object.assign({}, this._assetGraph.getInfo(node), { removed: children }));
    }
  }
}
