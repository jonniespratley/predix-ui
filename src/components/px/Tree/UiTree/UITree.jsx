/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tree from './Tree';
import Node from './TreeNode';
import styled from 'styled-components';

const MTree = styled.div`
  position: relative; overflow: hidden; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;
  .collapse.caret-right { display: inline; }
  .collapse.caret-right { display: inline; }
  .node {
    display: flex; padding: .2rem; align-items: center; line-height: 1.8rem; font-size: 1rem;
    flex: 1;
    &:hover{
      color: var(--px-tree-text-color--hover, #000);
      background-color: var(--px-tree-background-color--hover, #d3d3d3);
    }
  }
  .is-active {
    color: var(--px-tree-text-color--selected, #fff);
    background-color: var(--px-tree-background-color--selected, gray);
  }
  .m-draggable { position: absolute; opacity: 0.8; }
  .placeholder > * { visibility: hidden; }
  .placeholder { border: 1px dashed var(--px-tree-placeholder-border-color, gray);; }
  .inner {
    position: relative;
    cursor: pointer;
    padding-left: 10px;
    display: flex;
    align-items: center;
  }
  .collapse { cursor: pointer; }
  .caret-down:before { content: '\\25BE'; }
  .caret-right:before { content: '\\25B8'; }
`;

class UITree extends Component {
  constructor(props) {
    super(props);

    this.state = this.init(props);
  }

  componentWillReceiveProps(nextProps) {
    if (!this._updated) {
      this.setState(this.init(nextProps));
    } else {
      this._updated = false;
    }
  }

  init = (props) => {
    const tree = new Tree(props.tree);
    tree.isNodeCollapsed = props.isNodeCollapsed;
    tree.renderNode = props.renderNode;
    tree.changeNodeCollapsed = props.changeNodeCollapsed;
    tree.updateNodesPosition();

    return {
      tree,
      dragging: {
        id: null,
        x: null,
        y: null,
        w: null,
        h: null
      }
    };
  };

  getDraggingDom = () => {
    const { tree, dragging } = this.state;

    if (dragging && dragging.id) {
      const draggingIndex = tree.getIndex(dragging.id);
      const draggingStyles = {
        top: dragging.y,
        left: dragging.x,
        width: dragging.w
      };

      return (
        <div className="m-draggable" style={draggingStyles}>
          <Node
            tree={tree}
            index={draggingIndex}
            paddingLeft={this.props.paddingLeft}
          />
        </div>
      );
    }

    return null;
  };

  render() {
    const { tree, dragging } = this.state;
    const draggingDom = this.getDraggingDom();

    return (
      <MTree className="m-tree">
        {draggingDom}
        <Node
          tree={tree}
          index={tree.getIndex(1)}
          key={1}
          paddingLeft={this.props.paddingLeft}
          onDragStart={this.dragStart}
          onCollapse={this.toggleCollapse}
          dragging={dragging && dragging.id}
        />
      </MTree>
    );
  }

  dragStart = (id, dom, e) => {
    this.dragging = {
      id,
      w: dom.offsetWidth,
      h: dom.offsetHeight,
      x: dom.offsetLeft,
      y: dom.offsetTop
    };

    this._startX = dom.offsetLeft;
    this._startY = dom.offsetTop;
    this._offsetX = e.clientX;
    this._offsetY = e.clientY;
    this._start = true;

    window.addEventListener('mousemove', this.drag);
    window.addEventListener('mouseup', this.dragEnd);
  };

  // oh
  drag = (e) => {
    if (this._start) {
      this.setState({
        dragging: this.dragging
      });
      this._start = false;
    }
    const { tree, dragging, paddingLeft } = this.state;
    let newIndex = null;
    let index = tree.getIndex(dragging.id);
    const { collapsed } = index.node;
    const {
      _startX,
      _startY,
      _offsetX,
      _offsetY
    } = this;
    const pos = {
      x: _startX + e.clientX - _offsetX,
      y: _startY + e.clientY - _offsetY
    };
    dragging.x = pos.x;
    dragging.y = pos.y;

    const diffX = dragging.x - paddingLeft / 2 - (index.left - 2) * paddingLeft;
    const diffY = dragging.y - dragging.h / 2 - (index.top - 2) * dragging.h;

    if (diffX < 0) {
      // left
      if (index.parent && !index.next) {
        newIndex = tree.move(index.id, index.parent, 'after');
      }
    } else if (diffX > paddingLeft) {
      // right
      if (index.prev) {
        const prevNode = tree.getIndex(index.prev).node;
        if (!prevNode.collapsed && !prevNode.leaf) {
          newIndex = tree.move(index.id, index.prev, 'append');
        }
      }
    }

    if (newIndex) {
      index = newIndex;
      newIndex.node.collapsed = collapsed;
      dragging.id = newIndex.id;
    }

    if (diffY < 0) {
      // up
      const above = tree.getNodeByTop(index.top - 1);
      newIndex = tree.move(index.id, above.id, 'before');
    } else if (diffY > dragging.h) {
      // down
      if (index.next) {
        const below = tree.getIndex(index.next);
        if (below.children && below.children.length && !below.node.collapsed) {
          newIndex = tree.move(index.id, index.next, 'prepend');
        } else {
          newIndex = tree.move(index.id, index.next, 'after');
        }
      } else {
        const below = tree.getNodeByTop(index.top + index.height);
        if (below && below.parent !== index.id) {
          if (
            below.children &&
            below.children.length &&
            !below.node.collapsed
          ) {
            newIndex = tree.move(index.id, below.id, 'prepend');
          } else {
            newIndex = tree.move(index.id, below.id, 'after');
          }
        }
      }
    }

    if (newIndex) {
      newIndex.node.collapsed = collapsed;
      dragging.id = newIndex.id;
    }
    this.setState({
      tree,
      dragging
    });
  };

  dragEnd = () => {
    this.setState({
      dragging: {
        id: null,
        x: null,
        y: null,
        w: null,
        h: null
      }
    });

    this.change(this.state.tree);
    window.removeEventListener('mousemove', this.drag);
    window.removeEventListener('mouseup', this.dragEnd);
  };

  change = (tree) => {
    this._updated = true;
    if (this.props.onChange) this.props.onChange(tree.obj);
  };

  toggleCollapse = (nodeId) => {
    const { tree } = this.state;
    const index = tree.getIndex(nodeId);
    const { node } = index;
    node.collapsed = !node.collapsed;
    tree.updateNodesPosition();

    this.setState({
      tree
    });

    this.change(tree);
  };
}

UITree.propTypes = {
  onChange: PropTypes.func,
  //tree: PropTypes.object.isRequired,
  paddingLeft: PropTypes.number,
  renderNode: PropTypes.func.isRequired
};

UITree.defaultProps = {
  paddingLeft: 20,
  onChange: null
};

export default UITree;

