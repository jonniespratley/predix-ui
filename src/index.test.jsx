import { expect } from 'chai';
import React from 'react';
import {shallow} from 'enzyme';
import px from './components/px';
describe('px', () => {
  test('should be defined', () =>{
    expect(px).to.not.be.undefined;
  });
});
