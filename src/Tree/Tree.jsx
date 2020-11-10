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
            key={item.id}
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

const treeItem = PropTypes.shape({
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  label: PropTypes.string,
  children: PropTypes.arrayOf(treeItem)
});

Tree.propTypes = {
  items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]))),
  onChange: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  style: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])),
  selectedNode: PropTypes.objectOf(PropTypes.string),
  selected: PropTypes.number
};

export default Tree;
