import React from 'react';
import { storiesOf } from '@storybook/react';
import Icon from './px-icon';
import Icons from './';
//import DocIcons from './px-icon-set-document';

const DocIcons = Object.keys(Icons);


const RenderIconSet = ({icons, size}) => (
<ul>
	{icons && icons.map((item, key) => (
    <li key={key}><Icon icon={item} size={size} />{item}</li>
	))}
</ul>
);

storiesOf('Icon', module)
	.add('all icons', () => (
		<div>
			<RenderIconSet icons={DocIcons} size={24}/>
		</div>

	));
