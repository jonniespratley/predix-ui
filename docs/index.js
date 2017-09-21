/* eslint-disable global-require, import/no-unresolved, react/no-multi-comp */
import React from 'react';
import ReactDOM from 'react-dom';
import GithubCorner from 'react-github-corner';
import { Catalog, CodeSpecimen, ReactSpecimen } from 'catalog';

//import 'purecss/build/pure.css';
import './main.css';



import {px} from '../src';
import PxAlertLabel from '../src/px-alert-label';

// TODO: Use this format
import pxActionSheetDocs from './px-action-sheet';
import pxAlertLabelDocs from './px-alert-label';
import pxButtonDocs from './px-button';
import pxBrandingBarDocs from './branding-bar.md';

import pxCardDocs from './cards.md';
import pxNavbarDocs from './px-navbar';
import pxModalDocs from './px-modal';
import pxTableViewDocs from './px-table-view';
import pxDrawerDocs from './px-drawer';


import pxSpinnerDocs from './spinner.md';
import pxViewHeaderDocs from './view-header.md';



const logo = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/49212/predix_ds_logo.webp';
// Add your documentation imports here. These are available to
// React specimen. Do NOT pass React here as Catalog does that.
const documentationImports = {
  px,
  PxAlertLabel
};


const title = `${NAME} v${VERSION}`; // eslint-disable-line no-undef
const project = `${USER}/${NAME}`; // eslint-disable-line no-undef

const pages = [
  {
    path: '/',
    title: 'Introduction',
    component: require('../README.md')
  },
  {
    title: 'Components',
    pages: [
      { path: 'px-alert-label', title: 'Alert Label', component: pxAlertLabelDocs},
      { path: 'px-action-sheet', title: 'Action Sheet', component: pxActionSheetDocs},
      { path: 'px-button', title: 'Button', component: pxButtonDocs},
      { path: 'px-branding-bar', title: 'Branding Bar', component: pxBrandingBarDocs},
      { path: 'px-card', title: 'Card', component: pxCardDocs },
      { path: 'px-drawer', title: 'Drawer', component: pxDrawerDocs },
      { path: 'px-navbar', title: 'Navbar', component: pxNavbarDocs },
      { path: 'px-modal', title: 'Modal', component: pxModalDocs },
      { path: 'px-spinner', title: 'Spinner', component: pxSpinnerDocs },
      {
        path: 'px-table-view',
        title: 'Table View',
        component: pxTableViewDocs

       },
      { path: 'px-view-header', title: 'View Header', component: pxViewHeaderDocs }
    ]
  }
];

// Catalog - logoSrc="../images/logo.png"
ReactDOM.render(
  <div>
    <GithubCorner
      href={`https://github.com/${project}`}
      bannerColor="#fff"
      octoColor="#000"
      width={80}
      height={80}
      direction="right"
    />
    <Catalog
      logoSrc={logo}
      imports={documentationImports}
      pages={pages}
      specimens={{
        javascript: props => <CodeSpecimen {...props} lang="javascript" />,
        js: props => <CodeSpecimen {...props} lang="javascript" />,
        jsx: props => <ReactSpecimen {...props} />
      }}
      title={title}
    />
  </div>,
  document.getElementById('app')
);
