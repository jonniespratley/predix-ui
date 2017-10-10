import React from 'react';

import AppHeader from './AppHeader';
import AppNav from './AppNav';
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
import IconSet from './px-icon-set';
import Icon from './px-icon-set/px-icon';
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


import Partials from './px-partials';
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
