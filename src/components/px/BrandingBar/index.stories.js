import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react';
import BrandingBar from './';

/// BrandingBar
storiesOf('Branding Bar', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <BrandingBar 
      hideLogo={boolean('hideLogo', false)}
      hidePowered={boolean('hidePowered', false)}
      powered={text('powered', 'Powered by React')}
      title={text('title', 'Application Title')}/>
  ))
  .add('without logo', () => (
    <BrandingBar title='Custom Title' noLogo/>
  ))
  .add('without powered by', () => (
    <BrandingBar title='Custom Title' noPowered/>

  ))
;
