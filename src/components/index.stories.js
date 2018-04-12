import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';

import px from './px';
import Flex from '../styles/flex';


import './px/Theme/LightTheme';

//import './px/Theme/px-theme.scss';

const stories = storiesOf('px', module);


const PageHeader = ({title}) => (
  <div className='page-header'>
    <h1>{title}</h1>
  </div>
);

 // Add the `withKnobs` decorator to add knobs support to your stories.
 // You can also configure `withKnobs` as a global decorator.
 stories.addDecorator(withKnobs);
  
 storiesOf('Welcome', module)
    .addDecorator(withKnobs)
    .add('to Storybook', () => (
      <div>Welcome</div>
    ))
    .add('Style Guide', () => (
      <div>
      
      <PageHeader title='Navbar'/>
      
      <PageHeader title='Buttons'/>
      <Flex>
        <px.Button>Default</px.Button>
        <px.Button theme='primary'>Primary</px.Button>
      </Flex>
      
      
      </div>
    ))
    ;

 /* Knobs for React props
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
*/
