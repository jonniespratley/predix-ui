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

.flex { display: -webkit-box; display: -ms-flexbox; display: flex; }
.inline--flex { display: -webkit-inline-box; display: -ms-inline-flexbox; display: inline-flex; }
.flex--row { -webkit-box-orient: horizontal; -webkit-box-direction: normal; -ms-flex-direction: row; flex-direction: row; }
.flex--row--rev { -webkit-box-orient: horizontal; -webkit-box-direction: reverse; -ms-flex-direction: row-reverse; flex-direction: row-reverse; }
.flex--col { -webkit-box-orient: vertical; -webkit-box-direction: normal; -ms-flex-direction: column; flex-direction: column; }
.flex--col--rev { -webkit-box-orient: vertical; -webkit-box-direction: reverse; -ms-flex-direction: column-reverse; flex-direction: column-reverse; }
.flex--nowrap { -ms-flex-wrap: nowrap; flex-wrap: nowrap; }
.flex--wrap { -ms-flex-wrap: wrap; flex-wrap: wrap; }
.flex--wrap--rev { -ms-flex-wrap: wrap-reverse; flex-wrap: wrap-reverse; }
.flex--left { -webkit-box-pack: start; -ms-flex-pack: start; justify-content: flex-start; }
.flex--center { -webkit-box-pack: center; -ms-flex-pack: center; justify-content: center; }
.flex--right { -webkit-box-pack: end; -ms-flex-pack: end; justify-content: flex-end; }
.flex--justify { -webkit-box-pack: justify; -ms-flex-pack: justify; justify-content: space-between; }
.flex--spaced { -ms-flex-pack: distribute; justify-content: space-around; }
.flex--top { -webkit-box-align: start; -ms-flex-align: start; align-items: flex-start; }
.flex--middle { -webkit-box-align: center; -ms-flex-align: center; align-items: center; }
.flex--bottom { -webkit-box-align: end; -ms-flex-align: end; align-items: flex-end; }
.flex--stretch { -webkit-box-align: stretch; -ms-flex-align: stretch; align-items: stretch; }
.flex--baseline { -webkit-box-align: baseline; -ms-flex-align: baseline; align-items: baseline; }
.flex--top--multi { -ms-flex-line-pack: start; align-content: flex-start; }
.flex--middle--multi { -ms-flex-line-pack: center; align-content: center; }
.flex--bottom--multi { -ms-flex-line-pack: end; align-content: flex-end; }
.flex--stretch--multi { -ms-flex-line-pack: stretch; align-content: stretch; }
.flex--justify--multi { -ms-flex-line-pack: justify; align-content: space-between; }
.flex--spaced--multi { -ms-flex-line-pack: distribute; align-content: space-around; }
.flex__item { -webkit-box-flex: 1; -ms-flex: 1; flex: 1; }
.flex__item--msfix { -webkit-box-flex: 1; -ms-flex: 1 1 auto; flex: 1 1 auto; }
.flex__item--top { -ms-flex-item-align: start; align-self: flex-start; }
.flex__item--middle { -ms-flex-item-align: center; align-self: center; }
.flex__item--bottom { -ms-flex-item-align: end; align-self: flex-end; }
.flex__item--baseline { -ms-flex-item-align: baseline; align-self: baseline; }
a { background-color: transparent;}
a:link,  a:visited { color: #007acc; }
a:hover { color: #005c99; }
a:active { color: #003d66; }
a:active,  a:hover { outline: 0; }
.float--right { float: right !important; }
.float--left { float: left !important; }
.float--none { float: none !important; }
.text--left { text-align: left !important; }
.text--center { text-align: center !important; }
.text--right { text-align: right !important; }
.full-height { height: 100% !important; }
.informative { cursor: help !important; }
.pointer { cursor: pointer !important; }
.muted { opacity: 0.5 !important; }
.proceed { text-align: right !important; }
.caps { text-transform: uppercase !important; }
.hidden { display: none !important; visibility: hidden; }
.a11y,  .visuallyhidden { position: absolute !important; overflow: hidden !important; width: 1px !important; height: 1px !important; margin: -1px !important; border: 0 !important; padding: 0 !important; clip: rect(0 0 0 0) !important; }
.a11y.focusable:active,  .a11y.focusable:focus,  .visuallyhidden.focusable:active,  .visuallyhidden.focusable:focus { position: static; overflow: visible; width: auto; height: auto; margin: 0; clip: auto; }

@media screen and (max-width: 44.9375em) {  .a11y-palm,  .visuallyhidden-palm { position: absolute !important; overflow: hidden !important; width: 1px !important; height: 1px !important; margin: -1px !important; border: 0 !important; padding: 0 !important; clip: rect(0 0 0 0) !important; } }
@media screen and (min-width: 45em) and (max-width: 63.9375em) {  .a11y-lap,  .visuallyhidden-lap { position: absolute !important; overflow: hidden !important; width: 1px !important; height: 1px !important; margin: -1px !important; border: 0 !important; padding: 0 !important; clip: rect(0 0 0 0) !important; } }
@media screen and (min-width: 45em) {  .a11y-lap-and-up,  .visuallyhidden-lap-and-up { position: absolute !important; overflow: hidden !important; width: 1px !important; height: 1px !important; margin: -1px !important; border: 0 !important; padding: 0 !important; clip: rect(0 0 0 0) !important; } }
@media screen and (max-width: 63.9375em) {  .a11y-portable,  .visuallyhidden-portable { position: absolute !important; overflow: hidden !important; width: 1px !important; height: 1px !important; margin: -1px !important; border: 0 !important; padding: 0 !important; clip: rect(0 0 0 0) !important; } }
@media screen and (min-width: 64em) {  .a11y-desk,  .visuallyhidden-desk { position: absolute !important; overflow: hidden !important; width: 1px !important; height: 1px !important; margin: -1px !important; border: 0 !important; padding: 0 !important; clip: rect(0 0 0 0) !important; } }
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx) {  .a11y-retina,  .visuallyhidden-retina { position: absolute !important; overflow: hidden !important; width: 1px !important; height: 1px !important; margin: -1px !important; border: 0 !important; padding: 0 !important; clip: rect(0 0 0 0) !important; } }

.invisible { visibility: hidden !important; }
.truncate { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }

.u-1\/1 { width: 100% !important; }
.u-1\/2 { width: 50% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
.u-1\/3 { width: 33.33333% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
.u-2\/3 { width: 66.66667% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
.u-1\/4 { width: 25% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
.u-2\/4 { width: 50% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
.u-3\/4 { width: 75% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
.u-1\/6 { width: 16.66667% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
.u-2\/6 { width: 33.33333% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
.u-3\/6 { width: 50% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
.u-4\/6 { width: 66.66667% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
.u-5\/6 { width: 83.33333% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }

@media screen and (max-width: 44.9375em) {  .u-1\/1-palm { width: 100% !important; }
  .u-1\/2-palm { width: 50% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-1\/3-palm { width: 33.33333% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-2\/3-palm { width: 66.66667% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-1\/4-palm { width: 25% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-2\/4-palm { width: 50% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-3\/4-palm { width: 75% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-1\/6-palm { width: 16.66667% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-2\/6-palm { width: 33.33333% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-3\/6-palm { width: 50% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-4\/6-palm { width: 66.66667% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-5\/6-palm { width: 83.33333% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; } }

@media screen and (min-width: 45em) and (max-width: 63.9375em) {  .u-1\/1-lap { width: 100% !important; }
  .u-1\/2-lap { width: 50% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-1\/3-lap { width: 33.33333% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-2\/3-lap { width: 66.66667% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-1\/4-lap { width: 25% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-2\/4-lap { width: 50% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-3\/4-lap { width: 75% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-1\/6-lap { width: 16.66667% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-2\/6-lap { width: 33.33333% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-3\/6-lap { width: 50% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-4\/6-lap { width: 66.66667% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-5\/6-lap { width: 83.33333% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; } }

@media screen and (min-width: 45em) {  .u-1\/1-lap-and-up { width: 100% !important; }
  .u-1\/2-lap-and-up { width: 50% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-1\/3-lap-and-up { width: 33.33333% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-2\/3-lap-and-up { width: 66.66667% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-1\/4-lap-and-up { width: 25% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-2\/4-lap-and-up { width: 50% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-3\/4-lap-and-up { width: 75% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-1\/6-lap-and-up { width: 16.66667% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-2\/6-lap-and-up { width: 33.33333% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-3\/6-lap-and-up { width: 50% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-4\/6-lap-and-up { width: 66.66667% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-5\/6-lap-and-up { width: 83.33333% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; } }

@media screen and (max-width: 63.9375em) {  .u-1\/1-portable { width: 100% !important; }
  .u-1\/2-portable { width: 50% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-1\/3-portable { width: 33.33333% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-2\/3-portable { width: 66.66667% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-1\/4-portable { width: 25% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-2\/4-portable { width: 50% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-3\/4-portable { width: 75% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-1\/6-portable { width: 16.66667% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-2\/6-portable { width: 33.33333% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-3\/6-portable { width: 50% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-4\/6-portable { width: 66.66667% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-5\/6-portable { width: 83.33333% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; } }

@media screen and (min-width: 64em) {  .u-1\/1-desk { width: 100% !important; }
  .u-1\/2-desk { width: 50% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-1\/3-desk { width: 33.33333% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-2\/3-desk { width: 66.66667% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-1\/4-desk { width: 25% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-2\/4-desk { width: 50% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-3\/4-desk { width: 75% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-1\/6-desk { width: 16.66667% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-2\/6-desk { width: 33.33333% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-3\/6-desk { width: 50% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-4\/6-desk { width: 66.66667% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-5\/6-desk { width: 83.33333% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; } }

@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx) {  .u-1\/1-retina { width: 100% !important; }
  .u-1\/2-retina { width: 50% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-1\/3-retina { width: 33.33333% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-2\/3-retina { width: 66.66667% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-1\/4-retina { width: 25% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-2\/4-retina { width: 50% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-3\/4-retina { width: 75% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-1\/6-retina { width: 16.66667% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-2\/6-retina { width: 33.33333% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-3\/6-retina { width: 50% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-4\/6-retina { width: 66.66667% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-5\/6-retina { width: 83.33333% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; } }


/** Margin helper classes. Add margins. */
.u-m { margin: 1rem !important; }
.u-mt { margin-top: 1rem !important; }
.u-mr { margin-right: 1rem !important; }
.u-mb { margin-bottom: 1rem !important; }
.u-ml { margin-left: 1rem !important; }
.u-mh { margin-right: 1rem !important; margin-left: 1rem !important; }
.u-mv { margin-top: 1rem !important; margin-bottom: 1rem !important; }

/** Add tiny margins. */
.u-m-- { margin: 0.33333rem !important; }
.u-mt-- { margin-top: 0.33333rem !important; }
.u-mr-- { margin-right: 0.33333rem !important; }
.u-mb-- { margin-bottom: 0.33333rem !important; }
.u-ml-- { margin-left: 0.33333rem !important; }
.u-mh-- { margin-right: 0.33333rem !important; margin-left: 0.33333rem !important; }
.u-mv-- { margin-top: 0.33333rem !important; margin-bottom: 0.33333rem !important; }

/** Add small margins. */
.u-m- { margin: 0.66667rem !important; }
.u-mt- { margin-top: 0.66667rem !important; }
.u-mr- { margin-right: 0.66667rem !important; }
.u-mb- { margin-bottom: 0.66667rem !important; }
.u-ml- { margin-left: 0.66667rem !important; }
.u-mh- { margin-right: 0.66667rem !important; margin-left: 0.66667rem !important; }
.u-mv- { margin-top: 0.66667rem !important; margin-bottom: 0.66667rem !important; }

/** Add large margins. */
.u-m\00002b { margin: 1.33333rem !important; }
.u-mt\00002b { margin-top: 1.33333rem !important; }
.u-mr\00002b { margin-right: 1.33333rem !important; }
.u-mb\00002b { margin-bottom: 1.33333rem !important; }
.u-ml\00002b { margin-left: 1.33333rem !important; }
.u-mh\00002b { margin-right: 1.33333rem !important; margin-left: 1.33333rem !important; }
.u-mv\00002b { margin-top: 1.33333rem !important; margin-bottom: 1.33333rem !important; }

/** Add huge margins. */
.u-m\00002b\00002b { margin: 2rem !important; }
.u-mt\00002b\00002b { margin-top: 2rem !important; }
.u-mr\00002b\00002b { margin-right: 2rem !important; }
.u-mb\00002b\00002b { margin-bottom: 2rem !important; }
.u-ml\00002b\00002b { margin-left: 2rem !important; }
.u-mh\00002b\00002b { margin-right: 2rem !important; margin-left: 2rem !important; }
.u-mv\00002b\00002b { margin-top: 2rem !important; margin-bottom: 2rem !important; }

/** Remove margins. */
.u-m0 { margin: 0 !important; }
.u-mt0 { margin-top: 0 !important; }
.u-mr0 { margin-right: 0 !important; }
.u-mb0 { margin-bottom: 0 !important; }
.u-ml0 { margin-left: 0 !important; }
.u-mh0 { margin-right: 0 !important; margin-left: 0 !important; }
.u-mv0 { margin-top: 0 !important; margin-bottom: 0 !important; }

/** Negative margins. */
.u--m { margin: -1rem !important; }
.u--mt { margin-top: -1rem !important; }
.u--mr { margin-right: -1rem !important; }
.u--mb { margin-bottom: -1rem !important; }
.u--ml { margin-left: -1rem !important; }
.u--mh { margin-right: -1rem !important; margin-left: -1rem !important; }
.u--mv { margin-top: -1rem !important; margin-bottom: -1rem !important; }

/** Tiny negative margins. */
.u--m-- { margin: -0.33333rem !important; }
.u--mt-- { margin-top: -0.33333rem !important; }
.u--mr-- { margin-right: -0.33333rem !important; }
.u--mb-- { margin-bottom: -0.33333rem !important; }
.u--ml-- { margin-left: -0.33333rem !important; }
.u--mh-- { margin-right: -0.33333rem !important; margin-left: -0.33333rem !important; }
.u--mv-- { margin-top: -0.33333rem !important; margin-bottom: -0.33333rem !important; }

/** Small negative margins. */
.u--m- { margin: -0.66667rem !important; }
.u--mt- { margin-top: -0.66667rem !important; }
.u--mr- { margin-right: -0.66667rem !important; }
.u--mb- { margin-bottom: -0.66667rem !important; }
.u--ml- { margin-left: -0.66667rem !important; }
.u--mh- { margin-right: -0.66667rem !important; margin-left: -0.66667rem !important; }
.u--mv- { margin-top: -0.66667rem !important; margin-bottom: -0.66667rem !important; }

/** Large negative margins. */
.u--m\00002b { margin: -1.33333rem !important; }
.u--mt\00002b { margin-top: -1.33333rem !important; }
.u--mr\00002b { margin-right: -1.33333rem !important; }
.u--mb\00002b { margin-bottom: -1.33333rem !important; }
.u--ml\00002b { margin-left: -1.33333rem !important; }
.u--mh\00002b { margin-right: -1.33333rem !important; margin-left: -1.33333rem !important; }
.u--mv\00002b { margin-top: -1.33333rem !important; margin-bottom: -1.33333rem !important; }

/** Huge negative margins. */
.u--m\00002b\00002b { margin: -2rem !important; }
.u--mt\00002b\00002b { margin-top: -2rem !important; }
.u--mr\00002b\00002b { margin-right: -2rem !important; }
.u--mb\00002b\00002b { margin-bottom: -2rem !important; }
.u--ml\00002b\00002b { margin-left: -2rem !important; }
.u--mh\00002b\00002b { margin-right: -2rem !important; margin-left: -2rem !important; }
.u--mv\00002b\00002b { margin-top: -2rem !important; margin-bottom: -2rem !important; }

/** Padding helper classes. Add paddings. */
.u-p { padding: 1rem !important; }
.u-pt { padding-top: 1rem !important; }
.u-pr { padding-right: 1rem !important; }
.u-pb { padding-bottom: 1rem !important; }
.u-pl { padding-left: 1rem !important; }
.u-ph { padding-right: 1rem !important; padding-left: 1rem !important; }
.u-pv { padding-top: 1rem !important; padding-bottom: 1rem !important; }

/** Add tiny paddings. */
.u-p-- { padding: 0.33333rem !important; }
.u-pt-- { padding-top: 0.33333rem !important; }
.u-pr-- { padding-right: 0.33333rem !important; }
.u-pb-- { padding-bottom: 0.33333rem !important; }
.u-pl-- { padding-left: 0.33333rem !important; }
.u-ph-- { padding-right: 0.33333rem !important; padding-left: 0.33333rem !important; }
.u-pv-- { padding-top: 0.33333rem !important; padding-bottom: 0.33333rem !important; }

/** Add small paddings. */
.u-p- { padding: 0.66667rem !important; }
.u-pt- { padding-top: 0.66667rem !important; }
.u-pr- { padding-right: 0.66667rem !important; }
.u-pb- { padding-bottom: 0.66667rem !important; }
.u-pl- { padding-left: 0.66667rem !important; }
.u-ph- { padding-right: 0.66667rem !important; padding-left: 0.66667rem !important; }
.u-pv- { padding-top: 0.66667rem !important; padding-bottom: 0.66667rem !important; }

/** Add large paddings. */
.u-p\00002b { padding: 1.33333rem !important; }
.u-pt\00002b { padding-top: 1.33333rem !important; }
.u-pr\00002b { padding-right: 1.33333rem !important; }
.u-pb\00002b { padding-bottom: 1.33333rem !important; }
.u-pl\00002b { padding-left: 1.33333rem !important; }
.u-ph\00002b { padding-right: 1.33333rem !important; padding-left: 1.33333rem !important; }
.u-pv\00002b { padding-top: 1.33333rem !important; padding-bottom: 1.33333rem !important; }

/** Add huge paddings. */
.u-p\00002b\00002b { padding: 2rem !important; }
.u-pt\00002b\00002b { padding-top: 2rem !important; }
.u-pr\00002b\00002b { padding-right: 2rem !important; }
.u-pb\00002b\00002b { padding-bottom: 2rem !important; }
.u-pl\00002b\00002b { padding-left: 2rem !important; }
.u-ph\00002b\00002b { padding-right: 2rem !important; padding-left: 2rem !important; }
.u-pv\00002b\00002b { padding-top: 2rem !important; padding-bottom: 2rem !important; }

/** Remove paddings. */
.u-p0 { padding: 0 !important; }
.u-pt0 { padding-top: 0 !important; }
.u-pr0 { padding-right: 0 !important; }
.u-pb0 { padding-bottom: 0 !important; }
.u-pl0 { padding-left: 0 !important; }
.u-ph0 { padding-right: 0 !important; padding-left: 0 !important; }
.u-pv0 { padding-top: 0 !important; padding-bottom: 0 !important; }

@media screen and (max-width: 44.9375em) { .u-1\/1-palm { width: 100% !important; }
  .u-1\/2-palm { width: 50% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-1\/3-palm { width: 33.33333% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-2\/3-palm { width: 66.66667% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-1\/4-palm { width: 25% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-2\/4-palm { width: 50% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-3\/4-palm { width: 75% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-1\/6-palm { width: 16.66667% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-2\/6-palm { width: 33.33333% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-3\/6-palm { width: 50% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-4\/6-palm { width: 66.66667% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-5\/6-palm { width: 83.33333% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; } }

@media screen and (min-width: 45em) and (max-width: 63.9375em) { .u-1\/1-lap { width: 100% !important; }
  .u-1\/2-lap { width: 50% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-1\/3-lap { width: 33.33333% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-2\/3-lap { width: 66.66667% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-1\/4-lap { width: 25% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-2\/4-lap { width: 50% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-3\/4-lap { width: 75% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-1\/6-lap { width: 16.66667% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-2\/6-lap { width: 33.33333% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-3\/6-lap { width: 50% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-4\/6-lap { width: 66.66667% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-5\/6-lap { width: 83.33333% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; } }

@media screen and (min-width: 45em) { .u-1\/1-lap-and-up { width: 100% !important; }
  .u-1\/2-lap-and-up { width: 50% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-1\/3-lap-and-up { width: 33.33333% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-2\/3-lap-and-up { width: 66.66667% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-1\/4-lap-and-up { width: 25% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-2\/4-lap-and-up { width: 50% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-3\/4-lap-and-up { width: 75% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-1\/6-lap-and-up { width: 16.66667% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-2\/6-lap-and-up { width: 33.33333% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-3\/6-lap-and-up { width: 50% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-4\/6-lap-and-up { width: 66.66667% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-5\/6-lap-and-up { width: 83.33333% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; } }

@media screen and (max-width: 63.9375em) { .u-1\/1-portable { width: 100% !important; }
  .u-1\/2-portable { width: 50% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-1\/3-portable { width: 33.33333% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-2\/3-portable { width: 66.66667% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-1\/4-portable { width: 25% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-2\/4-portable { width: 50% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-3\/4-portable { width: 75% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-1\/6-portable { width: 16.66667% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-2\/6-portable { width: 33.33333% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-3\/6-portable { width: 50% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-4\/6-portable { width: 66.66667% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-5\/6-portable { width: 83.33333% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; } }

@media screen and (min-width: 64em) { .u-1\/1-desk { width: 100% !important; }
  .u-1\/2-desk { width: 50% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-1\/3-desk { width: 33.33333% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-2\/3-desk { width: 66.66667% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-1\/4-desk { width: 25% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-2\/4-desk { width: 50% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-3\/4-desk { width: 75% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-1\/6-desk { width: 16.66667% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-2\/6-desk { width: 33.33333% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-3\/6-desk { width: 50% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-4\/6-desk { width: 66.66667% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-5\/6-desk { width: 83.33333% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; } }

@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx) { .u-1\/1-retina { width: 100% !important; }
  .u-1\/2-retina { width: 50% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-1\/3-retina { width: 33.33333% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-2\/3-retina { width: 66.66667% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-1\/4-retina { width: 25% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-2\/4-retina { width: 50% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-3\/4-retina { width: 75% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-1\/6-retina { width: 16.66667% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-2\/6-retina { width: 33.33333% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-3\/6-retina { width: 50% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-4\/6-retina { width: 66.66667% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-5\/6-retina { width: 83.33333% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; } }

@media screen and (max-width: 21.33333rem) { .u-1\/1-xs { width: 100% !important; }
  .u-1\/2-xs { width: 50% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-1\/3-xs { width: 33.33333% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-2\/3-xs { width: 66.66667% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-1\/4-xs { width: 25% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-2\/4-xs { width: 50% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-3\/4-xs { width: 75% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-1\/6-xs { width: 16.66667% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-2\/6-xs { width: 33.33333% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-3\/6-xs { width: 50% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-4\/6-xs { width: 66.66667% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-5\/6-xs { width: 83.33333% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; } }

@media screen and (min-width: 22rem) and (max-width: 49.06667rem) { .u-1\/1-sm { width: 100% !important; }
  .u-1\/2-sm { width: 50% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-1\/3-sm { width: 33.33333% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-2\/3-sm { width: 66.66667% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-1\/4-sm { width: 25% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-2\/4-sm { width: 50% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-3\/4-sm { width: 75% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-1\/6-sm { width: 16.66667% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-2\/6-sm { width: 33.33333% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-3\/6-sm { width: 50% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-4\/6-sm { width: 66.66667% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-5\/6-sm { width: 83.33333% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; } }

@media screen and (min-width: 51.2rem) and (max-width: 68.2rem) { .u-1\/1-md { width: 100% !important; }
  .u-1\/2-md { width: 50% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-1\/3-md { width: 33.33333% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-2\/3-md { width: 66.66667% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-1\/4-md { width: 25% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-2\/4-md { width: 50% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-3\/4-md { width: 75% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-1\/6-md { width: 16.66667% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-2\/6-md { width: 33.33333% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-3\/6-md { width: 50% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-4\/6-md { width: 66.66667% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-5\/6-md { width: 83.33333% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; } }

@media screen and (min-width: 68.26667rem) and (max-width: 80rem) { .u-1\/1-lg { width: 100% !important; }
  .u-1\/2-lg { width: 50% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-1\/3-lg { width: 33.33333% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-2\/3-lg { width: 66.66667% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-1\/4-lg { width: 25% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-2\/4-lg { width: 50% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-3\/4-lg { width: 75% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-1\/6-lg { width: 16.66667% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-2\/6-lg { width: 33.33333% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-3\/6-lg { width: 50% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-4\/6-lg { width: 66.66667% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-5\/6-lg { width: 83.33333% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; } }

@media screen and (min-width: 85.33333rem) { .u-1\/1-xl { width: 100% !important; }
  .u-1\/2-xl { width: 50% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-1\/3-xl { width: 33.33333% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-2\/3-xl { width: 66.66667% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-1\/4-xl { width: 25% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-2\/4-xl { width: 50% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-3\/4-xl { width: 75% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-1\/6-xl { width: 16.66667% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-2\/6-xl { width: 33.33333% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-3\/6-xl { width: 50% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-4\/6-xl { width: 66.66667% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; }
  .u-5\/6-xl { width: 83.33333% !important; -webkit-box-flex: 0 !important; -ms-flex: none !important; flex: none !important; } }

`;
