import renderer from 'react-test-renderer';
import React from 'react';
import { shallow } from 'enzyme';

import PxBreadcrumbs from './';

const selectedRoute = ['North America', 'United States of America', 'California', 'San Ramon'];

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

describe('px-breadcrumbs', () => {
  test('should render', () =>{
    const wrapper = shallow(<PxBreadcrumbs/>);
    console.log(wrapper.debug());
  });

  test('renders correctly', () => {
    const tree = renderer.create(<PxBreadcrumbs items={items} selectedRoute={selectedRoute} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  //expect(wrapper.find('.label')).to.have.length(1);
  //expect(wrapper.find('.delta')).to.have.length(1);
  //expect(wrapper.find('.alpha')).to.have.length(1);
  //expect(wrapper.contains(<div className='label'/>)).to.equal(true);
});
