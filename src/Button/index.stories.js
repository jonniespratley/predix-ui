import React from 'react';
import { storiesOf } from '@storybook/react';

//addons
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, array, object, boolean, number } from '@storybook/addon-knobs';

//component
import Button from './';

//stories
const stories = storiesOf('Button', module);

stories
.addDecorator(withKnobs)
.add('simple info',
    withInfo({text: 'String or React Element with docs about my component'})(() =>
      <Button>Click the "?" mark at top-right to view the info.</Button>
    )
  )
.add('default', () => (
	<Button onClick={action('clicked')} label='Button'/>
))
.add('with text', () => (
	<Button onClick={action('clicked')}>Hello Button</Button>
))
.add('with emoji', () => (
	<Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
))
.add('with theme', () => (
	<div>
		<Button onClick={action('clicked')} label='Button'/>
		<Button onClick={action('clicked')} label='Button' primary/>
		<Button onClick={action('clicked')} label='Button' tertiary/>
		<Button onClick={action('clicked')} label='Button' disabled/>
	</div>
));

module.exports = stories;
