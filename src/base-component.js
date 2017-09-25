import React, {Component} from 'react';

export default class BaseComponent extends Component {
  constructor(){
    super();
  }
  componentWillMount(){
    console.log('componentWillMount', this);
  }
  componentDidMount(){
    console.log('componentDidMount', this);
  }

}
