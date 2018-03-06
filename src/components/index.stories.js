import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';

import px from './px';

import './px/Theme/DarkTheme';

//import './px/Theme/px-theme.scss';

const stories = storiesOf('px', module);

 // Add the `withKnobs` decorator to add knobs support to your stories.
 // You can also configure `withKnobs` as a global decorator.
 stories.addDecorator(withKnobs);
 //storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

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
