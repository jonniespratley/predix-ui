import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text, select } from '@storybook/addon-knobs/react';

import Grid from '.';
import Flex from '../Flex';

const divStyle = {
  backgroundColor: '#fff',
  fontSize: 22,
  textAlign: 'center'
};

const gridStyle = {
  height: 500,
  backgroundColor: 'dodgerblue'
};

const justifyOptions = [
  'start',
  'end',
  'center',
  'stretch'
];
const alignOptions = [
  'start',
  'end',
  'center',
  'stretch'
];

storiesOf('Components / Grid', module)
  .addDecorator(withKnobs)
  .addWithJSX('default', () => (
    <Grid
      style={gridStyle}
      columns={text('columns', '1fr 1fr 1fr')}
      rows={text('rows', '')}
      rowGap={text('rowGap', '10px')}
      columnGap={text('columnGap', '10px')}
      inline={boolean('inline', false)}
      alignItems={select('alignItems', justifyOptions)}
      justifyItems={select('justifyItems', justifyOptions)}
    >
      <Grid item style={divStyle} alignSelf={select('alignSelf', alignOptions)}>1</Grid>
      <Grid item style={divStyle} alignSelf={select('alignSelf', alignOptions)}>2</Grid>
      <Grid item style={divStyle} alignSelf={select('alignSelf', alignOptions)}>3</Grid>
      <Grid item style={divStyle} alignSelf={select('alignSelf', alignOptions)}>4</Grid>
      <Grid item style={divStyle} alignSelf={select('alignSelf', alignOptions)}>5</Grid>
    </Grid>
  ));
storiesOf('Components / Flex', module)
  .addDecorator(withKnobs)
  .addWithJSX('default', () => (
    <Flex
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
      <Flex item style={divStyle} flex={text('flex', '')}>1</Flex>
      <Flex item style={divStyle} flex={text('flex', '')}>2</Flex>
      <Flex item style={divStyle} flex={text('flex', '')}>3</Flex>
    </Flex>
  ));
