/* eslint-disable global-require, import/no-unresolved, react/no-multi-comp */
import React from 'react';
import ReactDOM from 'react-dom';
import GithubCorner from 'react-github-corner';
import { Catalog, CodeSpecimen, ReactSpecimen } from 'catalog';

import 'purecss/build/pure.css';
import './main.css';
import '../style.css';

import {px} from '../src';
import PxAlertLabel from '../src/px-alert-label';

// TODO: Use this format
import pxAlertLabelDocs from './px-alert-label';
import pxNavbarDocs from './px-navbar';
import pxModalDocs from './px-modal';


import pxBrandingBarDocs from './branding-bar.md';
import pxCardDocs from './cards.md';
import pxButtonDocs from './buttons.md';
import pxSpinnerDocs from './spinner.md';
import pxViewHeaderDocs from './view-header.md';
// import GridDocs from './docs/Grids';

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
      { path: 'px-button', title: 'Button', component: pxButtonDocs},
      { path: 'px-branding-bar', title: 'Branding Bar', component: pxBrandingBarDocs},
      { path: 'px-card', title: 'Card', component: pxCardDocs },
      { path: 'px-navbar', title: 'Navbar', component: pxNavbarDocs },
      { path: 'px-modal', title: 'Modal', component: pxModalDocs },
      { path: 'px-spinner', title: 'Spinner', component: pxSpinnerDocs },
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
