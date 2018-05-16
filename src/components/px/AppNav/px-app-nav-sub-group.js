import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import AppNavItem from './AppNavItem';
import AppNavSubItem from './AppNavSubItem';

// .px-app-nav-subgroup
const AppNavSubGroup = styled.div`
  line-height: 1.33333;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: block;
  height: auto;
`;
AppNavSubGroup.displayName = 'AppNavSubGroup';
AppNavSubGroup.defaultProps = {
  className: 'px-app-nav-subgroup'
};

// .app-nav-subgroup__dropdown
const AppNavSubGroupDropdown = styled.div`
  height: 0px;
  overflow: hidden;
  ${props => props.opened && css`
    height: auto;
    overflow: auto;
  `}
`;
AppNavSubGroupDropdown.defaultProps = {
  className: 'app-nav-subgroup__dropdown'
};
AppNavSubGroupDropdown.displayName = 'AppNavSubGroupDropdown';

const AppNavSubGroupDropdownContent = styled.div`
  background-color: var(--px-app-nav-subitem-background-color, white);
  max-width: inherit;

  position: relative;

`;
AppNavSubGroupDropdownContent.displayName = 'AppNavGroupDropdownContent';


class AppNavSubGroupComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: props.opened || false,
      children: props.item && props.item.children
    };
  }

  _handleClick = (item, isChild) => {
    let items = this.state.children;

    if (isChild) {
      items = this.props.item.children.map((o) => {
        const obj = o;
        obj.selected = (obj === item);
        return obj;
      });
    }

    this.setState({
      opened: !this.state.opened,
      children: items || null
    });

    if (this.props.onClick) {
      this.props.onClick(item, isChild);
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      opened: nextProps.opened
    });
  }

  render() {
    const { children } = this.state;
    const {
      item,
      selected,
      overflowed,
      onlyShowIcon,
      emptyIcon,
      collapsed,
      opened
    } = this.props;

    return (
      <AppNavSubGroup>
        <AppNavItem
          dropdown
          onClick={() => { this._handleClick(item); }}
          {...item}
          item={item}
          selected={selected}
          overflowed={overflowed}
          collapsed={collapsed}
          onlyShowIcon={onlyShowIcon}
          emptyIcon={emptyIcon}
        />

        <AppNavSubGroupDropdown opened={opened}>
          <AppNavSubGroupDropdownContent>
            {children && children.map(child => (
              <AppNavSubItem
                onClick={() => { this._handleClick(child, true); }}
                key={child.label}
                item={child}
                {...child}
              />
              ))}
          </AppNavSubGroupDropdownContent>
        </AppNavSubGroupDropdown>
      </AppNavSubGroup>
    );
  }
}

AppNavSubGroupComponent.displayName = 'AppNavSubGroup';
AppNavSubGroupComponent.defaultProps = {
  selected: null,
  collapsed: null,
  overflowed: null,
  onClick: null,
  item: null,
  children: null,
  emptyIcon: false,
  opened: null,
  onlyShowIcon: false
};
const itemShape = PropTypes.shape({
  id: PropTypes.string,
  label: PropTypes.string,
  icon: PropTypes.string
});

AppNavSubGroupComponent.propTypes = {
  onClick: PropTypes.func,
  selected: PropTypes.bool,
  collapsed: PropTypes.bool,
  overflowed: PropTypes.bool,
  item: itemShape,
  children: PropTypes.arrayOf(itemShape),
  emptyIcon: PropTypes.bool,
  opened: PropTypes.bool,
  onlyShowIcon: PropTypes.bool
};

export default AppNavSubGroupComponent;
