import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, array, object, boolean, number, select } from '@storybook/addon-knobs';


import ContextBrowser from './';

const items = [{
  label: 'Home',
  id: 'home'
}, {
  label: 'Alerts',
  id: 'alerts',
  info: 'This is a list of alerts',
  children: [{
    label: 'Alert #1',
    id: 'al1',
    info: 'Oh no! Your turbine has stopped spinning'
  }, {
    label: 'Alert #2',
    id: 'al2',
    info: 'Looks like something is not working'
  }, {
    label: 'Alert #3',
    id: 'al3',
    info: 'I am a helpful alert message'
  }, {
    label: 'Alert #4',
    id: 'al4',
    info: 'Danger: Something is not right.'
  }]
}, {
  label: 'Assets',
  id: 'assets',
  children: [{
    label: 'Asset #1',
    id: 'a1',
    info: 'Here is some information about this asset'
  }, {
    label: 'Asset #2',
    id: 'a2',
    info: 'This is a different asset. Here is more information about this asset.'
  }]
}];

storiesOf('Context Browser', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <ContextBrowser items={items} />
  ));
