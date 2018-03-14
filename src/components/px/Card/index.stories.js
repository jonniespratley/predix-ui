import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react';
import Card from './';

storiesOf('Card', module)
	.addDecorator(withKnobs)
	.add('default', () => (
		<Card 
			headerText={text('headerText', 'My Card')}>
			{text('content', 'This is the main context area of the card.')}
		</Card>
	))
	.add('with icon', () => (
		<Card 
			icon={text('icon', 'px-fea:analysis')}
			headerText={text('headerText', 'My Card')}>
			{text('content', 'This is the main context area of the card.')}
		</Card>
	))
	;
