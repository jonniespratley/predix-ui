import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

// Drawer
const Drawer = styled.div`
  position: fixed;
  z-index: var(--px-drawer-z-index, 100);
  color: var(--px-drawer-font-color, black);
  background-color: var(--px-drawer-background-color, white);
  width: var(--px-drawer-width, 256px);
  height: var(--px-drawer-height, 100%);
  box-shadow: var(--px-drawer-box-shadow, rgba(0, 0, 0, 0.16) 0 1px 4px, rgba(0, 0, 0, 0.23) 0 1px 4px);

  transition: var(--px-drawer-transition, transform 350ms cubic-bezier(0.23, 1, 0.32, 1));

  ${props => props.anchor === 'left' && css`
    top: 0;
    left: 0;
    right: auto;
    transform: translateX(-110%);
    ${props.opened && css`
      transform: translateX(0);
    `}
  `}

  ${props => props.anchor === 'right' && css`
    top: 0;
    left: auto;
    right: 0;
    transform: translateX(110%);
    ${props.opened && css`
      transform: translateX(0);
    `}
  `}

  ${props => props.anchor === 'top' && css`
    top: 0;
    left: 0;
    bottom: auto;
    right: 0;
    height: auto;
    max-height: 100vh;
    transform: translateY(-110%);
    width: 100%;
    ${props.opened && css`
      transform: translateY(0);
    `}
  `}

  ${props => props.anchor === 'bottom' && css`
    top: auto;
    left: 0;
    bottom: 0;
    right: 0;
    height: auto;
    max-height: 100vh;
    width: 100%;
    transform: translateY(105%);
    width: 100%;
    ${props.opened && css`
      transform: translateY(0);
    `}
  `}

  &::after {
    position: fixed;
    top: 56px;
    bottom: 0;
    left: 100%;
    visibility: visible;
    width: 20px;
    content: "";
  }

  ${props => props.opened && css`
    z-index: var(--px-drawer-z-index, 25);
    visibility: visible;
  `}

  ${props => props.docked && css`
    z-index: var(--px-drawer-z-index, 25);
    visibility: visible;
    transform: translateX(0);
    flex: 0 0 auto;
  `}
`;
Drawer.displayName = 'Drawer';
Drawer.defaultProps = {
  className: 'px-drawer'
};

// Content
const DrawerContent = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  -webkit-overflow-scrolling: touch;
  height: 100%;
  flex: 1 0 auto;
`;
DrawerContent.displayName = 'DrawerContent';
DrawerContent.defaultProps = {
  className: 'px-drawer-content'
};

// Overlay
const DrawerOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: opacity 0.2s ease;
  transform: translateZ(0);
  opacity: 0;
  background: var(--px-drawer-overlay-background, rgba(0, 0, 0, 0.5));
  z-index: -1;
  visibility: hidden;

  ${props => props.opened && css`
    opacity: 1;
    z-index: 15;
    visibility: visible;
    display: block;
  `}
`;
DrawerOverlay.displayName = 'DrawerOverlay';
DrawerOverlay.defaultProps = {
  className: 'px-drawer-overlay'
};


const DrawerComponent = ({
  fixed,
  overlay,
  onOverlayClick,
  opened,
  docked,
  type,
  anchor,
  children
}) => (
  <div>
    <Drawer opened={opened} anchor={anchor} fixed={fixed} docked={docked} type={type}>
      <DrawerContent>{children}</DrawerContent>
    </Drawer>
    {overlay && <DrawerOverlay onClick={onOverlayClick} opened={opened} />}
  </div>
);

DrawerComponent.propTypes = {
  opened: PropTypes.bool,
  fixed: PropTypes.bool,
  docked: PropTypes.bool,
  overlay: PropTypes.bool,
  anchor: PropTypes.string,
  onOverlayClick: PropTypes.func,
  type: PropTypes.string,
  children: PropTypes.node
};

DrawerComponent.defaultProps = {
  opened: false,
  fixed: false,
  overlay: false,
  docked: false,
  onOverlayClick: null,
  type: null,
  children: null,
  anchor: 'left'
};

export default DrawerComponent;
