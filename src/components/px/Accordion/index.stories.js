import React from 'react';
import { storiesOf } from '@storybook/react';
import Accordion from './';

storiesOf('Accordion', module)
	.add('default', () => (
		<Accordion headerValue='Accordion Header'>Accordion Content</Accordion>
	));
