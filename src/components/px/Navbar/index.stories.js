import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Navbar from './';

// Navbar
storiesOf('Navbar', module)
  .add('default', () => (
    <Navbar
      title="Navbar"
    />
  ))
  .add('with subtitle', () => (
    <Navbar
      title="Navbar"
      subtitle="Some View Name"
    />
  ))
  .add('with back button', () => (
    <Navbar
      title="Navbar"
      onBackButtonClick={action('clicked')}
      backButtonLabel="< Back"
      showBackButton
    />
  ))
  .add('with menu button', () => (
    <Navbar
      title="Navbar"
      onMenuButtonClick={action('clicked')}
      showMenuButton
    />
  ));
