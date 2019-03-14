import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withReadme } from 'storybook-readme';

import AppHeader from '.';
import README from './README.md';

const navItems = [
  {
    path: '/page1',
    icon: 'px-fea:analysis',
    label: 'Page 1'
  },
  {
    path: '/page2',
    icon: 'px-fea:dashboard',
    label: 'Page 2'
  }
];
// /
storiesOf('Components / App Header', module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(README))
  .addWithJSX('default', () => (
    <AppHeader title={text('title', 'Predix Application')} />
  ))
  .addWithJSX('with items', () => (
    <AppHeader
      title={text('title', 'Predix Application')}
      items={navItems}
    />
  ));
