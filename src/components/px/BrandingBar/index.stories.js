import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react';
import BrandingBar from './';
import Icon from '../IconSet/Icon';
import Button from '../Button';
import Flex from '../../../styles/flex';

const btnStyles = {
  color: 'white'
};
/// BrandingBar
storiesOf('Branding Bar', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <BrandingBar 
      hideLogo={boolean('hideLogo', false)}
      hidePowered={boolean('hidePowered', false)}
      powered={text('powered', 'Powered by React')}
      responsiveWidth={text('responsiveWidth', '500px')}
      title={text('title', 'Application Title')}/>
  ))
  .add('without logo', () => (
    <BrandingBar title='Custom Title' noLogo/>
  ))
  .add('without powered by', () => (
    <BrandingBar title='Custom Title' noPowered/>
  ))
  .add('with custom children', () => (
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
