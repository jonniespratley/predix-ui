import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, number } from '@storybook/addon-knobs/react';

import Spinner from './';


// Spinner
storiesOf('Spinner', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <Spinner
      finished={boolean('finished', false)}
      size={number('size', 125)}
    />
  ));
