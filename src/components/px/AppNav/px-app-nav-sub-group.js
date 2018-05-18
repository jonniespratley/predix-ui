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

//
const AppNavSubGroupDropdownContent = styled.div`
  background-color: var(--px-app-nav-subitem-background-color, white);
  max-width: inherit;

  position: relative;

`;
AppNavSubGroupDropdownContent.displayName = 'AppNavSubGroupDropdownContent';


class AppNavSubGroupComponent extends React.Component {
  _handleClick = (item, isChild) => {
    /* let items = this.props.item.children;
    if (isChild) {
      items = this.props.item.children.map((o) => {
        const obj = o;
        obj.selected = (obj === item);
        return obj;
      });
    } */

    this.setState({
      opened: !this.state.opened
      // children: items || null
    });

    if (this.props.onClick) {
      this.props.onClick(item, isChild);
    }
  }

  _shouldComponentUpdate(nextProps, nextState) {
    if (this.props.selected !== nextProps.selected) {
      return true;
    }
    if (this.state.opened !== nextState.opened) {
      return true;
    }
    return false;
  }

  _componentWillReceiveProps(nextProps) {
    console.log('AppNavSubGroup', this.props.item.label, 'componentWillReceiveProps', nextProps.opened);
  }

  onToggle = (e) => {
    if (this.props.onToggle) {
      this.props.onToggle(e);
    }
  }

  render() {
    const {
      item,
      selected,
      overflowed,
      onlyShowIcon,
      emptyIcon,
      collapsed,
      opened
    } = this.props;

    const { children } = item;
    // const { opened } = this.state;
    return (
      <AppNavSubGroup>
        <AppNavItem
          dropdown={!!item.children}
          onClick={() => { this.onToggle(item); }}
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
                label={child.label}
                item={child}
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
  onToggle: null,
  onClick: null,
  item: null,
  // children: null,
  emptyIcon: false,
  opened: false,
  onlyShowIcon: false
};
const itemShape = PropTypes.shape({
  id: PropTypes.string,
  label: PropTypes.string,
  icon: PropTypes.string
});

AppNavSubGroupComponent.propTypes = {
  onToggle: PropTypes.func,
  onClick: PropTypes.func,
  selected: PropTypes.bool,
  collapsed: PropTypes.bool,
  overflowed: PropTypes.bool,
  item: itemShape,
  // children: PropTypes.arrayOf(itemShape),
  emptyIcon: PropTypes.bool,
  opened: PropTypes.bool,
  onlyShowIcon: PropTypes.bool
};

export default AppNavSubGroupComponent;
