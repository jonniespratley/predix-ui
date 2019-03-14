import React from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import {
  withKnobs, text, select, number
} from '@storybook/addon-knobs/react';

import Icon from '../Icon/Icon';
import Icons from '.';
// import DocIcons from './px-icon-set-document';

const AllIcons = Object.keys(Icons).sort();

const cheatsheetStyles = {
  // display: 'flex'
  // flexWrap: 'wrap'
};
const RenderIconSet = ({ icons }) => (
  <ul style={cheatsheetStyles} className="cheatsheet-icons">
    {icons && icons.map(item => (
      <li key={item}>
        <Icon icon={item} />
        {item}
      </li>
    ))}
  </ul>
);
RenderIconSet.propTypes = {
  icons: PropTypes.arrayOf(PropTypes.string).isRequired
  // size: PropTypes.number.isRequired
};

storiesOf('Components / Icon', module)
  .addDecorator(withKnobs)
  .addWithJSX('default', () => (
    <Icon
      icon={select('icon', AllIcons, 'px-fea:home')}
    />
  ))
  .addWithJSX('custom color', () => (
    <Icon
      icon={select('icon', AllIcons, 'px-fea:home')}
      color={text('color', 'blue')}
    />
  ))
  .addWithJSX('custom size/color', () => (
    <Icon
      icon={select('icon', AllIcons, 'px-fea:home')}
      color={text('color', 'blue')}
      viewBox={text('viewBox', '0 0 32 32')}
      size={number('size', 225)}
    />
  ))
  .add('cheatsheet', () => (
    <div className="cheatsheet">
      {RenderIconSet({ icons: AllIcons })}
      <style>
        {`
        .cheatsheet{
        }
        .cheatsheet ul {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-around;
          margin: 0;
          padding: 0;
        }
        .cheatsheet li {
          flex: 1 0 200px;
          list-style: none;
          margin: 0.5rem;
          cursor: pointer;
        }
        .cheatsheet .px-icon{
          margin-right: 1rem;
        }
      `}
      </style>
    </div>
  ));
