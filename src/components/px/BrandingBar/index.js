import React from 'react';
import PredixLogo from './px-predix-svg-logo';
import Logo from './px-ge-svg-logo';
import styled, { css } from 'styled-components';
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
	padding			: 0 1rem;

	
	${props => props.responsiveWidth && css`
    	@media (max-width: ${props && props.responsiveWidth}) {
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

// https://www.predix-ui.com/#/elements/px-branding-bar
export default ({
  title = 'Application Name',
  powered = 'Powered by React',
  hideLogo,
  customLogo,
  hidePowered,
  children
}) => (
  <BrandingBar>
    <Flex middle flex={1}>
      <Flex middle>
        {customLogo || !hideLogo && <Logo />}
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
