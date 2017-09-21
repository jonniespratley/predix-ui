
import React from 'react';

import styles from './sass/index.scss';
import Partials from './px-partials';


import ActionSheet from './px-action-sheet';
import Button from './px-button';
import BrandingBar from './px-branding-bar';
import Card from './px-card';
import Spinner from './px-spinner';
import ViewHeader from './px-view-header';

import Drawer from './px-drawer';
import Modal from './px-modal';
import Navbar from './px-navbar';


import TableView from './px-table-view';
import TableRow from './px-table-view/px-table-row';

const Icon = ({icon}) => (
	<i className={`fa fa-${icon}`}></i>
);

const Box = ({ title, children}) => (
	<div className='box u-mb-'>
		<h3>{title}</h3>
		<div className=''>{children}</div>
	</div>
);


//https://www.predix-ui.com/#/elements/px-key-value-pair
const KeyValuePair = ({label = 'Name', value = '12345'}) => (
	<div className='PxKeyValuePair u-mh- flex__item flex flex--col'>
		<div className="label">{label}</div>
		<div className="value">{value}</div>
	</div>
);



//https://www.predix-ui.com/#/elements/px-app-header
const AppHeader = ({ title = 'PxAppHeader', children }) => (
	<header className='PxAppHeader flex flex-spaced'>
		<h1>{title}</h1>
		{children}
	</header>
);

//import Card from './px/card.js';
//import demo from './demo.js';

// this should be the entry point to your library
module.exports = {
  demo: require('./demo').default,
  px: {
    ActionSheet,
    Button,
    Card,
		Drawer,
    BrandingBar,
    AppHeader,
    KeyValuePair,
    Box,
    ViewHeader,
    Spinner,
    Modal,
    Navbar,
    TableView,
    TableRow
  }
};
