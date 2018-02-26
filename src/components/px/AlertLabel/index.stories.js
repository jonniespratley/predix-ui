import React from 'react';
import { storiesOf } from '@storybook/react';
import AlertLabel from './';

storiesOf('Alert Label', module)
	.add('default', () => (
		<AlertLabel
		  label='Info'
		  type='info'/>
	))

	.add('error', () => (
		<AlertLabel
		  label='Error'
		  type='error'/>
	))
	.add('important', () => (
		<AlertLabel
		  label='Important'
		  type='important'/>
	))
	.add('healthy', () => (
		<AlertLabel
		  label='Healthy'
		  type='healthy'/>
	))
	.add('warning', () => (
		<AlertLabel
		  label='Warning'
		  type='warning'/>
	))
	;
