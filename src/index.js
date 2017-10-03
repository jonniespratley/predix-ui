import React from 'react';


import Partials from './px-partials';


import AppHeader from './px-app-header';
import AppNav from './px-app-nav';
import ExampleComponent from './px-example-component';
import Accordion from './px-accordion';
import AlertMessage from './px-alert-message';
import AlertLabel from './px-alert-label';
import ActionSheet from './px-action-sheet';
import Button from './px-button';
import BrandingBar from './px-branding-bar';
import PredixSvgLogo from './px-branding-bar/px-predix-svg-logo';
import Card from './px-card';
import Chip from './px-chip';
import Drawer from './px-drawer';
import NavDrawer from './px-drawer/px-nav-drawer';
import Modal from './px-modal';
import Navbar from './px-navbar';
import Spinner from './px-spinner';
import TableView from './px-table-view';
import TableRow from './px-table-view/px-table-row';
import Tabs from './px-tabs';
import Tab from './px-tabs/px-tab';
import ViewHeader from './px-view-header';
import KeyValuePair from './px-key-value-pair';
import Layout from './px-layout';
import DrawerLayout from './px-layout/px-drawer-layout';
import Tile from './px-tile';
import Grid from './px-grid';

import IconSet from './px-icon-set';
import Icon from './px-icon-set/px-icon';

const LayoutItem = ({style, children}) => {
  return (<div style={style} className='layout__item'>{children}</div>);
};


import ProgressBar from './px-progress-bar';
import Popover from './px-popover';
import TreeNode from './px-tree/px-tree-node';
import Tree from './px-tree';
import Overlay from './px-overlay';
import DataTable from './px-datatable';
import Breadcrumbs from './px-breadcrumbs';
import Dropdown from './px-dropdown';
//import Iron from './iron-components';

/**
 * @access public
 * @example
 * const {AppNav} = px;
 *
 */
const px = {

	ExampleComponent,
	AppNav,
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
module.exports = px;
