import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react';

import withTests from '../../../../.storybook/withTests';

import Accordion from './';
import README from './README.md';

storiesOf('Components / Accordion', module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(README))
  .addDecorator(withTests('Accordion'))
  .addWithJSX('default', () => (
    <Accordion
      onCollapsed={action('onCollapsed')}
      onExpanded={action('onExpanded')}
      onActionClick={action('onActionClick')}
      showAction={boolean('showAction', true)}
      opened={boolean('opened', true)}
      disabled={boolean('disabled', false)}
      status={text('status', 'Last Updated: 3 days ago')}
      headerValue={text('headerValue', 'Header Caption')}
    >
      {text('content', 'Accordion content goes here.')}
    </Accordion>
  ))
  .addWithJSX('with group', () => (
    <div>
      <Accordion
        showAction={boolean('showAction', true)}
        opened={boolean('opened', true)}
        disabled={boolean('disabled', false)}
        status={text('status', 'Last Updated: 3 days ago')}
        headerValue={text('headerValue', 'Header Caption')}
      >
        {text('content', 'Accordion content goes here.')}
      </Accordion>
      <Accordion
        showAction={boolean('showAction', true)}
        opened={boolean('opened', true)}
        disabled={boolean('disabled', false)}
        status={text('status', 'Last Updated: 3 days ago')}
        headerValue={text('headerValue', 'Header Caption')}
      >
        {text('content', 'Accordion content goes here.')}
      </Accordion>
    </div>
  ));

