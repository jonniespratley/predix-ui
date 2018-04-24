import React from 'react';
import classnames from 'classnames';
import AppNav from '../AppNav';
import BrandingBar from '../BrandingBar';

/**
 * AppHeader component
 */
const AppHeader = ({
  title,
  selected,
  selectedItem,
  onChange,
  items,
  style,
  children
}) => (
  <div>
    <BrandingBar title={title} />
    {items && <AppNav items={items} selected={selected} onChange={onChange} />}
    {children && <div>{children}</div>}
  </div>
);

AppHeader.displayName = 'AppHeader';
export default AppHeader;
