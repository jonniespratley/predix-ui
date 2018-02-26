import React from 'react';
import { storiesOf } from '@storybook/react';
import TableView from './';

storiesOf('TableView', module)
	.add('default', () => (
		<TableView/>
	));
