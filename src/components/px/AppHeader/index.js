import React from 'react';
import PropTypes from 'prop-types';
import AppNav from '../AppNav';
import BrandingBar from '../BrandingBar';

/**
 * AppHeader component
 */
const AppHeader = ({
  title,
  selected,
  onChange,
  items,
  children
}) => (
  <div>
    <BrandingBar title={title} />
    {items && <AppNav items={items} selected={selected} onChange={onChange} />}
    {children && <div>{children}</div>}
  </div>
);

AppHeader.defaultProps = {
  title: null,
  selected: null,
  onChange: null,
  items: null,
  children: null
};

AppHeader.propTypes = {
  title: PropTypes.string,
  selected: PropTypes.number,
  onChange: PropTypes.func,
  items: PropTypes.arrayOf([
    PropTypes.any
  ]),
  children: PropTypes.node
};

AppHeader.displayName = 'AppHeader';

export default AppHeader;
