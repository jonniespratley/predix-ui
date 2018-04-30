import React from 'react';
import PropTypes from 'prop-types';
import TreeNode from './TreeNode';

class Tree extends React.Component {
  constructor(props) {
    super(props, { displayName: 'Tree' });
    this.state = {
      selectedNode: props.selectedNode || null,
      selected: props.selected || null
    };
    this.onSelect = this.onSelect.bind(this);
  }

  onSelect(node) {
    if (this.state.selected) {
      this.state.selected.setState({ selected: false });
    }
    node.setState({ selected: !node.state.selected }, () => {
      this.setState({ selectedNode: node }, () => {
        if (this.props.onChange) {
          this.props.onChange(this.state);
        }
      });
    });
  }

  render() {
    const { items } = this.props;
    const treeStyle = {
      margin: 0,
      padding: 0
    };
    return (
      <ul className="px-tree" style={treeStyle}>
        {items && items.map(item => (
          <TreeNode
            key={item}
            data={item}
            {...item}
            onCategorySelect={this.onSelect}
          />
          ))
        }
      </ul>
    );
  }
}

Tree.defaultProps = {
  items: null,
  children: null,
  style: null,
  onChange: null,
  selectedNode: null,
  selected: null
};

Tree.propTypes = {
  items: null,
  onChange: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  style: PropTypes.objectOf(PropTypes.string),
  selectedNode: PropTypes.objectOf(PropTypes.string),
  selected: null
};

export default Tree;
