import React from 'react';
import { storiesOf } from '@storybook/react';

//addons
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, array, object, boolean, number } from '@storybook/addon-knobs';

//component
import IronCollapse from './iron-collapse';

//stories
const stories = storiesOf('IronCollapse', module);

stories
.addDecorator(withKnobs)
.add('simple info',
    withInfo({text: 'String or React Element with docs about my component'})(() =>
      <IronCollapse>Click the "?" mark at top-right to view the info.</IronCollapse>
    )
  )
.add('default', () => (
	<IronCollapse onClick={action('clicked')}>This is collapsable content.</IronCollapse>
))

module.exports = stories;
