import React from 'react';
import { storiesOf } from '@storybook/react';

// addons
import { action } from '@storybook/addon-actions';
import { withReadme } from 'storybook-readme';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';
import withTests from '../../../../.storybook/withTests';

// component
import Button from './';
import README from './README.md';
import Icon from '../IconSet/Icon';

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
  .addDecorator(withReadme(README))
  .addDecorator(withTests('Button'))
  .addWithJSX('default', () => (
    <Button
      disabled={boolean('disabled', false)}
      icon={boolean('icon', false)}
      onClick={action('onClick')}
      theme={select('theme', buttonThemes)}
      size={select('size', buttonSizes)}
    >{text('label', 'Button')}
    </Button>
  ))
  .addWithJSX('with icon', () => (
    <Button
      onClick={action('onClick')}
      disabled={boolean('disabled', false)}
      icon={boolean('icon', true)}
      theme={select('theme', buttonThemes, 'call-to-action')}
      size={select('size', buttonSizes)}
    >
      <Icon
        icon={text('iconName', 'px-fea:home')}
        viewBox={text('viewBox', null)}
        size={number('iconSize', null)}
      />
      {text('label', null)}
    </Button>
  ))
  .add('with emoji', () => (
    <Button onClick={action('onClick')}>
      <span role="img" aria-label="img">💯</span>
    </Button>
  ))
  .add('with theme', () => (
    <div>
      <Button onClick={action('onClick')} >Button</Button>
      <Button onClick={action('onClick')} disabled>Button (disabled)</Button>
      {buttonThemes.map(theme => (
        <Button onClick={action('onClick')} theme={theme} key={theme}>Button ({theme})</Button>
      ))}
    </div>
  ))
  .add('with sizes', () => (
    <div>
      {buttonSizes.map(size => (
        <Button onClick={action('onClick')} size={size}>Button ({size})</Button>
      ))}
    </div>
  ));
