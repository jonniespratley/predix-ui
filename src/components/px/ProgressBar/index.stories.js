import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react';
import ProgressBar from './';

storiesOf('Progress Bar', module)
	.addDecorator(withKnobs)
	.add('default', () => (
		<ProgressBar 
			value={number('value', 50)}
			infinite={boolean('infinite', false)}
			/>
	));
