import React from 'react';
import { storiesOf } from '@storybook/react';
import AppHeader from './';
const navItems = [
  {
    "path": "/page1",
    "icon": "px-fea:analysis",
    "label": "Page 1"
  },
  {
    "path": "/page2",
    "icon": "px-fea:dashboard",
    "label": "Page 2"
  }
];
///
storiesOf('App Header', module)
	.add('default', () => (
		<AppHeader/>
	))
	.add('with title', () => (
		<AppHeader title='App Header' items={navItems}/>
	));
