import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import TableView from '.';
import TableRow from './TableRow';

function makeRows(count = 5, obj) {
  const items = [];
  for (let i = 1; i <= count; i++)/* eslint-disable-line */ {
    items.push(Object.assign({
      id: i
    }, obj, {
      title: obj ? `${obj.title} ${i}` : `Item ${i}`
    }));
  }
  return items;
}

describe('TableView', () => {
  test('should render', () =>{
    const tree = renderer.create(<TableView/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('should render with "large" rows', () =>{
    const tree = renderer.create(<TableView items={makeRows(5)} size='large'/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('TableRow', () => {
    test('should render', () =>{
      const tree = renderer.create(
        <TableRow
          title='Row Label'
          body='This is the body'
          icon='px-nav:home'/>
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
