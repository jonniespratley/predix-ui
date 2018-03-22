import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, array, object, boolean, number, select } from '@storybook/addon-knobs';


import Tile from './';
const mockImage = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/49212/ge-sample-image-1-small.jpg';
const mockImage2 = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/49212/ge-sample-image-800x600.jpg';
const mockText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta sem malesuada magna mollis euismod. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Maecenas sed diam eget risus varius blandit sit amet non magna';
const mockOverlayText = 'Overlay description text : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta sem malesuada magna mollis euismod. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Maecenas sed diam eget risus varius blandit sit amet non magna';
const mockTitle = 'Main Text';
const mockSubtitle = 'Subtitle Text';
///
storiesOf('Tile', module)
  .addDecorator(withKnobs)
	.add('default', () => (
    <Tile 
      image={text('image', mockImage)}
      title={text('title', mockTitle)}
      subtitle={text('subtitle', mockSubtitle)}>
      {text('description', mockText)}
    </Tile>
	));
