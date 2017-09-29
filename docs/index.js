/* eslint-disable global-require, import/no-unresolved, react/no-multi-comp */
import React from 'react';
import ReactDOM from 'react-dom';
import GithubCorner from 'react-github-corner';
import { Catalog, CodeSpecimen, ReactSpecimen } from 'catalog';

//import 'purecss/build/pure.css';
import './main.css';
import {px} from '../src';

// TODO: Use this format
import pxAppHeaderDocs from '../src/px-app-header/README';
import pxAppNavDocs from '../src/px-app-nav/README';
import pxAccordionDocs from '../src/px-accordion/README';
import pxActionSheetDocs from '../src/px-action-sheet/README';
import pxAlertLabelDocs from '../src/px-alert-label/README';
import pxAlertMessageDocs from '../src/px-alert-message/README';

import pxButtonDocs from '../src/px-button/README';
import pxBreadcrumbsDocs from '../src/px-breadcrumbs/README';
import pxBrandingBarDocs from '../src/px-branding-bar/README';

import pxCardDocs from '../src/px-card/README';
import pxChipDocs from '../src/px-chip/README';

import pxDrawerDocs from '../src/px-drawer/README';
import pxDatatableDocs from '../src/px-datatable/README';
import pxDropDownDocs from '../src/px-dropdown/README';
import pxGridDocs from '../src/px-grid/README';
import pxLayoutDocs from '../src/px-layout/README';
import pxModalDocs from '../src/px-modal/README';
import pxNavbarDocs from '../src/px-navbar/README';
import pxSpinnerDocs from '../src/px-spinner/README';
import pxTableViewDocs from '../src/px-table-view/README';
import pxTabsDocs from '../src/px-tabs/README';
import pxProgressbarDocs from '../src/px-progress-bar/README';
import pxPopoverDocs from '../src/px-popover/README';
import pxOverlayDocs from '../src/px-overlay/README';
import pxTileDocs from '../src/px-tile/README';
import pxTreeDocs from '../src/px-tree/README';
import pxKeyValuePairDocs from '../src/px-key-value-pair/README';
import pxViewHeaderDocs from '../src/px-view-header/README';


const logo = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/49212/predix_ds_logo.webp';

// Add your documentation imports here. These are available to
// React specimen. Do NOT pass React here as Catalog does that.
const documentationImports = {
  px,
  PxReact: px
};


//const title = `${NAME} v${VERSION}`; // eslint-disable-line no-undef
const title = `px-react v${VERSION}`;
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
      {path: 'installation', title: 'Installation', component: require('./installation.md')},
      {path: 'customization', title: 'Customization', component: require('./customization.md')}
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
      { path: 'px-app-header', title: 'App Header', component: pxAppHeaderDocs},
      { path: 'px-app-nav', title: 'App Nav', component: pxAppNavDocs},
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
      { path: 'px-overlay', title: 'Overlay', component: pxOverlayDocs },
      { path: 'px-spinner', title: 'Spinner', component: pxSpinnerDocs },
      { path: 'px-popover', title: 'Popover', component: pxPopoverDocs },
      { path: 'px-progress-bar', title: 'Progress Bar', component: pxProgressbarDocs },
      { path: 'px-tabs', title: 'Tabs', component: pxTabsDocs },
      { path: 'px-tile', title: 'Tile', component: pxTileDocs },
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
      //logoSrc={logo}
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
