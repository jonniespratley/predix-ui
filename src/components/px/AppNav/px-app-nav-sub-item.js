import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

/* eslint-disable */
const AppNavSubItem = ({item, selected, onClick}) => (
  <div
    className={classnames('px-app-nav-subitem', { selected })} 
    id={item.id} 
    onClick={onClick}>
    <p className="app-nav-subitem__label">{item.label}</p>
  </div>
)

AppNavSubItem.defaultProps = {
  item: null,
  selected: null,
  onClick: null
};

AppNavSubItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    icon: PropTypes.string
  }),
  selected: PropTypes.bool,
  onClick: PropTypes.func
};

export default AppNavSubItem;
