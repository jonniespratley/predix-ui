import React from 'react';
import { storiesOf } from '@storybook/react';
import { array, number } from '@storybook/addon-knobs';

import AppNav from './';
import AppNavItem from './px-app-nav-item';
// import Icons from '../IconSet';

// const AllIcons = Object.keys(Icons).sort();

const navItems = array('navItems', [{
  label: 'Home',
  id: 'home',
  icon: 'px-fea:home'
}, {
  label: 'Alerts',
  id: 'alerts',
  icon: 'px-fea:alerts',
  metadata: {
    openCases: '12',
    closedCases: '82'
  }
}, {
  label: 'Assets',
  id: 'assets',
  icon: 'px-fea:asset',
  children: [{
    label: 'Asset #1',
    id: 'a1'
  }, {
    label: 'Asset #2',
    id: 'a2'
  }]
}, {
  label: 'Dashboards',
  id: 'dashboards',
  icon: 'px-fea:dashboard',
  children: [{
    label: 'See Live Truck View',
    id: 'trucks',
    icon: 'px-obj:truck'
  }, {
    label: 'Track Orders',
    id: 'orders',
    icon: 'px-fea:orders'
  }, {
    label: 'Analyze Invoices',
    id: 'invoices',
    icon: 'px-fea:templates'
  }]
}]);

// /
storiesOf('App Nav', module)
  .add('default', () => (<AppNav items={navItems} />))
  .add('with "horizontal"', () => (<AppNav items={navItems} />))
  .add('with "selected"', () => (<AppNav items={navItems} selected={number('selected', 2)} />))
  .add('with "vertical"', () => (<AppNav items={navItems} vertical />));
storiesOf('App Nav Item', module)
  .add('default', () => (<AppNavItem {...navItems[0]} />))
  .add('with dropdown', () => (<AppNavItem {...navItems[2]} dropdown />));
