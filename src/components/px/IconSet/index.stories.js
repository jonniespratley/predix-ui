import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select, number } from '@storybook/addon-knobs/react';

import Icon from './px-icon';
import Icons from './';
//import DocIcons from './px-icon-set-document';

const AllIcons = Object.keys(Icons).sort();


const RenderIconSet = ({icons, size}) => (
<ul>
	{icons && icons.map((item, key) => (
    <li key={key}><Icon icon={item} size={size} />{item}</li>
	))}
</ul>
);

storiesOf('Icon', module)
	.addDecorator(withKnobs)
	.add('default', () => (
		<Icon 
			icon={select('icon', AllIcons, 'px-fea:home')}
			viewBox={text('viewBox', '0 0 32 32')}
			size={number('size', 225)}/>
	))
	;
