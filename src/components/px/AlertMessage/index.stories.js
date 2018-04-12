import React from 'react';
import { storiesOf } from '@storybook/react';

//addons
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, array, object, boolean, number, select } from '@storybook/addon-knobs';

import AlertMessage from './';

const typeOptions = {
  information: 'Info',
  error: 'Error',
  important: 'Important',
  healthy: 'Healthy',
  warning: 'Warning',
  success: 'Success'
};
const navItems = [
  {
    "path": "/page1",
    "icon": "px-fea:analysis",
    "label": "Page 1"
  },
  {
    "path": "/page2",
    "icon": "px-fea:dashboard",
    "label": "Page 2"
  }
];
///
storiesOf('Alert Message', module)
  .addDecorator(withKnobs)
	.add('default', () => (
		<AlertMessage
      onDismissClick={action('onDismissClick')}
      onActionClick={action('onActionClick')}
      type={select('type', Object.keys(typeOptions))}
      action={select('action', ['acknowledge', 'dismiss'])}
      message={text('message', 'This is the message content.')}
      messageTitle={text('messageTitle', 'Alert')}
      visible={boolean('visible', true)}/>
  ))
  .add('with message', () => (
		<AlertMessage
      messageTitle='Alert'
      message='This is an information message'
      visible/>
  ))
  .add('with type "information"', () => (
		<AlertMessage
      messageTitle='Alert'
      message='This is a message'
      type='information'
      visible/>
  ))
  .add('with type "important"', () => (
		<AlertMessage
      messageTitle='Alert'
      message='This is a message'
      type='important'
      visible/>
  ))
  .add('with type "error"', () => (
		<AlertMessage
      messageTitle='Alert'
      message='This is a message'
      type='error'
      visible/>
  ))
  .add('with type "warning"', () => (
		<AlertMessage
      messageTitle='Alert'
      message='This is a message'
      type='warning'
      visible/>
  ))
  .add('with type "unkown"', () => (
		<AlertMessage
      messageTitle='Alert'
      message='This is a message'
      type='unkown'
      visible/>
	))
	;
