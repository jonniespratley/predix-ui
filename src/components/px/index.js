import React from 'react';
import { injectGlobal } from 'styled-components';

import AppHeader from './AppHeader';
import AppNav from './AppNav';
import AppNavItem from './AppNav/px-app-nav-item';
import AppNavSubGroup from './AppNav/px-app-nav-sub-group';
import Accordion from './Accordion';
import AlertMessage from './AlertMessage';
import AlertLabel from './AlertLabel';
import ActionSheet from './ActionSheet';
import BrandingBar from './BrandingBar';
import Breadcrumbs from './Breadcrumbs';
import Button from './Button';
import Card from './Card';
import Chip from './Chip';
import Drawer from './Drawer';
import DataTable from './DataTable';
import Dropdown from './Dropdown';
import DrawerLayout from './Layout/px-drawer-layout';
import Grid from './Grid';
import Input from './Input';
import IconSet from './IconSet';
import Icon from './IconSet/px-icon';
import KeyValuePair from './KeyValuePair';
import Layout from './Layout';
import Modal from './Modal';
import NavDrawer from './Drawer/px-nav-drawer';
import Navbar from './Navbar';
import Overlay from './Overlay';
import Popover from './Popover';
import PredixSvgLogo from './BrandingBar/px-predix-svg-logo';
import ProgressBar from './ProgressBar';
import Spinner from './Spinner';
import TableView from './TableView';
import TableRow from './TableView/TableRow';
import Tabs from './Tabs';
import Tab from './Tabs/Tab';
import TreeNode from './Tree/px-tree-node';
import Tree from './Tree';
import Tile from './Tile';
import ViewHeader from './ViewHeader';


//import Partials from './px-partials';
import ExampleComponent from './px-example-component';

// TODO: DataViz
import Gauge from './Gauge';

//import Theme from './Theme';

const LayoutItem = ({style, children}) => {
  return (<div style={style} className='layout__item'>{children}</div>);
};
/**
 * @access public
 * @example
 * const {AppNav} = px;
 *
 */
const px = {
  //Theme,
  	Input,
	Gauge,
	ExampleComponent,
	AppNav,
	AppNavItem,
  	AppNavSubGroup,
	AppHeader,
	Accordion,
	AlertLabel,
	AlertMessage,
	ActionSheet,
	Button,
	BrandingBar,
	Breadcrumbs,
	Card,
	Chip,
	DataTable,
	Dropdown,
	Drawer,
	NavDrawer,
	Grid,
  	Icon,
  	IconSet,
	KeyValuePair,
	Spinner,
	Modal,
	Navbar,
	Overlay,
	DrawerLayout,
	Layout,
	LayoutItem,
	PredixSvgLogo,
	ProgressBar,
	Popover,
	TableView,
	TableRow,
	Tabs,
	Tab,
	Tile,
	Tree,
  	TreeNode,
	ViewHeader
};

injectGlobal`
	@font-face { font-family: "GE Inspira Sans"; font-weight: normal; font-style: normal; src: url("//dzlpbrbc7yvq0.cloudfront.net/predixdev/fonts/2.0.0/GEInspiraSans.eot"); src: url("//dzlpbrbc7yvq0.cloudfront.net/predixdev/fonts/2.0.0/GEInspiraSans.eot?#iefix") format("embedded-opentype"), url("//dzlpbrbc7yvq0.cloudfront.net/predixdev/fonts/2.0.0/GEInspiraSans.woff") format("woff"), url("//dzlpbrbc7yvq0.cloudfront.net/predixdev/fonts/2.0.0/GEInspiraSans.ttf") format("truetype"), url("//dzlpbrbc7yvq0.cloudfront.net/predixdev/fonts/2.0.0/GEInspiraSans.svg#GE Inspira Sans") format("svg"); }
	@font-face { font-family: "GE Inspira Sans"; font-weight: normal; font-style: italic; src: url("//dzlpbrbc7yvq0.cloudfront.net/predixdev/fonts/2.0.0/GEInspiraSans-Italic.eot"); src: url("//dzlpbrbc7yvq0.cloudfront.net/predixdev/fonts/2.0.0/GEInspiraSans-Italic.eot?#iefix") format("embedded-opentype"), url("//dzlpbrbc7yvq0.cloudfront.net/predixdev/fonts/2.0.0/GEInspiraSans-Italic.woff") format("woff"), url("//dzlpbrbc7yvq0.cloudfront.net/predixdev/fonts/2.0.0/GEInspiraSans-Italic.ttf") format("truetype"), url("//dzlpbrbc7yvq0.cloudfront.net/predixdev/fonts/2.0.0/GEInspiraSans-Italic.svg#GE Inspira Sans") format("svg"); }
	@font-face { font-family: "GE Inspira Sans"; font-weight: bold; font-style: normal; src: url("//dzlpbrbc7yvq0.cloudfront.net/predixdev/fonts/2.0.0/GEInspiraSans-Bold.eot"); src: url("//dzlpbrbc7yvq0.cloudfront.net/predixdev/fonts/2.0.0/GEInspiraSans-Bold.eot?#iefix") format("embedded-opentype"), url("//dzlpbrbc7yvq0.cloudfront.net/predixdev/fonts/2.0.0/GEInspiraSans-Bold.woff") format("woff"), url("//dzlpbrbc7yvq0.cloudfront.net/predixdev/fonts/2.0.0/GEInspiraSans-Bold.ttf") format("truetype"), url("//dzlpbrbc7yvq0.cloudfront.net/predixdev/fonts/2.0.0/GEInspiraSans-Bold.svg#GE Inspira Sans") format("svg"); }
	@font-face { font-family: "GE Inspira Sans"; font-weight: bold; font-style: italic; src: url("//dzlpbrbc7yvq0.cloudfront.net/predixdev/fonts/2.0.0/GEInspiraSans-BoldItalic.eot"); src: url("//dzlpbrbc7yvq0.cloudfront.net/predixdev/fonts/2.0.0/GEInspiraSans-BoldItalic.eot?#iefix") format("embedded-opentype"), url("//dzlpbrbc7yvq0.cloudfront.net/predixdev/fonts/2.0.0/GEInspiraSans-BoldItalic.woff") format("woff"), url("//dzlpbrbc7yvq0.cloudfront.net/predixdev/fonts/2.0.0/GEInspiraSans-BoldItalic.ttf") format("truetype"), url("//dzlpbrbc7yvq0.cloudfront.net/predixdev/fonts/2.0.0/GEInspiraSans-BoldItalic.svg#GE Inspira Sans") format("svg"); }
	
	html { 
		font-family: "GE Inspira Sans", sans-serif; 
		font-size: 15px; 
		color: var( --px-base-text-color, black);
	}
`;


module.exports = px;
