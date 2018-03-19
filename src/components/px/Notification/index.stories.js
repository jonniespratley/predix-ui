import React from 'react';
import { storiesOf } from '@storybook/react';
import Notification from './';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, array, object, boolean, number, select } from '@storybook/addon-knobs';


const types = [
	'healthy',
	'important',
	'warning',
	'error',
	'info',
	'unknown'
];

storiesOf('Notification', module)
	.addDecorator(withKnobs)
	.add('default', () => (
				<Notification 
				type={select('type', types, 'important')}
				statusIcon={text('statusIcon', 'px-utl:delete')}
				opened={boolean('opened', true)}>
				{text('content', 'Widget has been removed from your dashboard.')}
			</Notification>
	))
	.add('with action', () => (
				<Notification 
				type={select('type', types, 'healthy')}
				statusIcon={text('statusIcon', 'px-utl:filter')}
				actionIcon={text('actionIcon', 'px-nav:close')}
				opened={boolean('opened', true)}
				small={boolean('small', true)}
				>
				{text('content', '36 Filters')}
			</Notification>
	))
	;
