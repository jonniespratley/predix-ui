import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import Layout from './';
import LayoutItem from './LayoutItem';
import Card from '../Card';

storiesOf('Layout', module)
  .addDecorator(withKnobs)
  .addWithJSX('default', () => (
    <Layout>
      <LayoutItem item>
        <Card headerText="Card 1">
          This is the main context area of the card.
        </Card>
      </LayoutItem>
      <LayoutItem item>
        <Card headerText="Card 2">
          This is the main context area of the card.
        </Card>
      </LayoutItem>
      <LayoutItem item>
        <Card headerText="Card 3">
        This is the main context area of the card.
        </Card>
      </LayoutItem>
    </Layout>
  ));
