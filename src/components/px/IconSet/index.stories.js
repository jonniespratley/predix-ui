import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select, number } from '@storybook/addon-knobs/react';

import Icon from './Icon';
import Icons from './';
//import DocIcons from './px-icon-set-document';

const AllIcons = Object.keys(Icons).sort();

const cheatsheetStyles = {
	//display: 'flex'
	//flexWrap: 'wrap'
};
const RenderIconSet = ({icons, size}) => (
<ul style={cheatsheetStyles}>
	{icons && icons.map((item, key) => (
    <li key={key}><Icon icon={item} size={size} viewBox='0 0 32 32' />{item}</li>
	))}
</ul>
);

storiesOf('Icon', module)
	.addDecorator(withKnobs)
	.add('default', () => (
		<Icon 
			icon={select('icon', AllIcons, 'px-fea:home')}
			color={text('color', 'blue')}
			viewBox={text('viewBox', '0 0 32 32')}
			size={number('size', 225)}/>
	))
	.add('cheatsheet', () => (
		<div>
		{RenderIconSet({icons: AllIcons, size: 75})}
		</div>
	))
	;
