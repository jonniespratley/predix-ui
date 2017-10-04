import React from 'react';
import classnames from 'classnames';
import stylesheet from './px-tree-node.scss';
import TreeIcon from './px-tree-icon';
import BaseComponent from '../base-component';
/*

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
*/
class TreeNode extends BaseComponent {
	constructor(props) {
		super(props, {displayName:'TreeNode'});
		this.state = {
			children: []
		};
		this.onCategorySelect = this.onCategorySelect.bind(this);
		this.onChildDisplayToggle = this.onChildDisplayToggle.bind(this);
	}

	onCategorySelect(ev) {
    this._log('onCategorySelect', ev);
		if (this.props.onCategorySelect) {
			this.props.onCategorySelect(this);
		}
		ev.preventDefault();
		ev.stopPropagation();
	}

	onChildDisplayToggle(ev) {
		this._log('onChildDisplayToggle', ev);

		if (this.props.data.children) {
			if (this.state.children && this.state.children.length) {
				this.setState({ children: null });
			} else {
				this.setState({ children: this.props.data.children });
			}
		}
		ev.preventDefault();
		ev.stopPropagation();
	}
	render() {

		if (!this.state.children) {
			this.state.children = [];
		}
    const icon = null;

    const isOpen = this.state.children.length ? true : false;
    const hasChildren = this.props && this.props.data && this.props.data.children;

    let baseClasses = classnames(
			'px-tree-node',
      { tree__leaf: !hasChildren },
			{ tree__branch: hasChildren },
      { selected: this.state.selected },
      { open: isOpen },
			{ closed: this.state.children ? false : true }
    );

		const treeNodeClasses = classnames(
			'tree-node',
			{ active: this.state.selected }
		);

    const treeLabelClasses = classnames(
      'tree__label',
      { selected: this.state.selected }
    );

		return (

			<li className={baseClasses} ref="node" onClick={this.onChildDisplayToggle}>
        <span className={treeLabelClasses} data-id={this.props.data.id}>
          {hasChildren && <TreeIcon className='tree-node__icon' open={isOpen}/>}
          {icon && <span className='tree-node__icon'>{icon}</span>}
          <span onClick={this.onCategorySelect}>{this.props.data.label}</span>
        </span>
        {this.state.children &&   <ul className='collapse-content tree-node__content'>
          {this.state.children.map((child, index) => (
            <TreeNode
              key={index}
              data={child}
              onCategorySelect={this.props.onCategorySelect}/>
          ))}
        </ul>}


        <style jsx>{stylesheet}</style>
			</li>
		);
	}
}
export default TreeNode;
