/* eslint-disable */
import JSTree from 'js-tree';

export default class Tree extends JSTree {
  updateNodesPosition() {
    const top = 1;
    const left = 1;
    const root = this.getIndex(1);
    const self = this;

    root.top += 1;
    root.left += 1;

    if (root.children && root.children.length) {
      walk(root.children, root, left, root.node.collapsed);
    }

    function walk(children, parent, l, collapsed) {
      let height = 1;
      children.forEach(function (id) {
        const node = self.getIndex(id);
        if (collapsed) {
          node.top = null;
          node.left = null;
        } else {
          node.top += 1;
          node.left = l;
        }

        if (node.children && node.children.length) {
          height += walk(
            node.children,
            node,
            left + 1,
            collapsed || node.node.collapsed
          );
        } else {
          node.height = 1;
          height += 1;
        }
      });

      if (parent.node.collapsed) parent.height = 1;
      else parent.height = height;
      return parent.height;
    }
  }

  move(fromId, toId, placement) {
    if (fromId === toId || toId === 1) return;

    const obj = this.remove(fromId);
    let index = null;

    if (placement === 'before') index = this.insertBefore(obj, toId);
    else if (placement === 'after') index = this.insertAfter(obj, toId);
    else if (placement === 'prepend') index = this.prepend(obj, toId);
    else if (placement === 'append') index = this.append(obj, toId);

    // todo: perf
    this.updateNodesPosition();
    return index;
  }

  getNodeByTop(top) {
    const { indexes } = this;
    for (const id in indexes) {
      if (indexes.hasOwnProperty(id)) {
        if (indexes[id].top === top) return indexes[id];
      }
    }
  }
}
