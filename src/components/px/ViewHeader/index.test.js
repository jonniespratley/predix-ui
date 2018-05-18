import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import ViewHeader from './';

describe('ViewHeader', () => {
  test('should render', () =>{
    const tree = renderer.create(<ViewHeader title="View Title" subtitle="Subtitle"/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  
  test('should render with children on left/right', () =>{
    const tree = renderer.create(
      <ViewHeader title="View Title" subtitle="Subtitle">
        <div>Left</div>
        <div>Right</div>
      </ViewHeader>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
