import React from 'react';
import classnames from 'classnames';

import styled, {css} from 'styled-components';

const Panel = styled.div`
  overflow:hidden;
  display: block;
  position: absolute;
  z-index: var(--px-panel-z-index, 100);
  background: var(--px-panel-bg-color--light, #FFF);
  box-shadow: -1px -1px 3px rgba(0,0,0,0.2),
               1px  1px 3px rgba(0,0,0,0.2);
  
  
  
 
  ${props => props.background === 'light' && css`
    background: var(--px-panel-bg-color--light, #fff);
  `}
  ${props => props.background === 'medium' && css`
    background: var(--px-panel-bg-color--medium, #eee);
  `}
  ${props => props.background === 'dark' && css`
    background: var(--px-panel-bg-color--dark, #ddd);
  `}
  ${props => props.light && css`
    position: fixed;
  `}
 
  ${props => props.fixed && css`
    position: fixed;
  `}
 
  ${props => props.minimizable && css`
    width: var(--px-panel-size--minimized,4rem);
  `}

  ${props => props.persistent && css`
    
  `}
  
  ${props => ( props.position === 'left' || props.position === 'right' ) && css`
    height: auto;
    width: 0;
    top: 0;
    bottom: 0;
    transition: width 0.4s cubic-bezier(.78,.13,.16,.87);
    white-space: nowrap;

    ${props => props.opened && css`
      width: var(--px-panel-size, 320px);
      overflow-y: auto;
    `}
  `}
  
   ${props => props.position === 'left'  && css`
    left: 0;
    border-right: 1px solid var(--px-panel-border-color,gray);
    
    ${props => props.floating && css`
      border-right: none;
      left: var(--px-panel-offset--left, 2rem);
      top: var(--px-panel-offset--top, 2rem);
      bottom: var(--px-panel-offset--bottom, 2rem);
    `} 
  `}
  

  ${props => props.position === 'right'  && css`
    right: 0;
    border-left: 1px solid var(--px-panel-border-color,gray);
    
    ${props => props.floating && css`
      border-left: none;
      right: var(--px-panel-offset--right, 2rem);
      top: var(--px-panel-offset--top, 2rem);
      bottom: var(--px-panel-offset--bottom, 2rem);
    `} 

  `}

  ${props => ( props.position === 'top' || props.position === 'bottom' ) && css`
    width: auto;
    height: 0;
    right: 0;
    left: 0;
    transition: height 0.4s cubic-bezier(.78,.13,.16,.87);
    ${props => props.opened && css`
      height: var(--px-panel-size, 320px);
      overflow-y: auto;
    `}
  `}

  
  ${props => props.position === 'top'  && css`
    top: 0;
    border-bottom: 1px solid var(--px-panel-border-color, gray);
    ${props => props.fullSize && css`
      right: var(--px-panel-offset--right, 2rem);
      left: var(--px-panel-offset--left, 2rem);
      top: var(--px-panel-offset--bottom, 2rem);
    `} 
  `}
  
  ${props => props.position === 'bottom'  && css`
    bottom: 0;
    border-top: 1px solid var(--px-panel-border-color, gray);
    ${props => props.fullSize && css`
      right: var(--px-panel-offset--right, 2rem);
      left: var(--px-panel-offset--left, 2rem);
      bottom: var(--px-panel-offset--bottom, 2rem);
    `} 
  `}

 
  
    
`;

Panel.displayName = 'Panel';
Panel.defaultProps = {
  className: 'px-panel'
};

const PanelContent = styled.div`
  display: block;
  ${props => props.opened && css`
    display: block;
    height: 100%;
  `}
`;
PanelContent.displayName = 'PanelContent';
PanelContent.defaultProps = {
  className: 'px-panel-content'
};
/**
 * Panel component
 */
export default ({
  style,
  className,
  background = 'light',
  position = 'right',
  fullSize = false,
  opened = false,
  fixed = false,
  persistent = false,
  floating = false,
  minimizable = false,
  children
}) => {
  return (
    <Panel 
      background={background}
      style={style}
      className={className}
      position={position} 
      minimizable={minimizable} 
      fullSize={fullSize} 
      floating={floating} 
      opened={opened} 
      fixed={fixed}>
      <PanelContent>{children}</PanelContent>
    </Panel>
  );
}
