import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, number } from '@storybook/addon-knobs/react';
import { withReadme } from 'storybook-readme';
import px from './px';

// import './px/Theme/LightTheme';
// import './px/Theme/DarkTheme';

import README from '../../README.md';

storiesOf('Predix UI', module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(README))
  .add('Welcome', () => (
    <div>Welcome</div>
  ))
  .add('Style Guide', () => (
    <div>
      <Flex>
        <px.Button>Default</px.Button>
        <px.Button theme="primary">Primary</px.Button>
      </Flex>
    </div>
  ));


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

storiesOf('Examples', module)
  .addDecorator(withKnobs)
  .add('App', () => (
    <div>
      <AppNav items={navItems} onChange={action('onChange')} selected={number('selected', 1)} />
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
      <Card headerText="Buttons">
        <Flex>
          <Button>Default</Button>
          <Button theme="primary">Primary</Button>
        </Flex>
      </Card>

    </div>
  ));
