import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react';
import Grid from './';
import Card from '../Card';

storiesOf('Grid', module)
	.addDecorator(withKnobs)
	.addWithJSX('default', () => (
		<Grid>
			<Grid item>
				<Card headerText='Card 1'>
					This is the main context area of the card.
				</Card>
			</Grid>
			<Grid item>
				<Card headerText='Card 2'>
					This is the main context area of the card.
				</Card>
			</Grid>
		</Grid>
	));
