import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, select } from '@storybook/addon-knobs/react';
import Toggle from '.';

const sizeOptions = {
  small: 'Small',
  regular: 'Regular',
  large: 'Large',
  huge: 'Huge'
};

const stories = storiesOf('Components / Toggle', module);
stories.addDecorator(withKnobs);

stories.addWithJSX('default', () => (
  <form>
    <Toggle
      id="toggle2"
      name="used1"
      value="true"
      size={select('size', sizeOptions, 'regular')}
      disabled={boolean('disabled', false)}
      defaultChecked={boolean('checked', true)}
    />
  </form>
));
stories.addWithJSX('controlled', () => (
  <form>
    <Toggle
      id="toggle2"
      name="used1"
      value="true"
      size={select('size', sizeOptions, 'regular')}
      onChange={action('onChange')}
      disabled={boolean('disabled', false)}
      checked={boolean('checked', true)}
    />
  </form>
));
