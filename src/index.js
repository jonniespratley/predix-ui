
import React from 'react';

import styles from './sass/index.scss';
import Partials from './px-partials';


import Button from './px-button';
import BrandingBar from './px-branding-bar';
import Card from './px-card';
import Spinner from './px-spinner';
import ViewHeader from './px-view-header';

import Modal from './px-modal';
import Navbar from './px-navbar';



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
    Button,
    Card,
    BrandingBar,
    AppHeader,
    KeyValuePair,
    Box,
    ViewHeader,
    Spinner,
    Modal,
    Navbar
  }
};
