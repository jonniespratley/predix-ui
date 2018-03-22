import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, array, object, boolean, number, select } from '@storybook/addon-knobs';

import TableView from './';

function makeRows(count = 5, obj){
	let items = [];
	for(let i = 1; i <= count; i++){
		items.push(Object.assign({
			id: i
		}, obj, {
			title: obj ? `${obj.title} ${i}` : `Item ${i}`
		}));
	}
	return items;
}

const tableSizes = [
	'flush',
	'tiny',
	'small',
	'regular',
	'large',
	'huge'
];

storiesOf('TableView', module)
	.addDecorator(withKnobs)
	.add('default', () => (
		<TableView 
			items={makeRows(5)}
			size={select('size', tableSizes)}
			tappable={boolean('tappable', true)}/>
	))
	.add('with icons', () => (
		<TableView 
			size={select('size', tableSizes)}
			items={makeRows(5, { title: 'Item', icon:'px-nav:home'})}
			tappable={boolean('tappable', true)}
			/>
	))
	.add('with images', () => (
		<TableView 
			size={select('size', tableSizes)}
			items={makeRows(5, { title: 'Item', image:'http://placehold.it/44'})}
			tappable={boolean('tappable', true)}
			/>
	))
	.add('with labels', () => (
		<TableView 
			items={makeRows(5, { 
				title: 'Item', 
				labelRight: 'New'
			})}
			size={select('size', tableSizes)}
			tappable={boolean('tappable', true)}/>
	))
	.add('with descriptions', () => (
		<TableView 
			size={select('size', tableSizes)}
			items={makeRows(5, { 
				title: 'Item', 
				body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
				labelRight: 'New'
			})}
			tappable={boolean('tappable', true)}/>
	))
	;
