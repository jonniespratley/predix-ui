import React from 'react';
import { storiesOf } from '@storybook/react';
import AlertMessage from './';

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
	.add('default', () => (
		<AlertMessage
      messageTitle='Alert'
      visible/>
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
