/* eslint-ignore */
import cx from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
/**
 * Taken from https://raw.githubusercontent.com/jonniespratley/react-ui-tree/master/lib/node.js
 */
class UITreeNode extends Component {
  renderCollapse = () => {
    const { index } = this.props;
    if (index.children && index.children.length) {
      const { collapsed } = index.node;
      return (
        <span
          className={cx('collapse', collapsed ? 'caret-right' : 'caret-down')}
          onMouseDown={e => e.stopPropagation()} /* eslint-ignore-line */
          onClick={this.handleCollapse} /* eslint-ignore-line */
        />
      );
    }
    return null;
  };

  renderChildren = () => {
    const { index, tree, dragging } = this.props;
    if (index.children && index.children.length) {
      const childrenStyles = {
        paddingLeft: this.props.paddingLeft
      };
      return (
        <div className="children" style={childrenStyles}>
          {index.children.map((child) => {
            const childIndex = tree.getIndex(child);

            return (
              <UITreeNode
                tree={tree}
                index={childIndex}
                key={childIndex.id}
                dragging={dragging}
                paddingLeft={this.props.paddingLeft}
                onCollapse={this.props.onCollapse}
                onDragStart={this.props.onDragStart}
              />
            );
          })}
        </div>
      );
    }
    return null;
  };

  handleInnerRef = (el) => {
    this.inner = el;
  };

  render() {
    const { tree, index, dragging } = this.props;
    const { node } = index;
    const styles = {};

    return (
      <div
        className={cx('m-node', {
          placeholder: index.id === dragging
        })}
        style={styles}
      >
        <div className="inner" ref={this.handleInnerRef} onMouseDown={this.handleMouseDown}>
          {this.renderCollapse()}
          {tree.renderNode(node)}
        </div>
        {node.collapsed ? null : this.renderChildren()}
      </div>
    );
  }

  handleCollapse = (e) => {
    e.stopPropagation();
    const nodeId = this.props.index.id;
    if (this.props.onCollapse) {
      this.props.onCollapse(nodeId);
    }
  };

  handleMouseDown = (e) => {
    const nodeId = this.props.index.id;
    const dom = this.inner;
    if (this.props.onDragStart) {
      this.props.onDragStart(nodeId, dom, e);
    }
  };
}

UITreeNode.defaultProps = {
  tree: null,
  paddingLeft: null,
  dragging: null,
  onCollapse: null,
  onDragStart: null,
  index: null
};
UITreeNode.propTypes = {
  tree: PropTypes.node,
  paddingLeft: PropTypes.number,
  dragging: PropTypes.bool,
  onCollapse: PropTypes.func,
  onDragStart: PropTypes.func,
  index: PropTypes.shape({
    id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ])
  })
};

export default UITreeNode;
