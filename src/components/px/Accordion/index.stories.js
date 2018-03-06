import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs/react';

import Accordion from './';

storiesOf('Accordion', module)
	.addDecorator(withKnobs)
	.add('default', () => (
		<div>
			<Accordion 
				showAction={boolean('showAction', true)}
				opened={boolean('opened', true)}
				disabled={boolean('disabled', false)}
				status={text('status', 'Last Updated: 3 days ago')}
				headerValue={text('headerValue', 'Header Caption')}>
				{text('content', 'Accordion content goes here.')}
			</Accordion>
			<Accordion 
				showAction={boolean('showAction', true)}
				opened={boolean('opened', true)}
				disabled={boolean('disabled', false)}
				status={text('status', 'Last Updated: 3 days ago')}
				headerValue={text('headerValue', 'Header Caption')}>
				{text('content', 'Accordion content goes here.')}
		</Accordion>
		</div>
	));
