import React from 'react';
import classnames from 'classnames';
import styled, {css} from 'styled-components';
import {rem} from 'polished';

const KvpLabel = styled.div`
    font-size: .8rem;
    line-height: 1.66667;
    color: var(--px-headings-label-color,gray);
`;

const KvpValue = styled.span`
  color: var(--px-headings-value-color, black);
  margin-top: ${rem('-4px')};
  ${props => props.size === 'alpha' && css`
    margin-top: ${rem('-10px')}
  `}
  ${props => props.size === 'beta' && css`
    margin-top: ${rem('-6px')}
  `}
  ${props => props.size === 'gamma' && css`
    margin-top: ${rem('-12px')}
  `}
  ${props => props.size === 'delta' && css`
    margin-top: ${rem('-8px')}
  `}
  ${props => props.size === 'epsilon' && css`
    margin-top: ${rem('-2px')}
  `}
`;
KvpValue.displayName = 'KvpValue';

const KvpUom = styled.span`
  margin-left: ${rem('0px')};
  ${props => props.size === 'value' && css`
    font-size: 1rem;
  `}
  ${props => props.size === 'alpha' && css`
    margin-left: ${rem('-12px')}
  `}
  ${props => props.size === 'beta' && css`
    margin-left: ${rem('-10px')}
  `}
  ${props => props.size === 'gamma' && css`
    margin-left: ${rem('-8px')}
  `}
  ${props => props.size === 'delta' && css`
    margin-left: ${rem('-4px')}
  `}
  ${props => props.size === 'epsilon' && css`
    margin-left: ${rem('-2px')}
  `}
`;
KvpUom.displayName = 'KvpUom';
const _getAdjustedSize = (s) => {
  return (
    s === 'alpha' ? 'delta' :
    s === 'beta' ? 'epsilon' :
    s === 'gamma' ? 'value' :
    s === 'delta' ? 'value' : 'zeta'
  );
};
/**
 * KeyValuePair component
 */
export default ({
  label = 'KeyValuePair',
  value,
  size,
  uom,
  children
}) => {

  return (
    <div className='px-key-value-pair'>
      <KvpLabel >{label}</KvpLabel>
      <KvpValue size={_getAdjustedSize(size)} className={size}>
        {value}
        {uom && <KvpUom size={_getAdjustedSize(size)} className={_getAdjustedSize(size)}>{uom}</KvpUom>}
      </KvpValue>
      
    </div>
  );
}
