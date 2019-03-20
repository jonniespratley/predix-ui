import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { withReadme } from 'storybook-readme';

import README from './README.md';
import Card from '.';

const customActions = () => (
  <div>
    <button type="button">Edit</button>
  </div>
);

storiesOf('Components / Card', module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(README))
  .addWithJSX('default', () => (
    <Card
      headerText={text('headerText', 'My Card')}
    >
      {text('content', 'This is the main context area of the card.')}
    </Card>
  ))
  .addWithJSX('with icon', () => (
    <Card
      icon={text('icon', 'px-fea:analysis')}
      headerText={text('headerText', 'My Card')}
    >
      {text('content', 'This is the main context area of the card.')}
    </Card>
  ))
  .addWithJSX('with actions', () => (
    <Card
      icon={text('icon', 'px-fea:analysis')}
      headerText={text('headerText', 'My Card')}
      actions={customActions}
    >
      {text('content', 'This is the main context area of the card.')}
    </Card>
  ));
