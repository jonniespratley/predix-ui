import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from '../styled';

const KvpLabel = styled.div`
  font-size: .8rem;
  line-height: 1.66667;
  color: var(--px-headings-label-color,gray);
`;
KvpLabel.displayName = 'KvpLabel';
KvpLabel.defaultProps = {
  className: 'kvp-label',
  size: null
};
KvpLabel.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string
};

const KvpValue = styled.span`
  color: var(--px-headings-value-color, black);
  margin-top: -4px;
  ${props => props.size === 'alpha' && css`
    margin-top: -10px;
  `}
  ${props => props.size === 'beta' && css`
    margin-top: -6px;
  `}
  ${props => props.size === 'gamma' && css`
    margin-top:-12px;
  `}
  ${props => props.size === 'delta' && css`
    margin-top: -8px;
  `}
  ${props => props.size === 'epsilon' && css`
    margin-top: -2px;
  `}
`;
KvpValue.displayName = 'KvpValue';
KvpValue.defaultProps = {
  className: 'kvp-value',
  size: null
};
KvpValue.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string
};

const KvpUom = styled.span`
  margin-left: 0px;
  ${props => props.size === 'value' && css`
    font-size: 1rem;
  `}
  ${props => props.size === 'alpha' && css`
    margin-left: -12px;
  `}
  ${props => props.size === 'beta' && css`
    margin-left: -10px;
  `}
  ${props => props.size === 'gamma' && css`
    margin-left: -8px;
  `}
  ${props => props.size === 'delta' && css`
    margin-left: -4px;
  `}
  ${props => props.size === 'epsilon' && css`
    margin-left: -2px;
  `}
`;
KvpUom.displayName = 'KvpUom';
KvpUom.defaultProps = {
  className: 'kvp-uom',
  size: null
};
KvpUom.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string
};

/* eslint-disable */
const _getAdjustedSize = s => (
  s === 'alpha' ? 'delta' :
    s === 'beta' ? 'epsilon' :
      s === 'gamma' ? 'value' :
        s === 'delta' ? 'value' : 'zeta'
);
/* eslint-enable */

const Component = ({
  label,
  value,
  size,
  uom,
  children
}) => (
  <div className="px-key-value-pair">
    <KvpLabel >{label}</KvpLabel>
    <KvpValue size={_getAdjustedSize(size)} className={size}>
      {value}
      {uom &&
      <KvpUom size={_getAdjustedSize(size)} className={_getAdjustedSize(size)}>{uom}</KvpUom>}
    </KvpValue>
    {children}
  </div>
);

Component.defaultProps = {
  label: null,
  value: null,
  size: null,
  uom: null,
  children: null
};

Component.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  size: PropTypes.string,
  uom: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func])
};

export default Component;
