import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { withReadme } from 'storybook-readme';

import README from './README.md';
import { Box, Base } from '.';

storiesOf('Components / Box', module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(README))
  .addWithJSX('with box', () => (
    <Box use={text('use', 'div')}>
      {text('content', 'This is the main context area of the box.')}
    </Box>
  ))
  .addWithJSX('with base', () => (
    <Base use={text('use', 'h2')}>
      {text('content', 'This is the main context area of the box.')}
    </Base>
  ));

