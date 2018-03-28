import React from 'react';
import classnames from 'classnames';
import stylesheet from './px-tree-node.scss';
import TreeIcon from './px-tree-icon';
import BaseComponent from '../BaseComponent';
import styled, {css} from 'styled-components';
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
      'Tree-node',
      {'active': this.state.isActive}
    );
    return (
      <div className={baseClasses}>
        {this._renderNode(this.props, this.state)}
        {children}
        <style>{`${stylesheet}`}</style>
      </div>
    );
  }
}
*/

const TreeNodeIcon = styled.span`
  align-items: center;
  display: flex;
  width: 1rem;
  height: 1rem;
  margin-left: 0.25rem;
	margin-right: 0.25rem;
`;

const TreeNodeLabel = styled.div`
  display: flex;
  align-items: center;
	&:hover {
  	color: var(--px-tree-text-color--hover, black);
  	background-color: var(--px-tree-background-color--hover, lightgray);
	}
	${props => props.selected && css`
		color: var(--px-tree-text-color--selected, white);
  	background-color: var(--px-tree-background-color--selected, gray);
	`}
`;
class TreeNode extends BaseComponent {
	constructor(props) {
		super(props, {displayName:'TreeNode'});
		this.state = {
			children: props.children || []
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
		console.log('onChildDisplayToggle', ev, this.props, this.state);

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
        <TreeNodeLabel data-id={this.props.data.id} selected={this.state.selected}>
          {hasChildren && <TreeIcon className='tree-node__icon' open={isOpen}/>}
          {icon && <TreeNodeIcon>{icon}</TreeNodeIcon>}
          <span onClick={this.onCategorySelect}>{this.props.data.label}</span>
        </TreeNodeLabel>

        {this.state.children &&   
        <ul className='collapse-content tree-node__content'>
          {this.state.children.map((child, index) => (
            <TreeNode
              key={index}
              data={child}
              onCategorySelect={this.props.onCategorySelect}/>
          ))}
        </ul>}

			</li>
		);
	}
}
export default TreeNode;
