import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';
import { withReadme } from 'storybook-readme';

import README from './README.md';
import Overlay from '.';

storiesOf('Components / Overlay', module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(README))
  .addWithJSX('default', () => (
    <Overlay
      opened={boolean('opened', false)}
      onOverlayClick={action('clicked')}
    />
  ))
  .addWithJSX('with content', () => (
    <Overlay
      opened={boolean('opened', false)}
      onOverlayClick={action('clicked')}
    >
      <p style={{
        textAlign: 'center',
        backgroundColor: 'white',
        padding: 20,
        margin: 20
      }}
      >
        This can be content
      </p>
    </Overlay>
  ));
