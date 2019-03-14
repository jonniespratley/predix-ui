import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

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
      opened: props.opened || false,
      children: props.item && props.item.children
    };
  }

  _handleClick(e, item, isChild) {
    const { onClick } = this.props;
    const { opened, children } = this.state;
    let items = children;

    if (isChild) {
      items = item.children.map((o) => {
        const obj = o;
        obj.selected = (obj === e);
        return obj;
      });
    }

    this.setState({
      opened: !opened,
      children: items || null
    });

    if (onClick) {
      onClick(item, isChild);
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
      // selected,
      overflowed,
      onlyShowIcon,
      emptyIcon
    } = this.props;

    return (
      <AppNavSubGroup>
        <AppNavItem
          dropdown
          onClick={this._handleClick.bind(this, item)} /* eslint-disable-line */
          {...item}
          item={item}
          selected={opened}
          overflowed={overflowed}
          collapsed={!opened}
          onlyShowIcon={onlyShowIcon}
          emptyIcon={emptyIcon}
        />
        <AppNavGroupDropdown>
          <AppNavSubGroupDropdown opened={opened}>
            <AppNavGroupDropdownContent>
              {children && children.map(child => (
                <AppNavSubItem
                  onClick={this._handleClick.bind(this, child, true)} /* eslint-disable-line */
                  selected={child.selected}
                  key={child.label}
                  item={child}
                  {...child}
                />
              ))}
            </AppNavGroupDropdownContent>
          </AppNavSubGroupDropdown>
        </AppNavGroupDropdown>
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
