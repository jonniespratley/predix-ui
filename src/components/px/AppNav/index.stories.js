import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, array, number, text, boolean } from '@storybook/addon-knobs';
import { withReadme } from 'storybook-readme';
import { action } from '@storybook/addon-actions';

import withTests from '../../../../.storybook/withTests';

import README from './README.md';
import AppNav from './';
import AppNavItem from './AppNavItem';

import AssetGraphBehavior from '../ContextBrowser/AssetGraphBehavior';

// import AppNavSubItem from './px-app-nav-sub-item';
import AppNavSubGroup from './px-app-nav-sub-group';
import AppNavGroup from './AppNavGroup';
// import Icons from '../IconSet';

// const AllIcons = Object.keys(Icons).sort();
const selectedRoute = ['assets', 'a1'];
const navItems = [
  {
    label: 'Home',
    id: 'home',
    icon: 'px-fea:home'
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
    ]
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
  }];

const graph = new AssetGraphBehavior();
graph.items = navItems;

console.log(graph.items);
console.log(graph);

// Set selected item;
graph.select(navItems[3]);
console.log('graph.selected', graph.selected, graph.selected === navItems[3], graph.selected === navItems[1]);


const navItem = navItems[navItems.length - 1];
// /
storiesOf('Components / App Nav', module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(README))
  .addDecorator(withTests('AppNav'))
  .addWithJSX('default', () => (
    <AppNav
      onChange={action('onChange')}
      items={graph.items}
      selectedRoute={array('selectedRoute', selectedRoute)}
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
  .addWithJSX('with AppNavItem', () => (
    <div>
      <AppNavItem
        id="item1"
        onClick={action('onClick')}
        label={text('label', navItem.label)}
        icon={text('icon', navItem.icon)}
        item={navItem}
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
      <h3>Item (default)</h3>
      <AppNavItem label="Home" icon="px-fea:home" />
      <h3>Item (selected)</h3>
      <AppNavItem label="Home" icon="px-fea:home" selected />
      <h3>Nav Group (with children)</h3>
      <AppNavGroup item={navItem} selected />
    </div>
  ))
  .addWithJSX('with AppNavGroup', () => (
    <AppNavGroup
      id="item2"
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
  ))
  .addWithJSX('with AppNavSubGroup', () => (
    <AppNavSubGroup
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
