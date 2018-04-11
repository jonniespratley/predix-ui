import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs/react';
import Input from './';

import Button from '../Button';
import Textarea from './Textarea';
import Select from './Select';
import Label from './Label';
import FormField from './FormField';

const stories = storiesOf('Input', module);
stories.addDecorator(withKnobs);

const sizes = ['tiny', 'small', 'regular', 'large', 'huge'];
const types = [
	'color',
	'date',
	'datetime-local',
	'email',
	'file',
	'month',
	'number',
	'password',
	'search',
	'tel',
	'text',
	'time',
	'url',
	'week'
];
stories
.addWithJSX('default', () => (
	<form>
		<Input 
			type={select('type', types)}
			size={select('size', sizes)}
			placeholder={text('placeholder', 'Type text here...')}/>
	</form>
))
.addWithJSX('sizes', () => (
	<form>
		<FormField>
			<Input name='input1' tiny placeholder='Tiny size'/>
		</FormField>
		<FormField>
			<Input name='input2' small placeholder='Small size'/>
		</FormField>
		<FormField>
			<Input name='input3' regular placeholder='Regular size'/>
		</FormField>
		<FormField>
			<Input name='input4' large placeholder='Large size'/>
		</FormField>
		<FormField>
			<Input name='input5' huge placeholder='Huge size'/>
		</FormField>
		<FormField>
			<Input name='input6' placeholder='Auto size'/>
		</FormField>
	</form>
))
.addWithJSX('with inline fields', () => (
	<form>
		<Label for='inline1' inline>From</Label>
		<Input id='inline1' tiny/>
		<Label for='inline2' inline>To</Label>
		<Input id='inline2' tiny/>
	</form>
))
.addWithJSX('with Textarea', () => (
	<form>
		<Textarea placeholder={text('placeholder', 'Type text here...')}></Textarea>
	</form>
))
.addWithJSX('with Checkbox', () => (
	<form>
		<Input id='checkbox1' type='checkbox'/>
		<Label for='checkbox1' inline>Option 1</Label>
		<br/>
		<Input id='checkbox2' type='checkbox'/>
		<Label for='checkbox2' inline>Option 2</Label>
	</form>
))
.addWithJSX('with Radio button', () => (
	<form>
		<Input id='radio1' name='radio-group' type='radio'/>
		<Label for='radio1' inline>Option 1</Label>
		<br/>
		<Input id='radio2' name='radio-group' type='radio'/>
		<Label for='radio2' inline>Option 2</Label>
	</form>
))
.addWithJSX('with Select', () => (
	<form>
		<Select>
			<optgroup label="Header 1" >
				<option >Option 1</option>
				<option >Option 2</option>
				<option >Option 3</option>
				<option >Option 4</option>
			</optgroup>
			<optgroup label="Header 2" >
				<option >Option 1</option>
				<option >Option 2</option>
				<option >Option 3</option>
				<option >Option 4</option>
			</optgroup>
		</Select>
	</form>
))
.addWithJSX('with Select multiple', () => (
	<form>
		<Select multiple>
			<option >Option 1</option>
			<option >Option 2</option>
			<option >Option 3</option>
			<option >Option 4</option>
		</Select>
	</form>
))

.addWithJSX('with FormField', () => (
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
