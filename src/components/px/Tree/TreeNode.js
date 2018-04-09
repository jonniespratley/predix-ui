import React from 'react';
import classnames from 'classnames';
//import stylesheet from './px-tree-node.scss';
import TreeIcon from './TreeNodeIcon';
import BaseComponent from '../BaseComponent';
import styled, {css} from 'styled-components';
import Icon from '../IconSet/Icon';
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
const TreeNodeStyled = styled.li`
	list-style: none;
  padding: 0;
  margin: 0;
  line-height: 1.8rem;
  user-select: none;
  
  

`;
TreeNodeStyled.displayName = 'TreeNode';

const TreeNodeIcon = styled.span`
  align-items: center;
  display: flex;
  width: 1rem;
  height: 1rem;
  margin-left: 0.25rem;
	margin-right: 0.25rem;
`;
TreeNodeIcon.displayName = 'TreeNodeIcon';

const TreeNodeContent = styled.ul`
  margin: 0;
  list-style:none;
  padding-left: 1.5rem !important;
  display: none;
  ${props => props.active && css`
    display: block;
	`}
  ${props => props.open && css`
    display: block;
	`}
`;
TreeNodeContent.displayName = 'TreeNodeContent';

const TreeNodeLabel = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
	&:hover {
    color: var(--px-tree-text-color--hover, black);
    background-color: var(--px-tree-background-color--hover, lightgray);
	}
	
  
  
  ${props => props.selected && css`
    color: var(--px-tree-text-color--selected,#fff);
    background-color: var(--px-tree-background-color--selected,gray);
  `}
  
	${props => props.leaf && css`
		padding-left: 1.75rem;
    &:hover{
      color: var(--px-tree-text-color--hover,#000);
      background-color: var(--px-tree-background-color--hover,#d3d3d3);
    }
  `}

	${props => props.branch && css`
		padding-left: 1.75rem;
    &:hover{
      color: var(--px-tree-text-color--hover,#000);
      background-color: var(--px-tree-background-color--hover,#d3d3d3);
    }
  `}
`;
TreeNodeLabel.displayName = 'TreeNodeLabel';


class TreeNode extends BaseComponent {
	constructor(props) {
		super(props, {displayName:'TreeNode'});
		this.state = {
      children: [],
      id: props.id || null,
      label: props.label || null,
      data: props.data || null,
      selected: props.selected || false,
      isSelectable: props.isSelectable || true
		};
		this.onCategorySelect = this.onCategorySelect.bind(this);
		this.onChildDisplayToggle = this.onChildDisplayToggle.bind(this);
	}

	onCategorySelect(ev) {
		if (this.props.onCategorySelect) {
			this.props.onCategorySelect(this);
		}
		ev.preventDefault();
		ev.stopPropagation();
	}

	onChildDisplayToggle(ev) {

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

    const isOpen = this.state.children && this.state.children.length  ? true : false;
    const hasChildren = this.props && this.props.data && this.props.data.children;
 
    const {id, label, icon} = this.props || this.props.data;
    const openIcon = (isOpen ? 'px-utl:chevron' : 'px-utl:chevron-right');
		return (
			<TreeNodeStyled 
        open={isOpen}
        
        closed={this.state.children ? false : true}
        leaf={!hasChildren} 
        branch={hasChildren ? true : false} 
        data-open={isOpen}
        data-leaf={!hasChildren} 
        data-branch={hasChildren ? true : false} 
        selected={this.state.selected}
        ref={(el) => {this.node = el;}} 
        onClick={this.onChildDisplayToggle}>
        
        <TreeNodeLabel 
          data-id={id} 
          selected={this.state.selected} 
          leaf={!hasChildren}  
          branch={hasChildren ? true : false} >
          {hasChildren && <TreeNodeIcon><Icon icon={openIcon} size={16}/></TreeNodeIcon>}
          {icon && <TreeNodeIcon><Icon icon={icon} size={16}/></TreeNodeIcon>}
          <span onClick={this.onCategorySelect}>{label}</span>
        </TreeNodeLabel>

        {this.state.children &&   
        <TreeNodeContent open={isOpen}>
          {this.state.children.map((child, index) => (
              <TreeNode
                key={index}
                data={child}
                {...child}
                onCategorySelect={this.props.onCategorySelect}/>
            ))}
        </TreeNodeContent>}

			</TreeNodeStyled>
		);
	}
}
export default TreeNode;
