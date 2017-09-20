import React from 'react';
import Card from './px-card';
import Button from './px-button';
//import Card from './px/card.js';
//import demo from './demo.js';

// this should be the entry point to your library
module.exports = {
  demo: require('./demo').default,
  px: {
    Button,
    Card
  }
};
