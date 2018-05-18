import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';

import Popover from './';
import PopoverBody from './PopoverBody';
import PopoverHeader from './PopoverHeader';

const PopperPlacements = [
  'auto-start',
  'auto',
  'auto-end',
  'top-start',
  'top',
  'top-end',
  'right-start',
  'right',
  'right-end',
  'bottom-end',
  'bottom',
  'bottom-start',
  'left-end',
  'left',
  'left-start'
];
/* eslint-disable */
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
    const { id = 'Popover1', placement = 'bottom', title } = this.props;
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
          toggle={this.toggle}
        >
          <PopoverHeader>{title}</PopoverHeader>
          <PopoverBody>
            Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
          </PopoverBody>
        </Popover>
      </div>
    );
  }
}
/* eslint-enable */
storiesOf('Components / Popover', module)
  .addDecorator(withKnobs)
  .addWithJSX('with example', () => (
    <Example
      title={text('title', 'Popover Title')}
      popoverOpen={boolean('isOpen', false)}
      placement={select('placement', PopperPlacements, 'right')}
    />
  ));
