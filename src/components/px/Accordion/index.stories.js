import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs/react';

import Accordion from './';

storiesOf('Accordion', module)
	.addDecorator(withKnobs)
	.add('default', () => (
		<Accordion 
			headerValue={text('headerValue', 'Accordion Header')}>Accordion Content</Accordion>
	));
