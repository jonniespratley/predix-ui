import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {
  text, boolean, select, withKnobs
} from '@storybook/addon-knobs';
import { withReadme } from 'storybook-readme';
import README from './README.md';
import TableView from './TableView';
import TableRow from './TableRow';

function makeRows(count = 5, obj) {
  const items = [];
  for (let i = 1; i <= count; i++)/* eslint-disable-line */ {
    items.push(Object.assign({
      id: `item-${i}`
    }, obj,
    {
      title: `Item ${i}`
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

storiesOf('Components / TableView', module)
  .addDecorator(withReadme(README))
  .addDecorator(withKnobs)

  .addWithJSX('default', () => (
    <TableView
      items={makeRows(5)}
      size={select('size', tableSizes, 'small')}
      tappable={boolean('tappable', true)}
    />
  ))
  .addWithJSX('with icons', () => (
    <TableView
      size={select('size', tableSizes, 'regular')}
      items={makeRows(5, { title: 'Item', icon: 'px-nav:home' })}
      tappable={boolean('tappable', true)}
    />
  ))
  .addWithJSX('with images', () => (
    <TableView
      size={select('size', tableSizes, 'regular')}
      items={makeRows(5, { title: 'Item', image: 'https://placeimg.com/50/50/tech/grayscale' })}
      tappable={boolean('tappable', true)}
    />
  ))
  .addWithJSX('with labels', () => (
    <TableView
      items={makeRows(5, {
        title: 'Item',
        labelRight: 'New'
      })}
      size={select('size', tableSizes, 'regular')}
      tappable={boolean('tappable', true)}
    />
  ))
  .addWithJSX('with descriptions', () => (
    <TableView
      onSelect={action('onSelect')}
      size={select('size', tableSizes, 'regular')}
      items={makeRows(5, {
        title: 'Item',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        labelRight: 'New'
      })}
      tappable={boolean('tappable', true)}
    />
  ))
  .addWithJSX('Table Row / default', () => (
    <TableRow
      onClick={action('onClick')}
      title={text('title', 'Table Row Title')}
      image={text('image', '')}
      icon={text('icon', '')}
      labelLeft={text('labelLeft', '')}
      labelRight={text('labelRight', '')}
      subtitle={text('subtitle', '')}
      body={text('body', 'Table Row Body')}
      size={select('size', tableSizes, 'regular')}
      header={boolean('header', false)}
      iconLeft={boolean('iconLeft', false)}
      iconRight={boolean('iconRight', false)}
      swipeable={boolean('swipeable', false)}
      selected={boolean('selected', false)}
      tappable={boolean('tappable', true)}
    />
  ))
  .addWithJSX('Table Row / custom content', () => (
    <TableRow
      rowContent={<div>rowContent can be anything</div>}
      onClick={action('onClick')}
      title={text('title', '')}
      image={text('image', '')}
      icon={text('icon', '')}
      labelLeft={text('labelLeft', '')}
      labelRight={text('labelRight', '')}
      subtitle={text('subtitle', '')}
      body={text('body', '')}
      size={select('size', tableSizes, 'regular')}
      header={boolean('header', false)}
      iconLeft={boolean('iconLeft', false)}
      iconRight={boolean('iconRight', false)}
      swipeable={boolean('swipeable', false)}
      selected={boolean('selected', false)}
      tappable={boolean('tappable', true)}
    />
  ));
