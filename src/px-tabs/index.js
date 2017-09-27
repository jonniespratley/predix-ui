import React from 'react';
import BaseComponent from '../base-component';
import classnames from 'classnames';

import tabStyle  from './sass/px-tab.scss';
import Tab from './px-tab';
import style from './style.scss';

const Pane = (props) => {
  return (<div>{props.children}</div>);
};

/**
 * px-tabs component
 */
class Tabs extends BaseComponent {
	constructor(props) {
		super(props);
		this.displayName = 'Tabs';
    this.state = {
      selected: this.props.selected
    };
    this.name = 'tabs';
	}

  handleClick(index, event) {
    this.log('handleClick', index);
    event.preventDefault();
    this.setState({
      selected: index
    });
  }

  _renderTitles() {
    function labels(child, index) {
      let selected = (this.state.selected === index);
      let baseClasses = classnames(
        'px-tab',
        {'iron-selected': selected}
      );
      return (
        <li key={index}
          className={baseClasses} >
          <a href='#'
            onClick={this.handleClick.bind(this, index)}
          className='tab-title'>
            {child.props.label}
          </a>
        </li>
      );
    }
    return (
      <ul className="tabs-container__nav flex">
        {this.props.children && this.props.children.map(labels.bind(this))}
      </ul>
    );
  }

	_renderContent() {
		return (
			<div className='tabs-container__content'>
				{this.props.children && this.props.children[this.state.selected]}
			</div>
		);
	}

	render() {
    let cssClasses = classnames(
      'px-tabs',
      'root'
    );
		return (
      <div className={cssClasses}>
        <div className='tabs-container'>
          {this._renderTitles()}
          {this._renderContent()}
        </div>
        <style jsx global>{style}</style>
        <style jsx global>{tabStyle}</style>
      </div>
		);
	}
}
Tabs.defaultProps = {
  selected: 0
};
export default Tabs;
