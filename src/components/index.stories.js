import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import px from './px';
import Flex from '../styles/flex';

// import './px/Theme/LightTheme';
import './px/Theme/DarkTheme';

storiesOf('Welcome', module)
  .addDecorator(withKnobs)
  .add('to Storybook', () => (
    <div>Welcome</div>
  ))
  .add('Style Guide', () => (
    <div>
      <Flex>
        <px.Button>Default</px.Button>
        <px.Button theme="primary">Primary</px.Button>
      </Flex>
    </div>
  ));
