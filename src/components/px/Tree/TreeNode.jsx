import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Icon from '../IconSet/Icon';

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


class TreeNode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      children: [],
      data: props.data,
      selected: props.selected,
      isSelectable: props.isSelectable
    };
    this.onCategorySelect = this.onCategorySelect.bind(this);
    this.onChildDisplayToggle = this.onChildDisplayToggle.bind(this);
  }

  onCategorySelect(ev) {
    ev.preventDefault();
    ev.stopPropagation();
    if (this.props.onCategorySelect && !this.state.isSelectable) {
      this.props.onCategorySelect(this);
    }
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
    const isOpen = !!(this.state.children && this.state.children.length);
    const hasChildren = this.props && this.props.data && this.props.data.children;
    const { data, selected, children } = this.state;
    const { id, label, icon } = data || this.props;
    const openIcon = (isOpen ? 'px-utl:chevron' : 'px-utl:chevron-right');
    return (
      <TreeNodeStyled
        open={isOpen}
        closed={!children}
        leaf={!hasChildren}
        branch={!!hasChildren}
        data-open={isOpen}
        data-leaf={!hasChildren}
        data-branch={!!hasChildren}
        selected={this.state.selected}
        ref={(el) => { this.node = el; }}
        onClick={this.onChildDisplayToggle}
      >

        <TreeNodeLabel
          data-id={id}
          selected={selected}
          leaf={!hasChildren}
          branch={!!hasChildren}
        >
          {hasChildren && <TreeNodeIcon><Icon icon={openIcon} size={16} /></TreeNodeIcon>}
          {icon && <TreeNodeIcon><Icon icon={icon} size={16} /></TreeNodeIcon>}
          <span onClick={this.onCategorySelect}>{label}</span> {/* eslint-disable-line*/}
        </TreeNodeLabel>

        {this.state.children
        && (
        <TreeNodeContent open={isOpen}>
          {this.state.children.map(child => (
            <TreeNode
              key={child.id}
              data={child}
              {...child}
              onCategorySelect={this.props.onCategorySelect}
            />
          ))}
        </TreeNodeContent>
        )}

      </TreeNodeStyled>
    );
  }
}

TreeNode.defaultProps = {
  id: null,
  label: null,
  data: null,
  selected: false,
  onCategorySelect: null,
  isSelectable: true
};
TreeNode.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  label: PropTypes.string,
  onCategorySelect: PropTypes.func,
  data: PropTypes.shape({
    children: PropTypes.arrayOf(PropTypes.any)
  }),
  selected: PropTypes.bool,
  isSelectable: PropTypes.bool
};

export default TreeNode;
