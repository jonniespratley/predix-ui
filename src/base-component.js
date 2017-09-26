import React from 'react';
import debug from 'debug';

export default class BaseComponent extends React.Component {
  constructor(props){
    super(props);
    this.name = 'base-component';
    this.log = debug(`px:${this.name}`);
    this.log('constructor');
  }
  componentWillMount(){
    this.log('componentWillMount', this);
  }
  componentDidMount(){
    this.log('componentDidMount', this);
  }

}
