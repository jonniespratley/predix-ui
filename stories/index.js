import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import '../src/theme/px-theme.scss';
import px from '../src/';

const navItems = [
{ "path":"tab1","icon":"px-fea:alerts","eventName":"firstItem","label":"Alerts","subitems":[{"label":"Sub Category 1"},{"label":"Sub Category 2","eventName":"subitemTwo"},{"label":"Sub Category 3","path":"subitem3"}]},{"path":"tab2","icon":"px-fea:asset","label":"Cases","subitems":[{"label":"Sub Category 1"},{"label":"Sub Category 2"},{"label":"Sub Category 3"}]},{"path":"tab3","icon":"px-fea:analysis","label":"Analysis"},{"path":"tab4","icon":"px-fea:dashboard","label":"Dashboards"}];

const { Accordion, AppHeader, AppNav, BrandingBar, Button, Card, Drawer, Navbar } = px;

storiesOf('Accordion', module)
	.add('default', () => (
		<Accordion headerValue='Accordion Header'>Accordion Content</Accordion>
	));

storiesOf('AppHeader', module)
	.add('default', () => (
		<AppHeader/>
	))
	.add('with title', () => (
		<AppHeader title='AppHeader'/>
	));

storiesOf('AppNav', module)
	.add('default', () => (
		<AppNav items={navItems}/>
	));


storiesOf('Button', module)
	.add('default', () => (
		<Button onClick={action('clicked')} label='Button'/>
	))
	.add('primary', () => (
		<Button onClick={action('clicked')} label='Button' primary/>
	))
	.add('with text', () => (
		<Button onClick={action('clicked')}>Hello Button</Button>
	))
	.add('with some emoji', () => (
		<Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
	));

storiesOf('Card', module)
	.add('with header', () => (
		<Card headerText='Card Header'>Card Content</Card>
	));

storiesOf('Navbar', module)
	.add('default', () => (
		<Navbar
		  title='Navbar'/>
	))
	.add('with subtitle', () => (
		<Navbar
		  title='Navbar' subtitle='Some View Name'/>
	))
	.add('with back button', () => (
		<Navbar
		  title='Navbar'
			onBackButtonClick={action('clicked')}
			backButtonLabel='< Back'
		  showBackButton/>
	))
	.add('with menu button', () => (
		<Navbar
		  title='Navbar'
			onMenuButtonClick={action('clicked')}
		  showMenuButton/>
	))
	;
