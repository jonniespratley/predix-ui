import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react';
import { withReadme } from 'storybook-readme';

import BrandingBar from '.';
import Icon from '../Icon/Icon';
import Button from '../Button';
import Flex from '../styles/flex';
import README from './README.md';

const customLogo = () => (
  <Icon icon="px-nav:home" />
);
const btnStyles = {
  color: 'white'
};
// / BrandingBar
storiesOf('Components / Branding Bar', module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(README))
  .addWithJSX('default', () => (
    <BrandingBar
      hideLogo={boolean('hideLogo', false)}
      hidePowered={boolean('hidePowered', false)}
      powered={text('powered', 'Powered by React')}
      responsiveWidth={text('responsiveWidth', '500px')}
      title={text('title', 'Application Title')}
    />
  ))
  .addWithJSX('without logo', () => (
    <BrandingBar title="Custom Title" hideLogo />
  ))

  .addWithJSX('without powered by', () => (
    <BrandingBar title="Custom Title" hidePowered />
  ))
  .addWithJSX('with custom logo', () => (
    <BrandingBar title="Custom Logo" customLogo={customLogo} hidePowered />
  ))
  .addWithJSX('with custom children', () => (
    <BrandingBar
      title="Platform"
      hidePowered
    >
      <Flex right className="app-user-menu">
        <Button theme="bare" style={btnStyles}>
          <Icon icon="px-nav:notification" />
        </Button>
        <Button theme="bare" style={btnStyles}>
          <Icon icon="px-nav:generic-user" />
        </Button>
      </Flex>
    </BrandingBar>
  ));

