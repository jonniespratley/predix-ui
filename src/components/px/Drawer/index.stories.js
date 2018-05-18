import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';

import Drawer from './';
import Navbar from '../Navbar';
import Button from '../Button';

const style = {
  height: 300,
  overflow: 'hidden',
  position: 'relative'
};

const anchorOptions = [
  'top',
  'bottom',
  'left',
  'right'
];


class ExampleLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: false
    };
  }
  toggleLayout = () => {
    this.setState({ opened: !this.state.opened });
  }
  render() {
    const { opened } = this.state;
    return (
      <div>
        <div style={style}>
          <Navbar
            title="Navbar"
            subtitle="Subtitle"
            onMenuButtonClick={this.toggleLayout}
            showMenuButton
          />

          <Drawer
            overlay={boolean('overlay', true)}
            onOpen={action('onOpen')}
            onOverlayClick={this.toggleLayout}
            opened={opened}
            anchor={select('anchor', anchorOptions, 'left')}
          >
            <p>This is the content of the drawer</p>
          </Drawer>
          <div className="content u-p">
            <br />
            <br />
            <br />
            <p>This is content</p>
            <p>
              A simple controlled Drawer.
              The Drawer is docked by default, remaining open unless closed through the open prop.
            </p>
            <Button onClick={this.toggleLayout}>Toggle Drawer</Button>
          </div>
        </div>
      </div>
    );
  }
}


storiesOf('Components / Drawer', module)
  .addDecorator(withKnobs)
  .addWithJSX('default', () => (
    <div>
      <Drawer
        overlay={boolean('overlay', false)}
        onClose={action('onClose')}
        onOpen={action('onOpen')}
        onOverlayClick={action('onOverlayClick')}
        opened={boolean('opened', false)}
        docked={boolean('docked', false)}
        anchor={select('anchor', anchorOptions, 'left')}
      >
        <p>This is the content of the drawer</p>
      </Drawer>
    </div>
  ))
  .addWithJSX('with layout', () => (
    <ExampleLayout />
  ));
