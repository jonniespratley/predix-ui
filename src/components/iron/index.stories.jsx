import React from 'react';
import { storiesOf } from '@storybook/react';

// addons
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, number } from '@storybook/addon-knobs';

// component
import IronCollapse from './IronCollapse';
import IronPages from './IronPages';
import IronSelector from './IronSelector';
// import IronMultiSelectable from './IronMultiSelectable';
// import IronSelectable from './IronSelectable';
// import IronMediaQuery from './IronMediaQuery';
// import IronSelection from './IronSelection';

// stories
const stories = storiesOf('IronComponents', module);

stories
  .addDecorator(withKnobs)
  .add(
    'simple info',
    withInfo({ text: 'String or React Element with docs about my component' })(() =>
      <IronCollapse>Click the mark at top-right to view the info.</IronCollapse>)
  )
  .add('iron-collapse', () => (
    <IronCollapse onClick={action('clicked')} opened={boolean('opened', true)}>
      <p>This is collapsable content.</p>
    </IronCollapse>
  ))
  .add('iron-selector', () => (
    <div>
      <IronSelector selected={number('selected', 1)} onChange={action('changed')}>
        <div><p>0 - Lorem ipsum dolor sit amet, </p></div>
        <div><p>1 - Lorem ipsum dolor sit amet, </p></div>
        <div><p>2 - Lorem ipsum dolor sit amet, </p></div>
        <div><p>3- Lorem ipsum dolor sit amet, </p></div>
        <div><p>4 - Lorem ipsum dolor sit amet, </p></div>
        <div><p>5 - Lorem ipsum dolor sit amet, </p></div>
      </IronSelector>
      <style>{`
      .iron-selected{
        border: 1px solid blue;
      }
    `}
      </style>
    </div>
  ))
  .add('iron-pages', () => (
    <IronPages selected={number('selected', 1)} onChange={action('changed')}>
      <div><p>0 - Lorem ipsum dolor sit amet, </p></div>
      <div><p>1 - Lorem ipsum dolor sit amet, </p></div>
      <div><p>2 - Lorem ipsum dolor sit amet, </p></div>
    </IronPages>
  ));
