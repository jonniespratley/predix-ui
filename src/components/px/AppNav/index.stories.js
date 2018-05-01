import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, array, number, text, boolean } from '@storybook/addon-knobs';
import { withReadme } from 'storybook-readme';
import { action } from '@storybook/addon-actions';

import README from './README.md';
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
  .addDecorator(withKnobs)
  .addDecorator(withReadme(README))
  .addWithJSX('default', () => (<AppNav items={navItems} />))
  .addWithJSX('with "horizontal"', () => (<AppNav items={navItems} />))
  .addWithJSX('with "selected"', () => (<AppNav items={navItems} selected={number('selected', 2)} />))
  .addWithJSX('with "vertical"', () => (<AppNav items={navItems} vertical={boolean('vertical', true)} />))
  .addWithJSX('nav item', () => (
    <AppNavItem
      id="item1"
      onClick={action('onClick')}
      label={text('label', 'Home')}
      icon={text('icon', 'px-nav:home')}
      collapsed={boolean('collapsed', false)}
      dropdown={boolean('dropdown', false)}
      selected={boolean('selected', false)}
      empty={boolean('empty', false)}
      onlyShowIcon={boolean('onlyShowIcon', false)}
      emptyIcon={boolean('emptyIcon', false)}
      emptyLabel={boolean('emptyLabel', false)}
    />
  ));
