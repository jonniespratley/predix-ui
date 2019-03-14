/* eslint-ignore */
import React from 'react';
import cx from 'classnames';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import Tree from './Tree';
import Grid from '../Grid';
import TreeNode from './TreeNode';
import UiTree from './UiTree';


const treeData = [{
  label: 'Leaf 0.0',
  id: 'leaf-0-0'
}, {
  label: 'Leaf 0.1',
  id: 'leaf-0-1'
}, {
  label: 'Leaf 0.2',
  id: 'leaf-0-2'
}, {
  label: 'Branch 0.3',
  id: 'branch-0-3',
  isSelectable: false,
  children: [{
    label: 'Leaf 1.0',
    id: 'leaf-1-0'
  }, {
    label: 'Branch 1.1',
    id: 'branch-1-1',
    children: [{
      label: 'Leaf 2.0',
      id: 'leaf-2-0'
    }, {
      label: 'Leaf 2.1',
      id: 'leaf-2-1'
    }, {
      label: 'Leaf 2.2',
      id: 'leaf-2-2'
    }, {
      label: 'Leaf 2.3',
      id: 'leaf-2-3'
    }]
  }, {
    label: 'Leaf 1.2',
    id: 'leaf-1-2'
  }, {
    label: 'Branch 1.3',
    id: 'branch-1-3',
    children: [{
      label: 'Leaf 2.0',
      id: 'leaf-2-0'
    }, {
      label: 'Leaf 2.1',
      id: 'leaf-2-1'
    }, {
      label: 'Leaf 2.2',
      id: 'leaf-2-2'
    }, {
      label: 'Leaf 2.3',
      id: 'leaf-2-3'
    }, {
      label: 'Leaf 2.4',
      id: 'leaf-2-4'
    }, {
      label: 'Leaf 2.5',
      id: 'leaf-2-5'
    }, {
      label: 'Leaf 2.6',
      id: 'leaf-2-6'
    }, {
      label: 'Leaf 2.7',
      id: 'leaf-2-7'
    }, {
      label: 'Leaf 2.8',
      id: 'leaf-2-8'
    }]
  }, {
    label: 'Leaf 1.4',
    id: 'leaf-1-4'
  }, {
    label: 'Leaf 1.5',
    id: 'leaf-1-5'
  }, {
    label: 'Branch 1.6',
    id: 'branch-1-6',
    children: [{
      label: 'Leaf 2.0',
      id: 'leaf-2-0'
    }, {
      label: 'Leaf 2.1',
      id: 'leaf-2-1'
    }, {
      label: 'Leaf 2.2',
      id: 'leaf-2-2'
    }, {
      label: 'Leaf 2.3',
      id: 'leaf-2-3'
    }, {
      label: 'Leaf 2.4',
      id: 'leaf-2-4'
    }, {
      label: 'Leaf 2.5',
      id: 'leaf-2-5'
    }, {
      label: 'Leaf 2.6',
      id: 'leaf-2-6'
    }, {
      label: 'Leaf 2.7',
      id: 'leaf-2-7'
    }, {
      label: 'Leaf 2.8',
      id: 'leaf-2-8'
    }, {
      label: 'Leaf 2.9',
      id: 'leaf-2-9'
    }]
  }]
}, {
  label: 'Branch 0.4',
  id: 'branch-0-4',
  children: [{
    label: 'Leaf 1.0',
    id: 'leaf-1-0'
  }, {
    label: 'Leaf 1.1',
    id: 'leaf-1-1'
  }, {
    label: 'Leaf 1.2',
    id: 'leaf-1-2'
  }, {
    label: 'Leaf 1.3',
    id: 'leaf-1-3'
  }, {
    label: 'Leaf 1.4',
    id: 'leaf-1-4'
  }, {
    label: 'Leaf 1.5',
    id: 'leaf-1-5'
  }, {
    label: 'Leaf 1.6',
    id: 'leaf-1-6'
  }, {
    label: 'Leaf 1.7',
    id: 'leaf-1-7'
  }, {
    label: 'Leaf 1.8',
    id: 'leaf-1-8'
  }]
}, {
  label: 'Leaf 0.5',
  id: 'leaf-0-5'
}, {
  label: 'Branch 0.6',
  id: 'branch-0-6',
  children: [{
    label: 'Leaf 1.0',
    id: 'leaf-1-0'
  }, {
    label: 'Leaf 1.1',
    id: 'leaf-1-1'
  }, {
    label: 'Leaf 1.2',
    id: 'leaf-1-2'
  }, {
    label: 'Leaf 1.3',
    id: 'leaf-1-3'
  }, {
    label: 'Leaf 1.4',
    id: 'leaf-1-4'
  }, {
    label: 'Leaf 1.5',
    id: 'leaf-1-5'
  }]
}, {
  label: 'Branch 0.7',
  id: 'branch-0-7',
  children: [{
    label: 'Leaf 1.0',
    id: 'leaf-1-0'
  }, {
    label: 'Leaf 1.1',
    id: 'leaf-1-1'
  }, {
    label: 'Leaf 1.2',
    id: 'leaf-1-2'
  }, {
    label: 'Leaf 1.3',
    id: 'leaf-1-3'
  }, {
    label: 'Leaf 1.4',
    id: 'leaf-1-4'
  }, {
    label: 'Leaf 1.5',
    id: 'leaf-1-5'
  }]
}, {
  label: 'Leaf 0.8',
  id: 'leaf-0-8',
  isSelectable: false
}];


const mockNode = {
  id: 'node-1',
  label: 'Node 1',
  children: [
    { id: 'node-1-a', label: 'Node 1a' },
    { id: 'node-1-b', label: 'Node 1d' },
    { id: 'node-1-c', label: 'Node 1c' }
  ]
};

const mockTree = {
  id: 0,
  label: 'react-ui-tree',
  children: treeData
};

const nodeKeys = {
  id: 'id',
  label: 'label',
  children: 'children',
  icon: 'icon'
};

class ExampleApp extends React.Component {
  state = {
    active: null,
    tree: mockTree
  };

  /* eslint-disable */
  renderNode = node => (
    <span
      data-id={node[nodeKeys.id]}
      data-icon={node[nodeKeys.icon]}
      className={cx('node', { 'is-active': node === this.state.active })}
      onClick={this.onClickNode.bind(null, node)}
    >
      {node[nodeKeys.label]}
    </span>
  );

  /* eslint-enable */
  onClickNode = (node) => {
    this.setState({
      active: node
    });
  };

  handleChange = (tree) => {
    this.setState({
      tree
    });
  };

  updateTree = () => {
    const { tree } = this.state;
    tree.children.push({ module: 'Node Label' });
    this.setState({
      tree
    });
  };

  render() {
    const demoGridStyles = {
      position: 'relative',
      minHeight: 500
    };
    const demoInspectorStyles = {
      position: 'absolute',
      left: 300
    };
    const demoTreeStyles = {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      width: 300,
      overflowX: 'hidden',
      overflowY: 'auto',
      backgroundColor: '#fff'
    };
    return (
      <Grid style={demoGridStyles}>
        <div style={demoTreeStyles}>
          <UiTree
            paddingLeft={20}
            tree={this.state.tree}
            onChange={this.handleChange}
            isNodeCollapsed={this.isNodeCollapsed}
            renderNode={this.renderNode}
          />
        </div>
        <div style={demoInspectorStyles}>
          <button onClick={this.updateTree}>update tree</button>
          <pre>{JSON.stringify(this.state.tree, null, '  ')}</pre>
        </div>

        <style>
{`
          .is-active {
            color: blue;
          }
        `}
        </style>
      </Grid>
    );
  }
}


storiesOf('Components / Tree', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <Tree
      items={treeData}
      onChange={action('onChange')}
    />
  ))
  .add('with UI Tree', () => (
    <ExampleApp />
  ))
  .add('with TreeNode', () => (
    <TreeNode
      onChange={action('onChange')}
      onCategorySelect={action('onCategorySelect')}
      isSelectable={boolean('isSelectable', true)}
      selected={boolean('selected', false)}
      open={boolean('open', false)}
      data={mockNode}
    />
  ));
