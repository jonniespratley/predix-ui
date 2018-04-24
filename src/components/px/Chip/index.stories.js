import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, array, object, boolean, number, select } from '@storybook/addon-knobs';


import Chip from './';

storiesOf('Chip', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <Chip>{text('children', 'Text Label')}</Chip>
  ));
