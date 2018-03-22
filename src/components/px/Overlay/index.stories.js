import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react';
import Overlay from './';

import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

storiesOf('Overlay', module)
	.addDecorator(withKnobs)
	.add('default', () => (
		<Overlay 
			opened={boolean('opened', false)}
			onOverlayClick={action('clicked')}/>
	));
