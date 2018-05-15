import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import ProgressBar from './';

describe('ProgressBar', () => {
  test('should render', () =>{
    const tree = renderer.create(<ProgressBar value={75}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
