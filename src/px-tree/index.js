import React from 'react';
import classnames from 'classnames';

import stylesheet from './style.scss';


const Chevron = () => (
  <span className='chevron'>
    <svg viewBox="0 0 16 16" preserveAspectRatio="xMidYMid meet" focusable="false"
      width={16}
      height={16}>
      <g>
        <path d="M2.4 6.2l5.5 5.5 5.5-5.5" fill="black"></path>
      </g>
    </svg>
  </span>
);

const TreeNode = ({
  label,
  icon,
  selected,
  isSelected,
  isActive,
  item,
  items,
  children
}) => {
  const treeNodeClasses = classnames(
    'tree__branch',
    {'selected': isSelected},
    {'active': isActive}
  );

  return (
    <div className={treeNodeClasses}>
      <li>
        <Chevron/>
        {icon && <span className='icon'>{icon}</span>}
        <span>{label}</span>
      </li>
      <div className='collapse-content'>
        {items && items.map(i => (<TreeNode {...i}/>))}
      </div>
    </div>
  );
}



/**
 * px-tree component
 */
export default ({
  style,
  items,
  children
}) => {
  const baseClasses = classnames('px-tree', {
    'px-tree--children': children
  });

  return (
    <div className={baseClasses}>
      <ul>
        {items && items.map(item => <TreeNode {...item}/>)}
      </ul>
      <div>{children}</div>
      <style jsx>{stylesheet}</style>
    </div>
  );
}
