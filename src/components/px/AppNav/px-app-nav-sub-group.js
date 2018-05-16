import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import AppNavItem from './AppNavItem';
import AppNavSubItem from './AppNavSubItem';


const AppNavSubGroup = styled.div`
  line-height: 1.33333;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: block;
  height: auto;
`;
AppNavSubGroup.displayName = 'AppNavSubGroup';

const AppNavGroupDropdown = styled.div`
  display: block;
  /*height: calc(100vh - var(--px-app-nav-height, 4rem));*/
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

  position: relative;

`;
AppNavGroupDropdownContent.displayName = 'AppNavGroupDropdownContent';

const AppNavSubGroupDropdown = styled.div`
  height: 0px;
  overflow: hidden;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.3);
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
    if (nextProps.opened !== this.state.opened) {
      this.setState({
        opened: nextProps.opened
      });
    }
  }

  render() {
    const { opened, children } = this.state;
    const {
      item,
      selected,
      overflowed,
      onlyShowIcon,
      emptyIcon,
      collapsed
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
          <AppNavGroupDropdownContent>
            {children && children.map(child => (
              <AppNavSubItem
                onClick={() => { this._handleClick(child, true); }}
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

AppNavSubGroupComponent.displayName = 'AppNavSubGroup';
AppNavSubGroupComponent.defaultProps = {
  selected: false,
  collapsed: false,
  overflowed: false,
  onClick: null,
  item: null,
  children: null,
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
