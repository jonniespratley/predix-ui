import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, array, object, boolean, number, select } from '@storybook/addon-knobs';


import Panel from './';

const demoStyles = {
	position: 'relative',
	overflow: 'hidden',
	minHeight: '400px',
	width: '100%',
	boxSizing: 'border-box',
	border: '1px solid gray',
	padding: '1rem'
};
const positions = ['top', 'right', 'left', 'bottom'];
const bgColors = [
	'light',
	'medium',
	'dark'
];

storiesOf('Panel', module)
	.addDecorator(withKnobs)
	.add('default', () => (
		<div style={demoStyles}>
			<p>Use the toggles in properties to invoke the panel.</p>
			<Panel 
				position={select('position', positions, 'right')}
				background={select('background', bgColors, 'light')}
				fullSize={boolean('fullSize', false)}
				minimizable={boolean('minimizable', false)}
				floating={boolean('floating', false)}
				fixed={boolean('fixed', false)}
				persistent={boolean('persistent', false)}
				opened={boolean('opened', true)}>
				
				<p>This can be any type of content.</p>
				<p>A form or a map</p>

			</Panel>
		</div>
		
	));
