import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, number } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';
import Tabs from '.';
import Tab from './Tab';

// / Tabs
storiesOf('Components / Tabs', module)
  .addDecorator(withKnobs)
  .addWithJSX('default', () => (
    <Tabs selected={number('selected', 0)} onChange={action('onChange')}>
      <Tab label="Tab 1">
        <div>
          <p>This is the tab 1 content. </p>
          <p>Lorem ipsum dolor sit amet, dolore eu fugiat nulla pariatur.</p>
        </div>
      </Tab>
      <Tab label="Tab 2">
        <div>
          <p>This is the tab 2 content. </p>
          <p>Lorem ipsum dolor sit amet, dolore eu fugiat nulla pariatur.</p>
        </div>
      </Tab>
      <Tab label="Tab 3">
        <div>
          <p>This is the tab 3 content. </p>
          <p>Lorem ipsum dolor sit amet, dolore eu fugiat nulla pariatur.</p>
        </div>
      </Tab>
      <Tab label="Tab 4">
        <div>
          <p>This is the tab 4 content. </p>
          <p>Lorem ipsum dolor sit amet, dolore eu fugiat nulla pariatur.</p>
        </div>
      </Tab>
      <Tab label="Tab 5">
        <div>
          <p>This is the tab 5 content. </p>
        </div>
      </Tab>
    </Tabs>
  ))
  .addWithJSX('with propForSelect', () => (
    <Tabs selected={text('selected', 'tab2')} propForSelect="id" onChange={action('onChange')}>
      <Tab label="Tab 1" id="tab1">
        <div>
          <p>This is the tab 1 content. </p>
        </div>
      </Tab>
      <Tab label="Tab 2" id="tab2">
        <div>
          <p>This is the tab 2 content. </p>
        </div>
      </Tab>
      <Tab label="Tab 3" id="tab3">
        <div>
          <p>This is the tab 3 content. </p>
        </div>
      </Tab>
    </Tabs>
  ));

