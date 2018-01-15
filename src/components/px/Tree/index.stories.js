import React from 'react';
import { storiesOf } from '@storybook/react';
import Tree from './';

storiesOf('Tree', module)
	.add('default', () => (
		<Tree/>
	));
