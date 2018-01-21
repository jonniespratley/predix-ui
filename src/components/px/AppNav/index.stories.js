import React from 'react';
import {storiesOf} from '@storybook/react';
import AppNav from './';

const navItems = array('navItems', [
  {
    "path": "tab1",
    "icon": "px-fea:alerts",
    "eventName": "firstItem",
    "label": "Alerts",
    "subitems": [
      {
        "label": "Sub Category 1"
      }, {
        "label": "Sub Category 2",
        "eventName": "subitemTwo"
      }, {
        "label": "Sub Category 3",
        "path": "subitem3"
      }
    ]
  }, {
    "path": "tab2",
    "icon": "px-fea:asset",
    "label": "Cases",
    "subitems": [
      {
        "label": "Sub Category 1"
      }, {
        "label": "Sub Category 2"
      }, {
        "label": "Sub Category 3"
      }
    ]
  },
  {
    "path": "tab3",
    "icon": "px-fea:analysis",
    "label": "Analysis"
  },
  {
    "path": "tab4",
    "icon": "px-fea:dashboard",
    "label": "Dashboards"
  }
]);

///
storiesOf('App Nav', module)
  .add('default', () => (<AppNav items={navItems}/>))
  .add('with title', () => (<AppNav title='Custom Title' items={navItems}/>))
;
