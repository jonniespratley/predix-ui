import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { withReadme } from 'storybook-readme';
// import './px/Theme/LightTheme';
// import './px/Theme/DarkTheme';
import README from '../../README.md';
import px from './px';

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

const navItems = [
  {
    id: 'home', path: '/', label: 'Home', icon: 'px-fea:home'
  },
  {
    id: 'dashboard', path: '/dashboard', label: 'Dashboard', icon: 'px-fea:dashboard'
  },
  {
    id: 'about', path: '/about', label: 'About', icon: 'px-fea:catalog'
  },
  {
    id: 'topics', path: '/topics', label: 'Topics', icon: 'px-fea:log'
  },
  {
    id: 'users', path: '/users', label: 'Users', icon: 'px-fea:users'
  }
];

const {
  AppNav,
  Button,
  Card,
  Flex,
  Notification
} = px;

storiesOf('Predix UI', module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(README))
  .add('Welcome', () => (
    <div>Welcome</div>
  ))
  .add('Style Guide', () => (
    <div>
      <div>
        <h2>Buttons</h2>
        {buttonThemes.map(theme => (
          <Button onClick={action('onClick')} theme={theme} key={theme}>Button ({theme})</Button>
        ))}
      </div>
    </div>
  ));


storiesOf('Examples', module)
  .addDecorator(withKnobs)
  .add('App', () => (
    <div>
      <AppNav items={navItems} onChange={action('onChange')} />
      <br />
      <Notification
        type="info"
        statusIcon="px-utl:clock"
        opened
      >
        Welcome back
      </Notification>
      <br />
      <Card headerText="My Card">
        This is the main content area.
      </Card>
      <br />
      <Card headerText="Buttons">
        <Flex>
          <Button>Default</Button>
          <Button theme="primary">Primary</Button>
        </Flex>
      </Card>

    </div>
  ));
