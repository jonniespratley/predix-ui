import React from 'react';
import PropTypes from 'prop-types';
import styled from '../styled';
import Icon from '../Icon/Icon';

const Navbar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  -webkit-touch-callout: none;
  user-select: none;
  transform: translate3d(0, 0, 0);
  transition: var(--px-navbar-transition, transform 0.4s cubic-bezier(0.215, 0.61, 0.355, 1));

  font-size: 15px;
  border-bottom: 1px solid gray;
  border-bottom: var(--px-navbar-border-bottom, 1px solid gray);
  background-color: var(--px-navbar-background-color, white);
  color: var(--px-navbar-color, black);
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.15);
  svg {
    stroke: none;
    fill: var(--px-navbar-color, currentColor);
    color: currentColor;
  }
  button {
    padding: 0.33333rem;
    letter-spacing: 0;
    line-height: 20px;
    padding: 0.33333rem;
    min-width: 2.93333rem;
    min-height: 2.93333rem;
    transition: none;
    vertical-align: middle;
    -webkit-box-shadow: none;
    box-shadow: none;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    box-sizing: border-box;
    min-width: 2.93333rem;
    height: 2.93333rem;
    border: 0 !important;
    border-radius: 0 !important;
    line-height: inherit;
    padding-left: 0;
    padding-right: 0;
    box-shadow: none;
    background: none;
    outline: none;

    cursor: pointer;

    &:disabled{
    opacity: 0.3;
    cursor: default;
    pointer-events: none;
    }

    &:focus {
      outline: none;
      transition: none;
    }

    &:hover {
      box-shadow: none;
      transition: none;
    }

    &:link,
    &:visited{
      box-shadow: none;
      background: none;
      outline: none;
      color: var(--px-btn-bare-color, #2c404c);
    }
    &:hover,
    &:focus {

      background-color: transparent;
    }
    &:active {

      background-color: var(--px-btn-background-color--pressed, rgba(0,0,0,0.23));
    }
  }
`;
Navbar.defaultProps = {
  className: 'px-navbar'
};

const NavbarInner = styled.div`
  box-sizing: border-box;
  white-space: nowrap;
  align-items: center;
  justify-content: space-between;
  height: 56px;
  padding: 0.33333rem;
  display: flex;
  overflow: hidden;
`;

const NavbarCenter = styled.div`
  order: 2;
  flex: 1 0 auto;
  align-self: center;
  margin-left: 0.33333rem;
`;

const NavbarLeft = styled.div`
  order: 0;
  align-self: center;
  display: flex;
  align-content: center;
`;

const NavbarRight = styled.div`
  order: 3;
  align-self: center;
  display: flex;
  align-content: center;
`;

const NavbarTitle = styled.div`
  display: block;
  margin: 0;
  padding: 0;
  user-select: none;
`;

const NavbarSubTitle = styled.div`
 display: block;
`;

/**
 * Navbar component
 */
const Component = ({
  backButtonLabel = '<',
  title,
  subtitle,
  onTitleClick,
  showBackButton,
  showMenuButton,
  onBackButtonClick,
  onMenuButtonClick,
  iconNameLeft,
  iconNameRight,

  iconElementLeft,
  iconElementRight,

  onLeftIconButtonClick,
  onRightIconButtonClick
}) => (
  <Navbar>
    <NavbarInner>
      <NavbarLeft>

        {showMenuButton
        && (
        <button className="navbar__button flex flex--center toggle__menu" onClick={onMenuButtonClick} type="button">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M0 0h24v24h-24z" fill="none" />
            <path d="M3 18h18v-2h-18v2zm0-5h18v-2h-18v2zm0-7v2h18v-2h-18z" />
          </svg>
        </button>
        )}

        {showBackButton
        && (
        <button className="navbar__button" onClick={onBackButtonClick} type="button">
          {backButtonLabel}
        </button>
        )
        }

        {iconNameLeft
        && (
        <button onClick={onLeftIconButtonClick} type="button">
          <Icon icon={iconNameLeft} size={22} />
        </button>
        )}

        {iconElementLeft && iconElementLeft}
      </NavbarLeft>
      <NavbarCenter>
        <NavbarTitle onClick={onTitleClick}>{title}</NavbarTitle>
        <NavbarSubTitle>{subtitle}</NavbarSubTitle>
      </NavbarCenter>
      <NavbarRight>
        {iconNameRight
        && (
        <button onClick={onRightIconButtonClick} type="button">
          <Icon icon={iconNameRight} size={22} />
        </button>
        )}
        {iconElementRight && iconElementRight}
      </NavbarRight>
    </NavbarInner>
  </Navbar>
);

Component.defaultProps = {
  title: null,
  subtitle: null,
  backButtonLabel: null,
  onTitleClick: null,
  showBackButton: null,
  showMenuButton: null,
  onBackButtonClick: null,
  onMenuButtonClick: null,
  iconNameLeft: null,
  iconNameRight: null,
  iconElementLeft: null,
  iconElementRight: null,
  onLeftIconButtonClick: null,
  onRightIconButtonClick: null
};

Component.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  backButtonLabel: PropTypes.string,
  onTitleClick: PropTypes.func,
  showBackButton: PropTypes.bool,
  showMenuButton: PropTypes.bool,
  onBackButtonClick: PropTypes.func,
  onMenuButtonClick: PropTypes.func,
  iconNameLeft: PropTypes.string,
  iconNameRight: PropTypes.string,
  iconElementLeft: PropTypes.node,
  iconElementRight: PropTypes.node,
  onLeftIconButtonClick: PropTypes.func,
  onRightIconButtonClick: PropTypes.func
};

Component.displayName = 'Navbar';

export default Component;
