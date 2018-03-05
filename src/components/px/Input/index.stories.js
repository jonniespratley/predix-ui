import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react';
import Input from './';

import Button from '../Button';
import Textarea from './Textarea';
import Select from './Select';
import Label from './Label';
import FormField from './FormField';

const stories = storiesOf('Input', module);
stories.addDecorator(withKnobs);


stories.add('default', () => (
	<form>
		<Input 
			type={text('type', 'text')}
			placeholder={text('placeholder', 'Type text here...')}/>
	</form>
))
.add('with FormField', () => (
	<form>
		<FormField label={text('label1', 'Username')} htmlFor='username'>
			<Input 
				id='username'
				type='email'
				placeholder='Enter username'/>
		</FormField>
		<FormField label={text('label2', 'Password')} htmlFor='password'>
			<Input 
				id='password'
				type='password'
				placeholder='Enter password'/>
		</FormField>
		<Button type='submit'>Submit</Button>
	</form>
));
