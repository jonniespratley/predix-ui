import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import ContextBrowser from './';

describe('ContextBrowser', () => {
  test('should render', () =>{
    const tree = renderer.create(<ContextBrowser />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
