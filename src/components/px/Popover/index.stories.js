import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, array, object, boolean, number, select } from '@storybook/addon-knobs';


import Popover from './';
import PopoverBody from './PopoverBody';
import PopoverHeader from './PopoverHeader';



const PopperPlacements = [
	"auto-start",
	"auto",
	"auto-end",
	"top-start",
	"top",
	"top-end",
	"right-start",
	"right",
	"right-end",
	"bottom-end",
	"bottom",
	"bottom-start",
	"left-end",
	"left",
	"left-start"
];

class Example extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			popoverOpen: props.popoverOpen || false
		};
	}

	toggle() {
		this.setState({
			popoverOpen: !this.state.popoverOpen
		});
	}

	render() {
		const { id = "Popover1", placement = "bottom", title } = this.props;
		const exampleStyle = {
			padding: '4rem',
			display: 'flex',
			justifyContent: 'center'
		};
		return (
			<div style={exampleStyle}>
				<button id={id} onClick={this.toggle}>
					Launch Popover ({placement})
				</button>
				<Popover
					placement={placement}
					isOpen={this.state.popoverOpen}
					target={id}
					toggle={this.toggle}>
					<PopoverHeader>{title}</PopoverHeader>
					<PopoverBody>
						Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
						vestibulum.
					</PopoverBody>
				</Popover>
			</div>
		);
	}
}
storiesOf('Popover', module)
	.addDecorator(withKnobs)
	/*
	.add('default', () => (
		<Popover 
			toggle={action('toggle')}
		
			placement={select('placement', PopperPlacements, 'right')}
		>
			<PopoverHeader>{text('title', 'Popover Title')}</PopoverHeader>
			<PopoverBody>
				{text('children', 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.')}			
			</PopoverBody>
		</Popover>
	))
	*/
	.add('with example', () => (
		<Example 
			title={text('title', 'Popover Title')}
			popoverOpen={boolean('isOpen', false)}
			placement={select('placement', PopperPlacements, 'right')}/>
	));
