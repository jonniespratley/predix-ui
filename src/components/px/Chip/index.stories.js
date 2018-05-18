import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { withReadme } from 'storybook-readme';

import README from './README.md';
import Chip from './';

storiesOf('Components / Chip', module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(README))
  .add('default', () => (
    <Chip showIcon={boolean('showIcon', false)}>{text('children', 'Text Label')}</Chip>
  ));
