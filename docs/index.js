/* eslint-disable global-require, import/no-unresolved, react/no-multi-comp */
import React from 'react';
import ReactDOM from 'react-dom';
import GithubCorner from 'react-github-corner';
import { Catalog, CodeSpecimen, ReactSpecimen } from 'catalog';

//import 'purecss/build/pure.css';
import './main.css';
import px from '../src';
import DemoHelpers from '../src/DemoHelpers';

// TODO: extract
import IronComponents from '../src/iron-components';
import ironComponentsDocs from '../src/iron-components/README';

// TODO: Use this format
import pxAppHeaderDocs from '../src/AppHeader/README';
import pxAppNavDocs from '../src/AppNav/README';
import pxAccordionDocs from '../src/Accordion/README';
import pxActionSheetDocs from '../src/ActionSheet/README';
import pxAlertLabelDocs from '../src/AlertLabel/README';
import pxAlertMessageDocs from '../src/AlertMessage/README';
import pxButtonDocs from '../src/Button/README';
import pxBreadcrumbsDocs from '../src/Breadcrumbs/README';
import pxBrandingBarDocs from '../src/BrandingBar/README';
import pxCardDocs from '../src/Card/README';
import pxChipDocs from '../src/Chip/README';
import pxInputDocs from '../src/Input/README';
import pxIconSetDocs from '../src/px-icon-set/README';
//import pxIconSetDocs from '../src/px-icon-set/README';
import pxDrawerDocs from '../src/Drawer/README';
import pxDatatableDocs from '../src/DataTable/README';
import pxDropDownDocs from '../src/Dropdown/README';
import pxGridDocs from '../src/Grid/README';
import pxLayoutDocs from '../src/Layout/README';
import pxModalDocs from '../src/Modal/README';
import pxNavbarDocs from '../src/Navbar/README';
import pxSpinnerDocs from '../src/Spinner/README';
import pxTableViewDocs from '../src/TableView/README';
import pxTabsDocs from '../src/Tabs/README';
import pxProgressbarDocs from '../src/ProgressBar/README';
import pxPopoverDocs from '../src/Popover/README';
import pxOverlayDocs from '../src/Overlay/README';
import pxTileDocs from '../src/Tile/README';
import pxTreeDocs from '../src/Tree/README';
import pxKeyValuePairDocs from '../src/KeyValuePair/README';
import pxViewHeaderDocs from '../src/ViewHeader/README';



const logo = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/49212/predix_ds_logo.webp';

// Add your documentation imports here. These are available to
// React specimen. Do NOT pass React here as Catalog does that.
const documentationImports = {
  IronComponents,
  DemoHelpers,
  px,
  PxReact: px
};


const title = `${NAME} v${VERSION}`; // eslint-disable-line no-undef
//const title = `px-react v${VERSION}`;
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
      {path: 'customization', title: 'Customization', component: require('./customization.md')},
      {path: 'tutorial', title: 'Turorial', component: require('./tutorial.md')},
      {path: 'example', title: 'Example', component: require('./example.md')}
    ]
  },
  {
    path: '/layout',
    title: 'Layout',
    responsiveSizes: responsiveSizes,
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
    title: 'Component Demos',
    pages: [
      { path: 'Accordion', title: 'Accordion', component: pxAccordionDocs},
      { path: 'AlertLabel', title: 'Alert Label', component: pxAlertLabelDocs},
      { path: 'AlertMessage', title: 'Alert Message', component: pxAlertMessageDocs},
      { path: 'AppHeader', title: 'App Header', component: pxAppHeaderDocs},
      { path: 'AppNav', title: 'App Nav', component: pxAppNavDocs},
      //{ path: 'ActionSheet', title: 'Action Sheet', component: pxActionSheetDocs},
      { path: 'Button', title: 'Button', component: pxButtonDocs},
      { path: 'BrandingBar', title: 'Branding Bar', component: pxBrandingBarDocs},
      { path: 'Breadcrumbs', title: 'Breadcrumbs', component: pxBreadcrumbsDocs},
      { path: 'Card', title: 'Card', component: pxCardDocs },
      { path: 'Chip', title: 'Chip', component: pxChipDocs },
      { path: 'Drawer', title: 'Drawer', component: pxDrawerDocs },
      { path: 'DataTable', title: 'DataTable', component: pxDatatableDocs },
      { path: 'Dropdown', title: 'Dropdown', component: pxDropDownDocs },
      { path: 'Grid', title: 'Grid', component: pxGridDocs },
      { path: 'px-icon-set', title: 'Icon Set', component: pxIconSetDocs },
      { path: 'Input', title: 'Input', component: pxInputDocs },
      { path: 'KeyValuePair', title: 'Key-Value Pair', component: pxKeyValuePairDocs },
      { path: 'Layout', title: 'Layout', component: pxLayoutDocs },
      { path: 'Navbar', title: 'Navbar', component: pxNavbarDocs },
      { path: 'Modal', title: 'Modal', component: pxModalDocs },
      { path: 'Overlay', title: 'Overlay', component: pxOverlayDocs },
      { path: 'Popover', title: 'Popover', component: pxPopoverDocs },
      { path: 'ProgressBar', title: 'Progress Bar', component: pxProgressbarDocs },
      { path: 'Spinner', title: 'Spinner', component: pxSpinnerDocs },

      { path: 'Tabs', title: 'Tabs', component: pxTabsDocs },
      { path: 'Tile', title: 'Tile', component: pxTileDocs },
      { path: 'Tree', title: 'Tree', component: pxTreeDocs },
      { path: 'TableView', title: 'Table View', component: pxTableViewDocs },
      { path: 'ViewHeader', title: 'View Header', component: pxViewHeaderDocs }
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
