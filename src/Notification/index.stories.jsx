import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';

import Notification from '.';

const types = [
  'healthy',
  'important',
  'warning',
  'error',
  'info',
  'unknown'
];

storiesOf('Components / Notification', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <Notification
      type={select('type', types, 'important')}
      statusIcon={text('statusIcon', 'px-utl:delete')}
      onClick={action('onClick')}
      opened={boolean('opened', true)}
    >
      {text('content', 'Widget has been removed from your dashboard.')}
    </Notification>
  ))
  .add('with action', () => (
    <Notification
      type={select('type', types, 'healthy')}
      statusIcon={text('statusIcon', 'px-utl:filter')}
      actionIcon={text('actionIcon', 'px-nav:close')}
      opened={boolean('opened', true)}
      onClick={action('onClick')}
      small={boolean('small', true)}
    >
      {text('content', '36 Filters')}
    </Notification>
  ));

