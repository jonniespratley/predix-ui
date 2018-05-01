import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, array, boolean, select } from '@storybook/addon-knobs';

import Dropdown from './';
import Icon from '../IconSet/Icon';

const buttonStyles = [
  'bare',
  'bare-primary',
  'default',
  'tertiary',
  'icon'
];

const items = [
  { key: '1', val: 'iPhone' },
  { key: '2', val: 'Android' },
  { key: '3', val: 'Blackberry' },
  { key: '4', val: 'Windows Phone' },
  { key: '5', val: 'Flip Phone', disabled: true }
];

storiesOf('Dropdown', module)
  .addDecorator(withKnobs)
  .addWithJSX('default', () => (
    <Dropdown
      onChange={action('onChange')}
      items={array('items', items)}
      sortMode="key"
      opened={boolean('opened', false)}
      disabled={boolean('disabled', false)}
      disableClear={boolean('disableClear', false)}
      hideChevron={boolean('hideChevron', false)}
      buttonStyle={select('buttonStyle', buttonStyles, 'default')}
      displayValue={text('displayValue', 'Select')}
    />
  ))
  .addWithJSX('with custom trigger', () => (
    <Dropdown
      onChange={action('onChange')}
      items={array('items', items)}
      sortMode="key"
      disabled={boolean('disabled', false)}
      disableClear={boolean('disableClear', false)}
      hideChevron={boolean('hideChevron', false)}
      buttonStyle={select('buttonStyle', buttonStyles, 'bare')}
      displayValue={text('displayValue', 'Select')}
    >
      <Icon icon="px-nav:home" />
    </Dropdown>
  ));
