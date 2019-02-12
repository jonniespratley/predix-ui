import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, number } from '@storybook/addon-knobs/react';

import Spinner from './';


// Spinner
storiesOf('Components / Spinner', module)
  .addDecorator(withKnobs)
  .addWithJSX('default', () => (
    <Spinner
      finished={boolean('finished', false)}
      size={number('size', 125)}
    />
  ));
