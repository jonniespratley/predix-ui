import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, array, object, boolean, number } from '@storybook/addon-knobs';

import px from './px';

import './px/Theme/px-theme.scss';
import ExampleComponent from './px/px-example-component';


const stories = storiesOf('px', module);
const navItems = array('navItems',[
{ "path":"tab1","icon":"px-fea:alerts","eventName":"firstItem","label":"Alerts",
"subitems":[{"label":"Sub Category 1"},
{"label":"Sub Category 2","eventName":"subitemTwo"},
{"label":"Sub Category 3","path":"subitem3"}]},
{"path":"tab2","icon":"px-fea:asset","label":"Cases",
"subitems":[{"label":"Sub Category 1"},{"label":"Sub Category 2"},{"label":"Sub Category 3"}]},{"path":"tab3","icon":"px-fea:analysis","label":"Analysis"},{"path":"tab4","icon":"px-fea:dashboard","label":"Dashboards"}]);

const {
  AlertMessage,
  AlertLabel,
  Accordion,
  AppHeader,
  AppNav,
  BrandingBar,
  Button,
  Card,
  Drawer,
  Navbar,
  ProgressBar,
  Spinner,
  Tabs,
  Tab,
  Tile
 } = px;

 // Add the `withKnobs` decorator to add knobs support to your stories.
 // You can also configure `withKnobs` as a global decorator.
 stories.addDecorator(withKnobs);
 //storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

 // Knobs for React props
 stories.add('with a button', () => (
   <button disabled={boolean('Disabled', false)} >
     {text('Label', 'Hello Button')}
   </button>
 ));

 stories.add('as dynamic variables', () => {
  const name = text('Name', 'Arunoda Susiripala');
  const age = number('Age', 89);
  const content = `I am ${name} and I'm ${age} years old.`;
  return (<div>{content}</div>);
});

///
storiesOf('Styled Component', module)
	.addDecorator(withKnobs)
	.add('default', () => (
		<ExampleComponent label='Header'>Content</ExampleComponent>
	));


///
storiesOf('App Header', module)
	.addDecorator(withKnobs)
	.add('default', () => (
		<AppHeader items={navItems}/>
	))
	.add('with title', () => (
		<AppHeader title='AppHeader' items={navItems}/>
	));

///
storiesOf('App Nav', module)
	.add('default', () => (
		<AppNav items={navItems}/>
	));

/// BrandingBar
storiesOf('Branding Bar', module)
	.add('default', () => (
		<BrandingBar application-title="Predix Design System"/>
	));
