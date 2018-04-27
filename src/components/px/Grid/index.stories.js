import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs/react';
import Grid from './';

const divStyle = {
  backgroundColor: '#f1f1f1',
  padding: 20,
  margin: 10,
  fontSize: 30
};

const gridStyle = {
  height: 300,
  backgroundColor: 'dodgerblue'
};

storiesOf('Grid', module)
  .addDecorator(withKnobs)
  .addWithJSX('default', () => (
    <Grid
      style={gridStyle}
      row={boolean('row', true)}
      rowrev={boolean('rowrev', false)}
      col={boolean('col', false)}
      colrev={boolean('colrev', false)}
      inline={boolean('inline', false)}
      wrap={boolean('wrap', false)}
      wraprev={boolean('wraprev', false)}
      vertical={boolean('vertical', false)}
      top={boolean('top', false)}
      bottom={boolean('bottom', false)}
      middle={boolean('middle', false)}
      left={boolean('left', false)}
      center={boolean('center', false)}
      right={boolean('right', false)}
      spaced={boolean('spaced', false)}
      justify={boolean('justify', false)}
      stretch={boolean('stretch', false)}
      baseline={boolean('baseline', false)}
    >
      <Grid item style={divStyle} flex={text('flex', null)}>1</Grid>
      <Grid item style={divStyle} flex={text('flex', null)}>2</Grid>
      <Grid item style={divStyle} flex={text('flex', null)}>3</Grid>
    </Grid>
  ));
