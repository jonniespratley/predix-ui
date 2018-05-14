import { injectGlobal } from 'styled-components';

injectGlobal`
@font-face { font-display: auto; font-family: "GE Inspira Sans"; font-weight: normal; font-style: normal; src: url("//dzlpbrbc7yvq0.cloudfront.net/predixdev/fonts/2.0.0/GEInspiraSans.eot"); src: url("//dzlpbrbc7yvq0.cloudfront.net/predixdev/fonts/2.0.0/GEInspiraSans.eot?#iefix") format("embedded-opentype"), url("//dzlpbrbc7yvq0.cloudfront.net/predixdev/fonts/2.0.0/GEInspiraSans.woff") format("woff"), url("//dzlpbrbc7yvq0.cloudfront.net/predixdev/fonts/2.0.0/GEInspiraSans.ttf") format("truetype"), url("//dzlpbrbc7yvq0.cloudfront.net/predixdev/fonts/2.0.0/GEInspiraSans.svg#GE Inspira Sans") format("svg"); }
@font-face { font-display: auto; font-family: "GE Inspira Sans"; font-weight: normal; font-style: italic; src: url("//dzlpbrbc7yvq0.cloudfront.net/predixdev/fonts/2.0.0/GEInspiraSans-Italic.eot"); src: url("//dzlpbrbc7yvq0.cloudfront.net/predixdev/fonts/2.0.0/GEInspiraSans-Italic.eot?#iefix") format("embedded-opentype"), url("//dzlpbrbc7yvq0.cloudfront.net/predixdev/fonts/2.0.0/GEInspiraSans-Italic.woff") format("woff"), url("//dzlpbrbc7yvq0.cloudfront.net/predixdev/fonts/2.0.0/GEInspiraSans-Italic.ttf") format("truetype"), url("//dzlpbrbc7yvq0.cloudfront.net/predixdev/fonts/2.0.0/GEInspiraSans-Italic.svg#GE Inspira Sans") format("svg"); }
@font-face { font-display: auto; font-family: "GE Inspira Sans"; font-weight: bold; font-style: normal; src: url("//dzlpbrbc7yvq0.cloudfront.net/predixdev/fonts/2.0.0/GEInspiraSans-Bold.eot"); src: url("//dzlpbrbc7yvq0.cloudfront.net/predixdev/fonts/2.0.0/GEInspiraSans-Bold.eot?#iefix") format("embedded-opentype"), url("//dzlpbrbc7yvq0.cloudfront.net/predixdev/fonts/2.0.0/GEInspiraSans-Bold.woff") format("woff"), url("//dzlpbrbc7yvq0.cloudfront.net/predixdev/fonts/2.0.0/GEInspiraSans-Bold.ttf") format("truetype"), url("//dzlpbrbc7yvq0.cloudfront.net/predixdev/fonts/2.0.0/GEInspiraSans-Bold.svg#GE Inspira Sans") format("svg"); }
@font-face { font-display: auto; font-family: "GE Inspira Sans"; font-weight: bold; font-style: italic; src: url("//dzlpbrbc7yvq0.cloudfront.net/predixdev/fonts/2.0.0/GEInspiraSans-BoldItalic.eot"); src: url("//dzlpbrbc7yvq0.cloudfront.net/predixdev/fonts/2.0.0/GEInspiraSans-BoldItalic.eot?#iefix") format("embedded-opentype"), url("//dzlpbrbc7yvq0.cloudfront.net/predixdev/fonts/2.0.0/GEInspiraSans-BoldItalic.woff") format("woff"), url("//dzlpbrbc7yvq0.cloudfront.net/predixdev/fonts/2.0.0/GEInspiraSans-BoldItalic.ttf") format("truetype"), url("//dzlpbrbc7yvq0.cloudfront.net/predixdev/fonts/2.0.0/GEInspiraSans-BoldItalic.svg#GE Inspira Sans") format("svg"); }
html { font-family: "GE Inspira Sans", sans-serif; font-size: 16px; color: var(--px-base-text-color, black); }
* { box-sizing: border-box;}
.invisible { visibility:hidden!important; }
.truncate { overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.alpha { font-size:5rem;line-height:1.06667;font-weight:400;}
.beta { font-size: 4rem; line-height: 1; font-weight: 400; }
.delta, .gamma { line-height: 1.33333; font-weight: 400; }
.gamma { font-size: 3rem; }
.delta { font-size: 2rem; }
.epsilon { font-size: 1.33333rem; line-height: 1; font-weight: 400; }
.zeta { font-size: .8rem; line-height: 1.66667; font-weight: 400; }
.shadow-component { box-shadow: 0 1px 1px var(--px-shadow-component, rgba(0, 0, 0, 0.2)); }
.shadow-temporary { box-shadow: 0 1px 3px var(--px-shadow-temporary, rgba(0, 0, 0, 0.2)); }
.shadow-navigation { box-shadow: 0 2px 4px var(--px-shadow-navigation, rgba(0, 0, 0, 0.2)); }
.shadow-notification { box-shadow: 0 4px 8px var(--px-shadow-notification, rgba(0, 0, 0, 0.2)); }
.shadow-modal { box-shadow: 0 6px 12px var(--px-shadow-modal, rgba(0, 0, 0, 0.2)); }
`;
