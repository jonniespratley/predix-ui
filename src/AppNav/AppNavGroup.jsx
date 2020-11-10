/* eslint-disable react/prop-types */

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styled, { css } from '../styled';

import AppNavItem from './AppNavItem';
import AppNavSubItem from './AppNavSubItem';

const AppNavGroup = styled.div`
  color: var(--px-base-text-color, #2c404c);
  line-height: 1.33333;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  position: relative;
  display: flex;
  height: auto;
  overflow: hidden;

  .px-app-nav-item {
    flex: 1 1 auto;
  }
`;
AppNavGroup.displayName = 'AppNavGroup';

const AppNavSubGroup = styled.div`
  line-height: 1.33333;
  text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: block;
  height: auto;
  .px-app-nav-item {
    flex: 1 1 auto;
  }
`;
AppNavSubGroup.displayName = 'AppNavSubGroup';

const AppNavGroupDropdown = styled.div`
  display: block;
  height: calc(100vh - var(--px-app-nav-height, 4rem));
  z-index: 399;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.3);
  ${props => props.opened && css`
    height: auto;
    overflow: auto;
  `}
`;
AppNavGroupDropdown.displayName = 'AppNavGroupDropdown';

const AppNavGroupDropdownContent = styled.div`
  background-color: var(--px-app-nav-subitem-background-color, white);
  max-width: inherit;
  margin: 1px;
  position: relative;
  top: -1px;
`;
AppNavGroupDropdownContent.displayName = 'AppNavGroupDropdownContent';

const AppNavSubGroupDropdown = styled.div`
  height: 0px;
  overflow: hidden;
  ${props => props.opened && css`
    height: auto;
    overflow: auto;
  `}
`;
AppNavSubGroupDropdown.displayName = 'AppNavSubGroupDropdown';

class AppNavSubGroupComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: props.opened || false
    };
  }

  _handleClick(e, item, isChild) {
    const { opened } = this.state;
    const { onClick } = this.props;
    this.setState({ opened: !opened });
    if (onClick) {
      onClick(item, isChild);
    }
  }

  render() {
    const { opened } = this.props;
    const subgroupClasses = classnames(
      'px-app-nav-sub-group',
      { 'px-app-nav-sub-group--opened': opened }
    );

    const {
      item,
      selected,
      overflowed,
      collapsed,
      onlyShowIcon,
      emptyIcon
    } = this.props;

    return (
      <AppNavSubGroup className={subgroupClasses}>
        <AppNavItem
          dropdown
          onClick={this._handleClick.bind(this, item)} /* eslint-disable-line */
          {...item}
          item={item}
          selected={selected}
          overflowed={overflowed}
          collapsed={collapsed}
          onlyShowIcon={onlyShowIcon}
          emptyIcon={emptyIcon}
        />
        <AppNavSubGroupDropdown opened={opened}>

          <AppNavGroupDropdownContent>
            {item.children && item.children.map(child => (
              <AppNavSubItem
                selected={item.selected}
                onClick={this._handleClick.bind(this, child, true)} /* eslint-disable-line */
                key={child.label}
                item={child}
                {...child}
              />
            ))}
          </AppNavGroupDropdownContent>
        </AppNavSubGroupDropdown>
      </AppNavSubGroup>
    );
  }
}

AppNavSubGroupComponent.displayName = 'AppNavGroup';
AppNavSubGroupComponent.defaultProps = {
  selected: false,
  collapsed: false,
  overflowed: false,
  onClick: null,
  item: null,
  emptyIcon: false,
  opened: false,
  onlyShowIcon: false
};

AppNavSubGroupComponent.propTypes = {
  onClick: PropTypes.func,
  selected: PropTypes.bool,
  collapsed: PropTypes.bool,
  overflowed: PropTypes.bool,
  item: PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    icon: PropTypes.string
  }),
  emptyIcon: PropTypes.bool,
  opened: PropTypes.bool,
  onlyShowIcon: PropTypes.bool
};

export default AppNavSubGroupComponent;
