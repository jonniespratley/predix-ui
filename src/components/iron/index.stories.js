import React from 'react';
import { storiesOf } from '@storybook/react';

//addons
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, array, object, boolean, number } from '@storybook/addon-knobs';

//component
import IronCollapse from './IronCollapse';
import IronSelector from './IronSelector';
import IronMediaQuery from './iron-media-query';
import IronPages from './IronPages';

//stories
const stories = storiesOf('IronComponents', module);

stories
.addDecorator(withKnobs)
.add('simple info',
    withInfo({text: 'String or React Element with docs about my component'})(() =>
      <IronCollapse>Click the "?" mark at top-right to view the info.</IronCollapse>
    )
  )

.add('iron-collapse', () => (
	<IronCollapse onClick={action('clicked')}>This is collapsable content.</IronCollapse>
))
.add('iron-selector', () => (
	<IronSelector selected={1} onClick={action('clicked')}>
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </IronSelector>
))
.add('iron-pages', () => (
	<IronPages selected={1} onClick={action('clicked')}>
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </IronPages>
))

module.exports = stories;
