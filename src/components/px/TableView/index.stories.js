import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import { withReadme } from 'storybook-readme';
import README from './README.md';
import TableView from './';
import TableRow from './TableRow';

function makeRows(count = 5, obj) {
  const items = [];
  for (let i = 1; i <= count; i++)/* eslint-disable-line */ {
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
  .addDecorator(withReadme(README))
  .addWithJSX('default', () => (
    <TableView
      items={makeRows(5)}
      size={select('size', tableSizes)}
      tappable={boolean('tappable', true)}
    />
  ))
  .addWithJSX('with icons', () => (
    <TableView
      size={select('size', tableSizes)}
      items={makeRows(5, { title: 'Item', icon: 'px-nav:home' })}
      tappable={boolean('tappable', true)}
    />
  ))
  .addWithJSX('with images', () => (
    <TableView
      size={select('size', tableSizes)}
      items={makeRows(5, { title: 'Item', image: 'http://placehold.it/44' })}
      tappable={boolean('tappable', true)}
    />
  ))
  .addWithJSX('with labels', () => (
    <TableView
      items={makeRows(5, {
        title: 'Item',
        labelRight: 'New'
      })}
      size={select('size', tableSizes)}
      tappable={boolean('tappable', true)}
    />
  ))
  .addWithJSX('with descriptions', () => (
    <TableView
      onSelect={action('onSelect')}
      size={select('size', tableSizes)}
      items={makeRows(5, {
        title: 'Item',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        labelRight: 'New'
      })}
      tappable={boolean('tappable', true)}
    />
  ))
  .addWithJSX('Table Row', () => (
    <TableRow
      onClick={action('onClick')}
      title={text('title', 'Table Row Title')}
      image={text('image', '')}
      icon={text('icon', '')}
      labelLeft={text('labelLeft', '')}
      labelRight={text('labelRight', '')}
      subtitle={text('subtitle', '')}
      body={text('body', 'Table Row Body')}
      size={select('size', ['flush', 'tiny', 'small', 'regular', 'large', 'huge'])}
      header={boolean('header', false)}
      iconLeft={boolean('iconLeft', false)}
      iconRight={boolean('iconRight', false)}
      swipeable={boolean('swipeable', false)}
      selected={boolean('selected', false)}
      tappable={boolean('tappable', true)}
    />
  ));

