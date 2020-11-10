import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import Navbar from '.';

// Navbar
storiesOf('Components / Navbar', module)
  .addDecorator(withKnobs)
  .addWithJSX('default', () => (
    <Navbar
      backButtonLabel={text('backButtonLabel', 'Back')}
      title={text('title', 'Navbar Title')}
      subtitle={text('subtitle', 'Some Sub Title')}
      showBackButton={boolean('showBackButton', false)}
      showMenuButton={boolean('showMenuButton', false)}
      onTitleClick={action('onTitleClick')}
      onBackButtonClick={action('onBackButtonClick')}
      onMenuButtonClick={action('onMenuButtonClick')}
      onLeftIconButtonClick={action('onLeftIconButtonClick')}
      onRightIconButtonClick={action('onRightIconButtonClick')}
    />
  ))
  .addWithJSX('with subtitle', () => (
    <Navbar
      title="Navbar"
      subtitle="Some View Name"
    />
  ))
  .addWithJSX('with back button', () => (
    <Navbar
      title="Navbar"
      onBackButtonClick={action('clicked')}
      backButtonLabel="< Back"
      showBackButton
    />
  ))
  .addWithJSX('with menu button', () => (
    <Navbar
      title="Navbar"
      onMenuButtonClick={action('clicked')}
      showMenuButton
    />
  ));
