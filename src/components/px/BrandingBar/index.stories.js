import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react';
import BrandingBar from './';
import Icon from '../IconSet/Icon';
import Button from '../Button';
import Flex from '../../../styles/flex';

const customLogo = () => (
  <Icon icon='px-nav:home'/>
);
const btnStyles = {
  color: 'white'
};
/// BrandingBar
storiesOf('Branding Bar', module)
  .addDecorator(withKnobs)
  .addWithJSX('default', () => (
    <BrandingBar 
      hideLogo={boolean('hideLogo', false)}
      hidePowered={boolean('hidePowered', false)}
      powered={text('powered', 'Powered by React')}
      responsiveWidth={text('responsiveWidth', '500px')}
      title={text('title', 'Application Title')}/>
  ))
  .addWithJSX('without logo', () => (
    <BrandingBar title='Custom Title' hideLogo/>
  ))
  
  .addWithJSX('without powered by', () => (
    <BrandingBar title='Custom Title' hidePowered/>
  ))
  .addWithJSX('with custom logo', () => (
    <BrandingBar title='Custom Logo' customLogo={customLogo} hidePowered/>
  ))
  .addWithJSX('with custom children', () => (
    <BrandingBar 
      title='Platform'
      hidePowered={true}>
      <Flex right className='app-user-menu'>
        <Button theme='bare' style={btnStyles}>
          <Icon icon='px-nav:notification'/>
        </Button>
        <Button theme='bare' style={btnStyles}>
          <Icon icon='px-nav:generic-user'/>
        </Button>
      </Flex>
    </BrandingBar>
  ))
;
