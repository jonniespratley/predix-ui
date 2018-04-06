import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, array, object, boolean, number, select } from '@storybook/addon-knobs';


import Breadcrumbs from './';
const selectedRoute = ["North America", "United States of America", "California", "San Ramon"];
const items = [{
  "label": "North America",
  "id": "North America",
  "children": [{
      "label": "United States of America",
      "id": "United States of America",
      "isSelectable": false,
      "children": [{
          "label": "California",
          "id": "California",
          "children": [{
              "label": "Alameda",
              "id": "Alameda"
          }, {
              "label": "Albany",
              "id": "Albany"
          }, {
              "label": "Alhambra",
              "id": "Alhambra"
          }, {
              "label": "Brentwood",
              "id": "Brentwood"
          }, {
              "label": "Burlingame",
              "id": "Burlingame"
          }, {
              "label": "Calistoga",
              "id": "Calistoga"
          }, {
              "label": "Concord",
              "id": "Concord"
          }, {
              "label": "Danville",
              "id": "Danville"
          }, {
              "label": "Emeryville",
              "id": "Emeryville"
          }, {
              "label": "Fresno",
              "id": "Fresno"
          }, {
              "label": "Gilroy",
              "id": "Gilroy"
          }, {
              "label": "Hayward",
              "id": "Hayward"
          }, {
              "label": "Oakland",
              "id": "Oakland"
          }, {
              "label": "San Francisco",
              "id": "San Francisco"
          }, {
              "label": "San Ramon",
              "id": "San Ramon",
              "children": [{
                  "label": "Crow Canyon Gardens",
                  "id": "Crow Canyon Gardens"
              }, {
                  "label": "Old Ranch Park",
                  "id": "Old Ranch Park"
              }, {
                  "label": "Valley View Park",
                  "id": "Valley View Park"
              }],
              "highlighted": false
          }],
          "highlighted": false
      }, {
          "label": "Colorado",
          "id": "Colorado",
          "isSelectable": false
      }, {
          "label": "Delaware",
          "id": "Delaware"
      }, {
          "label": "Florida",
          "id": "Florida"
      }],
      "highlighted": false
  }],
  "highlighted": false
}, {
  "label": "South America",
  "id": "South America"
}];
storiesOf('Breadcrumbs', module)
	.addDecorator(withKnobs)
	.add('default', () => (
		<Breadcrumbs 
            clickOnlyMode={boolean('clickOnlyMode', false)}
            selectedRoute={array('selectedRoute', selectedRoute)}
            items={items}/>
	));
