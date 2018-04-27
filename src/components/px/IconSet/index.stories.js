import React from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select, number } from '@storybook/addon-knobs/react';

import Icon from './Icon';
import Icons from './';
// import DocIcons from './px-icon-set-document';

const AllIcons = Object.keys(Icons).sort();

const cheatsheetStyles = {
  // display: 'flex'
  // flexWrap: 'wrap'
};
const RenderIconSet = ({ icons, size }) => (
  <ul style={cheatsheetStyles}>
    {icons && icons.map(item => (
      <li key={item}><Icon icon={item} size={size} viewBox="0 0 32 32" />{item}</li>
    ))}
  </ul>
);
RenderIconSet.propTypes = {
  icons: PropTypes.arrayOf(PropTypes.string).isRequired,
  size: PropTypes.number.isRequired
};

storiesOf('Icon', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <Icon
      icon={select('icon', AllIcons, 'px-fea:home')}
      color={text('color', 'blue')}
      viewBox={text('viewBox', '0 0 32 32')}
      size={number('size', 225)}
    />
  ))
  .add('cheatsheet', () => (
    <div>
      {RenderIconSet({ icons: AllIcons, size: 75 })}
    </div>
  ));

