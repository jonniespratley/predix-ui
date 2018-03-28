import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, array, object, boolean, number, select } from '@storybook/addon-knobs';


import Drawer from './';
import Navbar from '../Navbar';

const navItems = [
  {id : "home", label: "Home", icon: "px-fea:home", selected: true},
  {id : "settings", label: "Settings", icon: "px-fea:settings"},
  {id : "alert", label: "Alerts", icon: "px-fea:alerts"}
];
const style = {
  height: 300,
  overflow: 'hidden',
  position: 'relative'
};
storiesOf('Drawer', module)
	.addDecorator(withKnobs)
	.add('default', () => (
		<Drawer
			overlay={boolean('overlay', false)}
			onClose={action('onClose')}
			onOpen={action('onOpen')}
			onOverlayClick={action('onOverlayClick')}
			opened={boolean('opened', false)}
			docked={boolean('docked', false)}
			align={select('align', ['left', 'right'], 'left')}
			>
			<p>This is the content of the drawer</p>
		</Drawer>
	))
	.add('with layout', () => (
		<div>
  <div style={style}>
    <Navbar
      title='Navbar'
      subtitle='Subtitle'
      onMenuButtonClick={action('onMenuButtonClick')}
      showMenuButton/>

    <Drawer
			overlay={boolean('overlay', false)}
      onClose={action('onClose')}
      onOpen={action('onOpen')}
      onOverlayClick={action('onOverlayClick')}
      opened={boolean('opened', false)}
      docked={boolean('docked', false)}>
			<p>This is the content of the drawer</p>
    </Drawer>
    <div className='content u-p'>
      <p>This is content</p>
    </div>

  </div>
</div>
	));
