import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import Chip from './';

storiesOf('Chip', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <Chip showIcon={boolean('showIcon', false)}>{text('children', 'Text Label')}</Chip>
  ));
