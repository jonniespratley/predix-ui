import React from 'react';
import { storiesOf } from '@storybook/react';
import Tile from './';

///
storiesOf('Tile', module)
	.add('default', () => (
    <Tile image='https://www.predix-ui.com/bower_components/Tile/turbine.jpg'>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta sem malesuada magna mollis euismod. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Maecenas sed diam eget risus varius blandit sit amet non magna</p>
    </Tile>
	));
