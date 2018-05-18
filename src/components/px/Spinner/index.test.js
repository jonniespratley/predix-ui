import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Spinner from './';

describe('Spinner', () => {
  test('should render', () =>{
    const tree = renderer.create(<Spinner/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('should render with value', () =>{
    const tree = renderer.create(<Spinner value={50}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
