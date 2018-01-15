import React from 'react';
import { storiesOf } from '@storybook/react';
import ProgressBar from './';
///
storiesOf('Progress Bar', module)
	.add('default', () => (
		<ProgressBar value={75}/>
	))
	.add('with infinite', () => (
		<ProgressBar value={75} infinite/>
	));
