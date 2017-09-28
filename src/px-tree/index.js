import React from 'react';
import classnames from 'classnames';
import stylesheet from './style.scss';
import TreeNode from './px-tree-node';

/**
 * px-tree component
 */
 export default class Tree extends React.Component {
   constructor(props){
     super(props);
     this.state = {
       selectedNode: null
     };

     this.handleClick = this.handleClick.bind(this);
   }

   handleClick(node){
     this.setState({selectedNode: node});
   }

  render(){
    const {
      style,
      items,
      children
    } = this.props;

    const {selectedNode} = this.state;

    const baseClasses = classnames('px-tree');

    return (
      <div className={baseClasses} style={style}>
        <ul>
          {items && items.map((item, index) => <TreeNode
            onClick={(e) => {this.handleClick(e)}}
            item={item}
            isSelected={selectedNode === item}
            key={index} {...item}/>)}
        </ul>
        <style jsx>{stylesheet}</style>
      </div>
    );
  }
}
