import React from 'react';
import classnames from 'classnames';
import stylesheet from './px-tree-node.scss';
import TreeIcon from './px-tree-icon';



export default class TreeNode extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isSelected: props.selected || false,
      isActive : props.active || false
    }
  }

  handleClick(e){
    console.log('TreeNode.handleClick', e);
    if(this.props.onClick){
      this.props.onClick(this.props.item);
      this.setState({isActive: !this.state.isActive});
    }
  }
  _renderNodes(items){
    return (
      <div className='tree-node__content'>
        {items && items.map((obj, index) => {
          return this._renderNode(obj, this.state);
        })}
      </div>
    );
  }

  _renderNode(props, state){
    const {
      label,
      icon,
      selected,
      item,
      items
    } = props;

    const {isSelected, isActive} = state;
    const treeNodeClasses = classnames(
      {'tree__leaf': !items },
      {'selected': isSelected},
      {'tree__branch': items && items.length}
    );
    return (
      <div className={treeNodeClasses}>
        <div onClick={(e) => {this.handleClick(e)}} className='tree__label'>
          {items && <TreeIcon className='tree-node__icon' open={isActive}/>}
          {icon && <span className='tree-node__icon'>{icon}</span>}
          <span>{label}</span>
        </div>
        {this._renderNodes(items)}
      </div>
    );
  }

  render(){
    const {children} = this.props;
    const baseClasses = classnames(
      'px-tree-node',
      {'active': this.state.isActive}
    );
    return (
      <div className={baseClasses}>
        {this._renderNode(this.props, this.state)}
        {children}
        <style jsx>{stylesheet}</style>
      </div>
    );
  }
}
