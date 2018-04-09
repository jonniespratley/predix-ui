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
  
  
  
 
  ${props => props.light && css`
    position: fixed;
  `}
 
  ${props => props.fixed && css`
    position: fixed;
  `}
 
  ${props => props.minimizable && css`
    
  `}

  ${props => props.persistent && css`
    position: fixed;
  `}
  
  ${props => ( props.position === 'left' || props.position === 'right' ) && css`
    height: auto;
    width: 0;
    top: 0;
    bottom: 0;
    transition: width 0.4s cubic-bezier(.78,.13,.16,.87);

    ${props => props.opened && css`
      width: var(--px-panel-size, 320px);
      overflow-y: auto;
    `}

  `}
  

   ${props => props.position === 'left'  && css`
    left: 0;
    ${props => props.fullSize && css`
      left: var(--px-panel-offset--left, 2rem);
      top: var(--px-panel-offset--top, 2rem);
      bottom: var(--px-panel-offset--bottom, 2rem);
    `} 
  `}
  

  ${props => props.position === 'right'  && css`
    right: 0;
    ${props => props.fullSize && css`
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

const PanelContent = styled.div`
  display: block;
  ${props => props.opened && css`
    display: block;
    height: 100%;
  `}
`;

/**
 * Panel component
 */
export default ({
  style,
  

  position,
  fullSize,
  opened,
  fixed,
  persistent,
  floating,
  minimizable,
  children
}) => {
  return (
    <Panel 
      position={position} 
      minimizable={minimizable} 
      fullSize={fullSize} 
      floating={floating} 
      opened={opened} 
      fixed={fixed} >
      <PanelContent>{children}</PanelContent>
    </Panel>

  );
}
