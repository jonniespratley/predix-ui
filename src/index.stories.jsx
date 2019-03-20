import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, number } from '@storybook/addon-knobs/react';
import { withReadme } from 'storybook-readme';


import {
  Button,
  AlertLabel,
  LightTheme,
  AppNav,
  Card,
  Flex,
  Notification,
  AppHeader,
  GlobalStyles,
  Tabs,
  Tab,
  KeyValuePair
} from '.';

import README from '../README.md';
import { ThemeProvider } from './styled';
import Box from './Box/Box';
import Base from './Box/Base';
import colors from './styles/colors';

const labelTypes = [
  'healthy',
  'important',
  'warning',
  'error',
  'info',
  'success',
  'unknown'
];

storiesOf('Predix UI', module)
  .addDecorator(story => (
    <div>

      {story()}
    </div>
  ))
  .addDecorator(withKnobs)
  .addDecorator(withReadme(README))
  .add('Welcome', () => (
    <div>Welcome</div>
  ))
  .add('Style Guide', () => (
    <div>
      <LightTheme />
      <h2>Alert Labels</h2>
      <Flex spaced>
        {labelTypes.map(type => <AlertLabel type={type}>{type}</AlertLabel>)}
      </Flex>
      <h2>Alert Pills</h2>
      <Flex spaced>
        {labelTypes.map(type => <AlertLabel type={type} pill>{type}</AlertLabel>)}
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


function Page1Example() {
  return (
    <ThemeProvider theme={{}}>
      <div>
        <LightTheme />
        <AppHeader title="Application Name" items={navItems} onChange={action('onChange')} selected={number('selected', 0)} />
        <Box style={{ padding: 20, backgroundColor: colors.gray1 }}>
          <h2 style={{ padding: '5px 0', margin: 0 }}>Title of Page</h2>
          <br />
          <Flex justify wrap>
            <KeyValuePair label="Label" value="Value" />
            <KeyValuePair label="Label" value="Value" />
            <KeyValuePair label="Label" value="Value" />
            <KeyValuePair label="Label" value="Value" />
            <KeyValuePair label="Label" value="Value" />
          </Flex>
          <br />
          <Flex justify wrap>
            <KeyValuePair label="Label" value="Value" />
            <KeyValuePair label="Label" value="Value" />
            <KeyValuePair label="Label" value="Value" />
            <KeyValuePair label="Label" value="Value" />
            <KeyValuePair label="Label" value="Value" />
          </Flex>
        </Box>
        <br />
        <Card headerText="List" icon="px-fea:asset">
          Content
        </Card>
        <br />
        <Card headerText="Asset Status" icon="px-obj:fleet">
          Content
        </Card>
      </div>
    </ThemeProvider>
  );
}


storiesOf('Examples', module)
  .addDecorator(withKnobs)
  .add('Page Example 1', () => (<Page1Example />))
  .add('App', () => (
    <div>
      <AppNav title="Predix Application" items={navItems} onChange={action('onChange')} selected={number('selected', 1)} />
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
