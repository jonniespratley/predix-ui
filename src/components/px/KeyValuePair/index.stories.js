import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import KeyValuePair from './';

const sizes = ['alpha', 'beta', 'gamma', 'delta', 'epsilon', 'regular'];

storiesOf('KeyValuePair', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <KeyValuePair
      key={text('key', 'item-1')}
      label={text('label', 'Lorem Ipsum')}
      value={text('value', '12345')}
      uom={text('uom', 'units')}
      size={select('size', sizes, 'beta')}
    />
  ));
