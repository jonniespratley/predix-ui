import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';

import Panel from '.';
import Card from '../Card';

const demoStyles = {
  position: 'relative',
  overflow: 'hidden',
  minHeight: '400px',
  width: '100%',
  boxSizing: 'border-box',
  border: '1px solid gray',
  padding: '1rem'
};

const positions = [
  'top',
  'right',
  'left',
  'bottom'
];

const bgColors = [
  'light',
  'medium',
  'dark'
];

const actions = () => (<div>Expand</div>);

storiesOf('Components / Panel', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <div style={demoStyles}>
      <p>Use the toggles in properties to invoke the panel.</p>
      <Panel
        position={select('position', positions, 'right')}
        background={select('background', bgColors, 'light')}
        fullSize={boolean('fullSize', false)}
        minimizable={boolean('minimizable', false)}
        floating={boolean('floating', false)}
        fixed={boolean('fixed', false)}
        persistent={boolean('persistent', false)}
        opened={boolean('opened', true)}
      >

        <p>This can be any type of content.</p>
        <p>A form or a map</p>

      </Panel>
    </div>

  ))
  .add('with multiple', () => (
    <div style={demoStyles}>
      <p>Here is multiple panels</p>
      <Panel
        id="p1"
        opened={boolean('p1Opened', true)}
        fullSize={boolean('p1FullSize', false)}
        persistent
      >
        <Card headerText="Main Card">This is p1 content</Card>
      </Panel>
      <Panel
        id="p2"
        persistent
        fullSize={boolean('p2FullSize', false)}
        opened={boolean('p2Opened', true)}
        background="medium"
      >
        <Card headerText="Secondary Card">This is p2 content</Card>
      </Panel>
      <Panel
        id="p3"
        persistent
        fullSize={boolean('p3FullSize', false)}
        opened={boolean('p3Opened', false)}
        background="dark"
      >
        <Card headerText="Action Card" actions={actions}>This is p3 content</Card>
      </Panel>
    </div>
  ));

