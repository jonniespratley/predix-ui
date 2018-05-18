import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withReadme } from 'storybook-readme';
import withTests from '../../../../.storybook/withTests';
import AppHeader from './';
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
  .addDecorator(withTests('AppHeader'))
  .addWithJSX('default', () => (
    <AppHeader
      title={text('title', 'Predix Application')}
      onChange={action('onChange')}
    />
  ))
  .addWithJSX('with items', () => (
    <AppHeader
      title={text('title', 'Predix Application')}
      onChange={action('onChange')}
      items={navItems}
    />
  ));
