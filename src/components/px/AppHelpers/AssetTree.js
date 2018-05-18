/* eslint no-plusplus: 0, no-continue: 0, max-len: 0, no-mixed-operators: 0 */
import AssetGraph from './AssetGraph';

export default class AssetTree {
  constructor() {
    this.keys = {
      id: 'id',
      label: 'label',
      children: 'children',
      icon: 'icon'
    };
    this.items = [];
    this.__rootItems = [];
    this._assetGraph = {};
    this._assetGraph = new AssetGraph();
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
      this._assetGraph.addChildren(node, children, Object.assign({}, {
        recursive: true,
        childrenKey: this.keys.children
      }, options || {}));
      if (node === null) {
        const childrenArray = Array.isArray(children) ? children : [children];
        this.__rootItems = this.__rootItems.concat(childrenArray);
      }
      this.fire('px-app-asset-children-updated', node === null ? {
        item: null,
        added: children,
        children: this.__rootItems
      } : Object.assign({}, this._assetGraph.getInfo(node), {
        added: children
      }));
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
      const childrenArray = Array.isArray(children) ? children : [children];

      if (typeof this.activate === 'function' || typeof this.select === 'function') {
        // Deactivate or deselect if the active/selected items are in the path
        // of one of the removed items
        let deactivated;
        let deselected;
        for (let i = 0; i < childrenArray.length; i++) {
          if (!deactivated && typeof this.activate === 'function' && this.activeMeta && (this.activeMeta.item === childrenArray[i] || this.activeMeta.path && this.activeMeta.path.indexOf(childrenArray[i]) > -1)) {
            this.activate(null);
            deactivated = true;
          }
          if (!deselected && typeof this.select === 'function' && this.selectedMeta && (this.selectedMeta.item === childrenArray[i] || this.selectedMeta.path && this.selectedMeta.path.indexOf(childrenArray[i]) > -1)) {
            this.select(null);
            deactivated = true;
          }
        }
      }

      this._assetGraph.removeChildren(node, children, options);
      if (node === null) {
        this.__rootItems = this.__rootItems.filter(item => childrenArray.indexOf(item) === -1);
      }
      this.fire('px-app-asset-children-updated', node === null ? {
        item: null,
        removed: children,
        children: this.__rootItems
      } : Object.assign({}, this._assetGraph.getInfo(node), {
        removed: children
      }));
    }
  }
}
