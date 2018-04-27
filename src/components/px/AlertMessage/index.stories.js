import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import { withReadme } from 'storybook-readme';

import AlertMessage from './';
import README from './README.md';

const typeOptions = {
  information: 'Info',
  error: 'Error',
  important: 'Important',
  healthy: 'Healthy',
  warning: 'Warning',
  success: 'Success'
};

storiesOf('Alert Message', module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(README))
  .add('default', () => (
    <AlertMessage
      onDismiss={action('onDismiss')}
      onActionClick={action('onActionClick')}
      type={select('type', Object.keys(typeOptions))}
      action={select('action', ['acknowledge', 'dismiss'])}
      message={text('message', 'This is the message content.')}
      messageTitle={text('messageTitle', 'Alert')}
      visible={boolean('visible', true)}
    />
  ))
  .add('with message', () => (
    <AlertMessage
      messageTitle="Alert"
      message="This is an information message"
      visible
    />
  ))
  .add('with type "information"', () => (
    <AlertMessage
      messageTitle="Alert"
      message="This is a message"
      type="information"
      visible
    />
  ))
  .add('with type "important"', () => (
    <AlertMessage
      messageTitle="Alert"
      message="This is a message"
      type="important"
      visible
    />
  ))
  .add('with type "error"', () => (
    <AlertMessage
      messageTitle="Alert"
      message="This is a message"
      type="error"
      visible
    />
  ))
  .add('with type "warning"', () => (
    <AlertMessage
      messageTitle="Alert"
      message="This is a message"
      type="warning"
      visible
    />
  ))
  .add('with type "unkown"', () => (
    <AlertMessage
      messageTitle="Alert"
      message="This is a message"
      type="unkown"
      visible
    />
  ));

