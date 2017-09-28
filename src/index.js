import React from 'react';


import Partials from './px-partials';

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

const Icon = ({icon}) => (
	<i className={`fa fa-${icon}`}></i>
);

const Box = ({ title, children}) => (
	<div className='box u-mb-'>
		<h3>{title}</h3>
		<div className=''>{children}</div>
	</div>
);


//https://www.predix-ui.com/#/elements/px-app-header
const AppHeader = ({ title = 'PxAppHeader', children }) => (
	<header className='PxAppHeader flex flex-spaced'>
		<h1>{title}</h1>
		{children}
	</header>
);


const LayoutItem = ({style, children}) => {
  return (<div style={style} className='layout__item'>{children}</div>);
};


import ProgressBar from './px-progress-bar';
import Popover from './px-popover';

import Tree from './px-tree';
import Overlay from './px-overlay';
import DataTable from './px-datatable';
import Breadcrumbs from './px-breadcrumbs';
import Dropdown from './px-dropdown';


import Iron from './iron-components';

module.exports = {
	Iron,
  px: {
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
    ViewHeader
  }
};
