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


import styles from './sass/index.scss';

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




module.exports = {
  styles,
  px: {
    Accordion,
		AlertLabel,
		AlertMessage,
    ActionSheet,
    Button,
    Card,
		Drawer,
		NavDrawer,
    BrandingBar,
    AppHeader,
    KeyValuePair,
    Box,
    ViewHeader,
    Spinner,
    Modal,
    Navbar,
    TableView,
    TableRow,
    Tabs,
    Tab,
    DrawerLayout,
    Layout,
		PredixSvgLogo
  }
};
