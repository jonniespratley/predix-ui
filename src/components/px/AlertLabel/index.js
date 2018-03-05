import React from 'react';
import classnames from 'classnames';
//import stylesheet from './px-alert-label.scss';
//import BaseComponent from '../BaseComponent';

import styled, {css} from 'styled-components';

const AlertLabel = styled.div`
  display         : inline-block;
  position        : relative;
  padding         : 5px;
  text-transform  : uppercase;
  text-align      : center;
  font-size       : 0.8rem;
  line-height     : 0.8rem;
  background-color: var(--px-alert-label-background-color--unknown, gray);
  color           : var(--px-alert-label-text-color--unknown, white);
  border          : 1px solid var(--px-alert-label-border-color, transparent);
  
  ${props => props.type === 'info' && css`
    background-color: var(--px-alert-label-background-color--information, blue);
    color           : var(--px-alert-label-text-color--information, white);
  `}
  ${props => props.type === 'error' && css`
    background-color: var(--px-alert-label-background-color--error, yellow);
    color           : var(--px-alert-label-text-color--error, black);
  `}
  ${props => props.type === 'unknown' && css`
    background-color: var(--px-alert-label-background-color--unknown, gray);
    color           : var(--px-alert-label-text-color--unknown, white);
  `}
  ${props => props.type === 'important' && css`
    background-color: var(--px-alert-label-background-color--important, red);
    color           : var(--px-alert-label-text-color--important, white);
  `}
  ${props => props.type === 'warning' && css`
    background-color: var(--px-alert-label-background-color--warning, orange);
    color           : var(--px-alert-label-text-color--warning, white);
  `}
  ${props => props.type === 'healthy' && css`
    background-color: var(--px-alert-label-background-color--healthy, green);
    color           : var(--px-alert-label-text-color--healthy, white);
  `}
  
`;

const _isCircle = (t) =>{
  return t === 'unknown';
};

const _getPoints = (t) => {
  if(t === 'important') {
    return '16.5,3 32,30 1,30';
  }
  else if(t === 'warning') {
    return '16,0.5 32.5,16 16,32.5, 0.5,16';
  }
  else if(t === 'info' || t === 'information') {
    return '6.6,32.5 26.4,32.5 32.5,13 16,0.5 0.5,13';
  }
  else {
    return '3,3 3,30 30,30 30,3';
  }
};

 
export default ({label, type, badge, children}) => {
  const classNames = classnames('alertlabel', type, badge);
  return (
    <AlertLabel type={type}>
      <span className={classNames}>
        {badge && <div>
          {!_isCircle(type) &&
            <svg className="svg-canvas" viewBox="0 0 33 33">
              <polygon id="polygon" points={_getPoints(type)}/>
            </svg>
          }
          {_isCircle(type) &&
            <svg className="svg-canvas" viewBox="0 0 33 33">
              <circle id="circle" cx="16" cy="16" r="15"/>
            </svg>
          }
        </div>}
        <div className='label'>
          <span className='label__text'>{label}</span>
        </div>
      </span>
    </AlertLabel>
  );

};
