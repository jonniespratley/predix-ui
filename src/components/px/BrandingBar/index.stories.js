import React from 'react';
import { storiesOf } from '@storybook/react';
import BrandingBar from './';

/// BrandingBar
storiesOf('Branding Bar', module)
  .add('default', () => (
    <BrandingBar/>
  ))
  .add('with title', () => (
    <BrandingBar title='Custom Title'/>
  ))
  .add('without logo', () => (
    <BrandingBar title='Custom Title' noLogo/>
  ))
  .add('without powered by', () => (
    <BrandingBar title='Custom Title' noPowered/>

  ))
;
