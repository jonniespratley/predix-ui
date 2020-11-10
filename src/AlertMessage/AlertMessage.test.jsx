import React from 'react';
import renderer from 'react-test-renderer';
import AlertMessage from '.';

const typeOptions = {
  information: 'Info',
  error: 'Error',
  important: 'Important',
  healthy: 'Healthy',
  warning: 'Warning',
  success: 'Success'
};

describe('AlertMessage', () => {
  test('matches snapshot', () => {
    const tree = renderer.create(<AlertMessage type="important" visible />).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule('display', 'flex');
    // expect(tree).toHaveStyleRule('color', 'var(--px-alert-label-text-color--information,white)');
  });
  test('hidden - matches snapshot', () => {
    const tree = renderer.create(<AlertMessage type="important" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  Object.keys(typeOptions).forEach((val) => {
    test(`${val} matches snapshot`, () => {
      const tree = renderer.create(
        <AlertMessage
          type={val}
          visible
        >
        This is a message
        </AlertMessage>
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
