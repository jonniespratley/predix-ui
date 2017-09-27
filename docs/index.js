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
import pxAccordionDocs from './px-accordion';
import pxActionSheetDocs from './px-action-sheet';
import pxAlertLabelDocs from './px-alert-label';
import pxAlertMessageDocs from './px-alert-message';

import pxButtonDocs from './px-button';
import pxBreadcrumbsDocs from './px-breadcrumbs';
import pxBrandingBarDocs from './px-branding-bar';

import pxCardDocs from './px-card';
import pxChipDocs from './px-chip';

import pxDrawerDocs from './px-drawer';
import pxDatatableDocs from './px-datatable';
import pxDropDownDocs from './px-dropdown';

import pxGridDocs from './px-grid';
import pxLayoutDocs from './px-layout';

import pxModalDocs from './px-modal';
import pxNavbarDocs from './px-navbar';


import pxSpinnerDocs from './px-spinner';

import pxTableViewDocs from './px-table-view';
import pxTabsDocs from './px-tabs';



import pxProgressbarDocs from './px-progress-bar';
import pxPopoverDocs from './px-popover';


import pxOverlayDocs from './px-overlay';



import pxTileDocs from './px-tile';
import pxTreeDocs from './px-tree';

import pxKeyValuePairDocs from './px-key-value-pair';

import pxViewHeaderDocs from './px-view-header';



const logo = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/49212/predix_ds_logo.webp';

// Add your documentation imports here. These are available to
// React specimen. Do NOT pass React here as Catalog does that.
const documentationImports = {
  px,
  PxAlertLabel
};


const title = `${NAME} v${VERSION}`; // eslint-disable-line no-undef
const project = `${USER}/${NAME}`; // eslint-disable-line no-undef
const responsiveSizes = [
  {name: 'mobile', width: 320, height: 568},
  {name: 'tablet', width: 1024, height: 768},
  {name: 'desktop', width: 1280, height: 960}
];
const pages = [
  {
    path: '/',
    title: 'Introduction',
    component: require('../README.md')
  },
  {
    path: '/getting-started',
    title: 'Getting Started',
    pages: [
      {path: 'installation', title: 'Installation', component: require('./installation.md')}
    ]
  },
  {
    path: '/layout',
    title: 'Layout',
    responsiveSizes: responsiveSizes,
    styles: [
      '/px-components-react.css'
    ],
    pages: [
      {path: 'basics', title: 'Basics', component: require('./layout-basics.md')},
      {
        path: 'grid',
        title: 'Grid',
        responsiveSizes: responsiveSizes,
        component: require('./layout-grid.md')}
    ]
  },
  {
    title: 'Components',
    pages: [
      { path: 'px-accordion', title: 'Accordion', component: pxAccordionDocs},
      { path: 'px-alert-label', title: 'Alert Label', component: pxAlertLabelDocs},
      { path: 'px-alert-message', title: 'Alert Message', component: pxAlertMessageDocs},
      //{ path: 'px-action-sheet', title: 'Action Sheet', component: pxActionSheetDocs},
      { path: 'px-button', title: 'Button', component: pxButtonDocs},
      { path: 'px-branding-bar', title: 'Branding Bar', component: pxBrandingBarDocs},
      { path: 'px-breadcrumbs', title: 'Breadcrumbs', component: pxBreadcrumbsDocs},
      { path: 'px-card', title: 'Card', component: pxCardDocs },
      { path: 'px-chip', title: 'Chip', component: pxChipDocs },
      { path: 'px-drawer', title: 'Drawer', component: pxDrawerDocs },
      { path: 'px-datatable', title: 'DataTable', component: pxDatatableDocs },
      { path: 'px-dropdown', title: 'Dropdown', component: pxDropDownDocs },
      { path: 'px-grid', title: 'Grid', component: pxGridDocs },

      { path: 'px-key-value-pair', title: 'Key-Value Pair', component: pxKeyValuePairDocs },
      { path: 'px-layout', title: 'Layout', component: pxLayoutDocs },
      { path: 'px-navbar', title: 'Navbar', component: pxNavbarDocs },
      { path: 'px-modal', title: 'Modal', component: pxModalDocs },
      { path: 'px-spinner', title: 'Spinner', component: pxSpinnerDocs },
      { path: 'px-popover', title: 'Popover', component: pxPopoverDocs },
      { path: 'px-progress-bar', title: 'Progress Bar', component: pxProgressbarDocs },
      { path: 'px-tabs', title: 'Tabs', component: pxTabsDocs },
      { path: 'px-tree', title: 'Tree', component: pxTreeDocs },
      { path: 'px-table-view', title: 'Table View', component: pxTableViewDocs },
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
