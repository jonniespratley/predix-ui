/**
 * Global Styles
 * 
 * Sizing Defaults
 * Utility Methods, 
 * Etc.
 */
import {
  injectGlobal
} from 'styled-components';

injectGlobal `
	@font-face { font-family: "GE Inspira Sans"; font-weight: normal; font-style: normal; src: url("//dzlpbrbc7yvq0.cloudfront.net/predixdev/fonts/2.0.0/GEInspiraSans.eot"); src: url("//dzlpbrbc7yvq0.cloudfront.net/predixdev/fonts/2.0.0/GEInspiraSans.eot?#iefix") format("embedded-opentype"), url("//dzlpbrbc7yvq0.cloudfront.net/predixdev/fonts/2.0.0/GEInspiraSans.woff") format("woff"), url("//dzlpbrbc7yvq0.cloudfront.net/predixdev/fonts/2.0.0/GEInspiraSans.ttf") format("truetype"), url("//dzlpbrbc7yvq0.cloudfront.net/predixdev/fonts/2.0.0/GEInspiraSans.svg#GE Inspira Sans") format("svg"); }
	@font-face { font-family: "GE Inspira Sans"; font-weight: normal; font-style: italic; src: url("//dzlpbrbc7yvq0.cloudfront.net/predixdev/fonts/2.0.0/GEInspiraSans-Italic.eot"); src: url("//dzlpbrbc7yvq0.cloudfront.net/predixdev/fonts/2.0.0/GEInspiraSans-Italic.eot?#iefix") format("embedded-opentype"), url("//dzlpbrbc7yvq0.cloudfront.net/predixdev/fonts/2.0.0/GEInspiraSans-Italic.woff") format("woff"), url("//dzlpbrbc7yvq0.cloudfront.net/predixdev/fonts/2.0.0/GEInspiraSans-Italic.ttf") format("truetype"), url("//dzlpbrbc7yvq0.cloudfront.net/predixdev/fonts/2.0.0/GEInspiraSans-Italic.svg#GE Inspira Sans") format("svg"); }
	@font-face { font-family: "GE Inspira Sans"; font-weight: bold; font-style: normal; src: url("//dzlpbrbc7yvq0.cloudfront.net/predixdev/fonts/2.0.0/GEInspiraSans-Bold.eot"); src: url("//dzlpbrbc7yvq0.cloudfront.net/predixdev/fonts/2.0.0/GEInspiraSans-Bold.eot?#iefix") format("embedded-opentype"), url("//dzlpbrbc7yvq0.cloudfront.net/predixdev/fonts/2.0.0/GEInspiraSans-Bold.woff") format("woff"), url("//dzlpbrbc7yvq0.cloudfront.net/predixdev/fonts/2.0.0/GEInspiraSans-Bold.ttf") format("truetype"), url("//dzlpbrbc7yvq0.cloudfront.net/predixdev/fonts/2.0.0/GEInspiraSans-Bold.svg#GE Inspira Sans") format("svg"); }
	@font-face { font-family: "GE Inspira Sans"; font-weight: bold; font-style: italic; src: url("//dzlpbrbc7yvq0.cloudfront.net/predixdev/fonts/2.0.0/GEInspiraSans-BoldItalic.eot"); src: url("//dzlpbrbc7yvq0.cloudfront.net/predixdev/fonts/2.0.0/GEInspiraSans-BoldItalic.eot?#iefix") format("embedded-opentype"), url("//dzlpbrbc7yvq0.cloudfront.net/predixdev/fonts/2.0.0/GEInspiraSans-BoldItalic.woff") format("woff"), url("//dzlpbrbc7yvq0.cloudfront.net/predixdev/fonts/2.0.0/GEInspiraSans-BoldItalic.ttf") format("truetype"), url("//dzlpbrbc7yvq0.cloudfront.net/predixdev/fonts/2.0.0/GEInspiraSans-BoldItalic.svg#GE Inspira Sans") format("svg"); }
	
	html { 
		font-family: "GE Inspira Sans", sans-serif; 
		font-size: 15px; 
		color: var( --px-base-text-color, black);
	}
	.invisible { visibility: hidden !important; }
 	.truncate { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
	.alpha { 
		font-size: 5rem; 
		line-height: 1.06667; 
		font-weight: normal; 
	}
 	.beta { 
		 font-size: 4rem; 
		 line-height: 1; 
		 font-weight: normal; }
	 .gamma { 
		 font-size: 3rem; 
		line-height: 1.33333; font-weight: normal; }
 	.delta { 
		 font-size: 2rem; line-height: 1.33333; font-weight: normal; }
 	.epsilon { 
		 font-size: 1.33333rem; line-height: 1; font-weight: normal; }
 	.zeta { 
		 font-size: 0.8rem; 
		 line-height: 1.66667; font-weight: normal; }

`;
