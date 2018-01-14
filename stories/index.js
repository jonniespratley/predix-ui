import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, array, object, boolean, number } from '@storybook/addon-knobs';

import '../src/Theme/px-theme.scss';

import px from '../src/';

const stories = storiesOf('px', module);
const navItems = array('navItems',[
{ "path":"tab1","icon":"px-fea:alerts","eventName":"firstItem","label":"Alerts","subitems":[{"label":"Sub Category 1"},{"label":"Sub Category 2","eventName":"subitemTwo"},{"label":"Sub Category 3","path":"subitem3"}]},{"path":"tab2","icon":"px-fea:asset","label":"Cases","subitems":[{"label":"Sub Category 1"},{"label":"Sub Category 2"},{"label":"Sub Category 3"}]},{"path":"tab3","icon":"px-fea:analysis","label":"Analysis"},{"path":"tab4","icon":"px-fea:dashboard","label":"Dashboards"}]);

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

import ExampleComponent from '../src/px-example-component';

///
storiesOf('Styled Component', module)
	.addDecorator(withKnobs)
	.add('default', () => (
		<ExampleComponent label='Header'>Content</ExampleComponent>
	));

///
storiesOf('Accordion', module)
	.addDecorator(withKnobs)
	.add('default', () => (
		<Accordion headerValue='Accordion Header'>Accordion Content</Accordion>
	));



///
storiesOf('Alert Label', module)
	.addDecorator(withKnobs)
	.add('default', () => (
    <AlertLabel label= {text('label', 'Alert Label')} type='info'/>
	));


///
storiesOf('AppHeader', module)
	.addDecorator(withKnobs)
	.add('default', () => (
		<AppHeader items={navItems}/>
	))
	.add('with title', () => (
		<AppHeader title='AppHeader' items={navItems}/>
	));


///
storiesOf('AppNav', module)
	.add('default', () => (
		<AppNav items={navItems}/>
	));


///



/// BrandingBar
storiesOf('BrandingBar', module)
	.add('default', () => (
		<BrandingBar application-title="Predix Design System"/>
	));


//  Card
storiesOf('Card', module)
	.add('with header', () => (
		<Card headerText='Card Header'>Card Content</Card>
	));


// Navbar
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


///
storiesOf('ProgressBar', module)
	.add('default', () => (
		<ProgressBar value={75}/>
	))
	.add('with infinite', () => (
		<ProgressBar value={75} infinite/>
	))
  ;


// Spinner
storiesOf('Spinner', module)
	.add('default', () => (
		<Spinner/>
	))
  ;



/// Tabs
storiesOf('Tabs', module)
	.add('default', () => (
    <Tabs>
      <Tab label="Tab 1" url='/tab1'>
        <div>
          <p>This is the tab 1 content. </p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
      </Tab>
      <Tab label="Tab 2" url='/tab2'>
        <div>
          <p>This is the tab 2 content. </p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
      </Tab>
      <Tab label="Tab 3" url='/tab3'>
        <div>
          <p>This is the tab 3 content. </p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
      </Tab>
    </Tabs>
	))
  ;


///
storiesOf('Tile', module)
	.add('default', () => (
    <Tile image='https://www.predix-ui.com/bower_components/Tile/turbine.jpg'>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta sem malesuada magna mollis euismod. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Maecenas sed diam eget risus varius blandit sit amet non magna</p>
    </Tile>
	))
  ;
