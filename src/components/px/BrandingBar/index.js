import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import PredixLogo from './px-predix-svg-logo';
import Logo from './px-ge-svg-logo';
import Flex from '../../../styles/flex';

const BrandingBar = styled.div`
  display         : flex;
  align-items     : center;
  width           : inherit;
  justify-content : space-between;
  height          : var(--px-branding-bar-height, 30px);
  max-height      : 67px;
  min-height      : 30px;
  background-color: var(--px-branding-bar-background-color, black);
  font-size       : var(--px-branding-bar-font-size, 15px);
  color           : var(--px-branding-bar-logo-and-title-text-color, gray);
  padding         : 0 1rem;

  ${props => props.responsiveWidth && css`
      @media (max-width: ${props.responsiveWidth}) {
        display   : none !important;
        visibility: hidden;
    }
  `}
`;
BrandingBar.displayName = 'BrandingBar';
BrandingBar.defaultProps = {
  // responsiveWidth: '768px'
};

const BrandingBarTitle = styled.div`
  margin-left: .5rem;
`;
BrandingBarTitle.displayName = 'BrandingBarTitle';

const BrandingBarPoweredBy = styled.div`
  font-size: 12px;
  margin-right: .3rem;
`;
BrandingBarPoweredBy.displayName = 'BrandingBarPoweredBy';


const Component = ({
  title,
  powered,
  hideLogo,
  customLogo,
  hidePowered,
  responsiveWidth,
  children
}) => (
  <BrandingBar responsiveWidth={responsiveWidth}>
    <Flex middle flex={1}>
      <Flex middle>
        {!customLogo && !hideLogo && <Logo />}
        {customLogo && customLogo()}
      </Flex>
      <Flex middle>
        <BrandingBarTitle>{title}</BrandingBarTitle>
      </Flex>
    </Flex>
    {children && <div>{children}</div>}

    {!hidePowered &&
    <Flex middle>
      <BrandingBarPoweredBy>{powered}</BrandingBarPoweredBy>
      <PredixLogo size={10} />
    </Flex>
  }
  </BrandingBar>
);

Component.propTypes = {
  title: PropTypes.string,
  powered: PropTypes.string,
  responsiveWidth: PropTypes.string,
  hideLogo: PropTypes.bool,
  hidePowered: PropTypes.bool,
  customLogo: PropTypes.func,
  children: PropTypes.node
};

Component.defaultProps = {
  title: 'App Name',
  responsiveWidth: '500px',
  powered: 'Powered by React',
  hideLogo: false,
  hidePowered: false,
  customLogo: null,
  children: null
};

export default Component;
