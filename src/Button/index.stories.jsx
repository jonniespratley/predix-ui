import React from 'react';
import { storiesOf } from '@storybook/react';

// addons
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';

// component
import Button from '.';
import Icon from '../Icon/Icon';

const buttonThemes = [
  'primary',
  'secondary',
  'tertiary',
  'call-to-action',
  'bare',
  'bare-primary',
  'info',
  'healthy',
  'warning',
  'error',
  'important'
];


const buttonSizes = [
  'small',
  'regular',
  'large',
  'huge',
  'full'
];

// stories
const stories = storiesOf('Components / Button', module);

stories
  .addDecorator(withKnobs)
  .addWithJSX('default', () => (
    <Button
      disabled={boolean('disabled', false)}
      icon={boolean('icon')}
      onClick={action('clicked')}
      theme={select('theme', buttonThemes)}
      size={select('size', buttonSizes)}
    >{text('label', 'Button')}
    </Button>
  ))
  .addWithJSX('with icon', () => (
    <Button
      onClick={action('clicked')}
      disabled={boolean('disabled', false)}
      icon={boolean('icon', false)}
      theme={select('theme', buttonThemes)}
      size={select('size', buttonSizes)}
    >
      <Icon
        icon={text('iconName', 'px-fea:home')}
        viewBox={text('viewBox', '0 0 32 32')}
        size={number('iconSize', 32)}
      />
      {text('label', 'Button')}
    </Button>
  ))
  .add('with emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="img">💯</span>
    </Button>
  ))
  .add('with theme', () => (
    <div>
      <Button onClick={action('clicked')} >Button</Button>
      <Button onClick={action('clicked')} disabled>Button (disabled)</Button>
      {buttonThemes.map(theme => (
        <Button onClick={action('clicked')} theme={theme} key={theme}>Button ({theme})</Button>
      ))}
    </div>
  ))
  .add('with sizes', () => (
    <div>
      {buttonSizes.map(size => (
        <Button onClick={action('clicked')} size={size}>Button ({size})</Button>
      ))}
    </div>
  ));
