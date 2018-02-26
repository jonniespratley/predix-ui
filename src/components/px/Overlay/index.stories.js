import React from 'react';
import { storiesOf } from '@storybook/react';
import Overlay from './';

storiesOf('Overlay', module)
	.add('default', () => (
		<Overlay/>
	));
