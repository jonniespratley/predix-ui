import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import Tile from '.';

const mockImage = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/49212/ge-sample-image-1-small.jpg';
const mockText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta sem malesuada magna mollis euismod. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Maecenas sed diam eget risus varius blandit sit amet non magna';
const mockTitle = 'Main Text';
const mockSubtitle = 'Subtitle Text';
// /
storiesOf('Components / Tile', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <Tile
      image={text('image', mockImage)}
      title={text('title', mockTitle)}
      subtitle={text('subtitle', mockSubtitle)}
      description={text('description', mockText)}
    >
      {text('overlay-description', mockText)}
    </Tile>
  ));
