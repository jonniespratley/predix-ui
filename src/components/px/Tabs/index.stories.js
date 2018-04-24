import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { withKnobs, text, number, select } from '@storybook/addon-knobs/react';
import JSXAddon from 'storybook-addon-jsx';
import Tabs from './';
import Tab from './Tab';
import { action } from '@storybook/addon-actions';


// / Tabs
storiesOf('Tabs', module)
  .addDecorator(withKnobs)
  .addWithJSX('default', () => (
    <Tabs selected={number('selected', 0)} onChange={action('onChange')}>
      <Tab label="Tab 1">
        <div>
          <p>This is the tab 1 content. </p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
      </Tab>
      <Tab label="Tab 2">
        <div>
          <p>This is the tab 2 content. </p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
      </Tab>
      <Tab label="Tab 3">
        <div>
          <p>This is the tab 3 content. </p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
      </Tab>
      <Tab label="Tab 4">
        <div>
          <p>This is the tab 4 content. </p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
      </Tab>
      <Tab label="Tab 5">
        <div>
          <p>This is the tab 5 content. </p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
      </Tab>
    </Tabs>
  ))
  .addWithJSX('with propForSelect', () => (
    <Tabs selected={text('selected', 'tab2')} propForSelect="id" onChange={action('onChange')}>
      <Tab label="Tab 1" id="tab1">
        <div>
          <p>This is the tab 1 content. </p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
      </Tab>
      <Tab label="Tab 2" id="tab2">
        <div>
          <p>This is the tab 2 content. </p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
      </Tab>
      <Tab label="Tab 3" id="tab3">
        <div>
          <p>This is the tab 3 content. </p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
      </Tab>
    </Tabs>
  ));

