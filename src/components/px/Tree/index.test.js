import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import PxTree from './';

let data = [{
  id: 1,
  label: "All Categories",
  children: [
    {
      id: 2,
      label: "For Sale",
      children: [
        {
          id: '2-1',
          label: "Category 1"
        },
        {
          id: '2-2',
          label: "Category 2"
        },
        {
          id: '2-3',
          label: "Category 3"
        }
      ]
    }, {
      id: 6,
      label: "Motors",
      children: [
        {
          id: 7,
          label: "Car Parts & Accessories",
          children: [
            {
              id: '7-1',
              label: "Category 1"
            },
            {
              id: '7-2',
              label: "Category 2"
            },
            {
              id: '7-3',
              label: "Category 3"
            }
          ]
        },
        {
          id: 8,
          label: "Cars"
        },
        {
          id: 13,
          label: "Motorbike Parts & Accessories"
        }
      ]
    }, {
      id: 9,
      label: "Jobs",
      children: [
        {
          id: 10,
          label: "Accountancy"
        }, {
          id: 11,
          label: "Financial Services & Insurance"
        }, {
          id: 12,
          label: "Bar Staff & Management"
        }
      ]
    }
  ]
}];



describe('Tree', () => {
  test('should render', () => {
    const wrapper = shallow(<PxTree items={data}/>);
    console.log(wrapper.debug());
  //  expect(true).toEqual(true);
  });

  test('matches snapshot', () => {
    const tree = renderer.create(
      <PxTree items={data}/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

});
