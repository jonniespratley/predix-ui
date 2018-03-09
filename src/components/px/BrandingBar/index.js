import React from 'react';
import PredixLogo from './px-predix-svg-logo';
import Logo from './px-ge-svg-logo';
import styled, {css} from 'styled-components';
import Flex from '../../flex';

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
	@media (max-width: 44em) {
		display   : none !important;
		visibility: hidden;
	}
`;
BrandingBar.displayName = 'BrandingBar';

const BrandingBarTitle = styled.div`
	margin-left: .5rem;
`;
BrandingBarTitle.displayName = 'BrandingBarTitle';

const BrandingBarPoweredBy = styled.div`
	font-size: 12px;
	margin-right: .2rem;
`;
BrandingBarPoweredBy.displayName = 'BrandingBarPoweredBy';

//https://www.predix-ui.com/#/elements/px-branding-bar
export default ({ 
	title = 'Application Name', 
	powered = 'Powered by React', 
	hideLogo,
	hidePowered,
	children
 }) => (
	<BrandingBar>
		<Flex middle>
			<Flex middle>
				{!hideLogo && <Logo/>}
			</Flex>
			<Flex middle>
				<BrandingBarTitle>{title}</BrandingBarTitle>
			</Flex>
			{children && <div>{children}</div>}
		</Flex>
		<Flex middle>
			{!hidePowered && <BrandingBarPoweredBy>{powered}</BrandingBarPoweredBy>}
			{!hideLogo && <PredixLogo size={10}/>}
		</Flex>
	</BrandingBar>
);
