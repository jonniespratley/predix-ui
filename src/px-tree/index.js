import React from 'react';
import classnames from 'classnames';
import stylesheet from './style.scss';
import TreeNode from './px-tree-node';

import BaseComponent from '../base-component';
/**
 * px-tree component
 */
 export default class Tree extends BaseComponent{
   constructor(props){
     super(props, {displayName: 'Tree'});
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

    const { selectedNode } = this.state;

    const baseClasses = classnames('px-tree');

    return (
      <div className={baseClasses} style={style}>
        <TreeNode data={items}/>
        <style jsx>{stylesheet}</style>
      </div>
    );
  }
}
