import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react';
import Card from './';
const customActions = () => (
	<div>
		Expand +
	</div>
);

storiesOf('Card', module)
	.addDecorator(withKnobs)
	.addWithJSX('default', () => (
		<Card 
			headerText={text('headerText', 'My Card')}>
			{text('content', 'This is the main context area of the card.')}
		</Card>
	))
	.addWithJSX('with icon', () => (
		<Card 
			icon={text('icon', 'px-fea:analysis')}
			headerText={text('headerText', 'My Card')}>
			{text('content', 'This is the main context area of the card.')}
		</Card>
	))
	.addWithJSX('with actions', () => (
		<Card 
			icon={text('icon', 'px-fea:analysis')}
			headerText={text('headerText', 'My Card')}
			actions={customActions}>
			{text('content', 'This is the main context area of the card.')}
		</Card>
	))
	;
