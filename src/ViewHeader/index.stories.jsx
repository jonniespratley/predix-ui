import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';

import Button from '../Button';
import ViewHeader from '.';

storiesOf('Components / ViewHeader', module)
  .addDecorator(withKnobs)
  .addWithJSX('default', () => (
    <ViewHeader
      title={text('title', 'Current View Title')}
      subtitle={text('subtitle', 'A subtitle describing the view.')}
    />
  ))
  .addWithJSX('with actions', () => (
    <ViewHeader
      title={text('title', 'Current View Title')}
      subtitle={text('subtitle', 'A subtitle describing the view.')}
    >
      <Button onClick={action('back')}>Back</Button>
      <Button onClick={action('next')}>Next</Button>
    </ViewHeader>
  ));
