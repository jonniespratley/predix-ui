import React from 'react';
import { storiesOf } from '@storybook/react';
import ViewHeader from './';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, array, object, boolean, number, select } from '@storybook/addon-knobs';
import Icon from '../IconSet/Icon';
import Button from '../Button';

storiesOf('ViewHeader', module)
	.addDecorator(withKnobs)
	.add('default', () => (
		<ViewHeader
			title={text('title', 'Current View Title')}
			subtitle={text('subtitle', 'A subtitle describing the view.')}
			/>
	))
	.add('with actions', () => (
		<ViewHeader
			title={text('title', 'Current View Title')}
			subtitle={text('subtitle', 'A subtitle describing the view.')}>
			<div>
      	<Button>Back</Button>
			</div>
			<div>
				<Button>Next</Button>
			</div>
			</ViewHeader>
	))
	;
