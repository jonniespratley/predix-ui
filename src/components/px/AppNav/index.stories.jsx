import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs, array, number, text, boolean
} from '@storybook/addon-knobs';
import { withReadme } from 'storybook-readme';
import { action } from '@storybook/addon-actions';

import README from './README.md';
import AppNav from './AppNav';
import AppNavItem from './AppNavItem';
// import AppNavSubItem from './px-app-nav-sub-item';
import AppNavSubGroupItem from './AppNavSubItem';
// import Icons from '../IconSet';

// const AllIcons = Object.keys(Icons).sort();

const navItems = [
  {
    label: 'Home',
    id: 'home',
    icon: 'px-fea:home'
  },
  {
    label: 'Cases',
    id: 'cases',
    icon: 'px-fea:cases'
  },
  {
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
    children: [
      {
        label: 'Asset #1',
        id: 'a1'
      },
      {
        label: 'Asset #2',
        id: 'a2'
      }
    ],
    items: [
      {
        label: 'Asset #1',
        id: 'a1'
      },
      {
        label: 'Asset #2',
        id: 'a2'
      }
    ]
  }, {
    label: 'Dashboards',
    id: 'dashboards',
    icon: 'px-fea:dashboard',
    items: [
      {
        label: 'Asset #1',
        id: 'a1'
      },
      {
        label: 'Asset #2',
        id: 'a2'
      }
    ],
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
  }];

const navItem = navItems[navItems.length - 1];
// /
storiesOf('Components / App Nav', module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(README))
  .addWithJSX('default', () => (
    <AppNav
      onChange={action('onChange')}
      items={navItems}
      vertical={boolean('vertical', false)}
      collapseAll={boolean('collapseAll', false)}
      collapseWithIcon={boolean('collapseWithIcon', false)}
      onlyShowIcon={boolean('onlyShowIcon', false)}
      collapseAt={number('collapseAt', 320)}
    />
  ))
  .addWithJSX('with "horizontal"', () => (<AppNav items={navItems} />))
  .addWithJSX('with "selected"', () => (<AppNav items={navItems} selected={number('selected', 2)} />))
  .addWithJSX('with "vertical"', () => (<AppNav items={navItems} vertical={boolean('vertical', true)} />))
  .addWithJSX('nav item', () => (
    <AppNavItem
      id="item1"
      onClick={action('onClick')}
      label={text('label', navItem.label)}
      icon={text('icon', navItem.icon)}
      items={array('items', navItem.items)}
      collapsed={boolean('collapsed', false)}
      cancelSelect={boolean('cancelSelect', false)}
      dropdown={boolean('dropdown', false)}
      selected={boolean('selected', false)}
      empty={boolean('empty', false)}
      onlyShowIcon={boolean('onlyShowIcon', false)}
      withLabel={boolean('withLabel', false)}
      emptyIcon={boolean('emptyIcon', false)}
      emptyLabel={boolean('emptyLabel', false)}
    />
  ))
  .addWithJSX('with Sub Group', () => (
    <AppNavSubGroupItem
      id="item3"
      item={navItem}
      onClick={action('onClick')}
      label={text('label', navItem.label)}
      icon={text('icon', navItem.icon)}
      collapsed={boolean('collapsed', false)}
      opened={boolean('opened', false)}
      selected={boolean('selected', false)}
      onlyShowIcon={boolean('onlyShowIcon', false)}
      emptyIcon={boolean('emptyIcon', false)}
    />
  ));
