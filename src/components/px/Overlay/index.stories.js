import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';

import Overlay from './';

storiesOf('Overlay', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <Overlay
      opened={boolean('opened', false)}
      onOverlayClick={action('clicked')}
    />
  ));
