import React from 'react';
import BaseComponent from '../BaseComponent';
import classnames from 'classnames';
import Tab from './Tab';
import tabStyle  from './sass/px-tab.scss';
import style from './px-tabs.scss';

const Pane = (props) => {
  return (<div>{props.children}</div>);
};

/**
 * Tabs component
 */
class Tabs extends BaseComponent {
	constructor(props) {
		super(props, {displayName: 'Tabs'});

    this.state = {
      selected: this.props.selected,
      propForSelect: this.props.propForSelect
    };

    this._items = [];
    this._keys = [];
	}

  _getIndexForValue(val){
    return this._keys.indexOf(val);
  }

  handleClick(index, event) {
    this._log('handleClick', index);
    event.preventDefault();
    this.setState({
      selected: this._getIndexForValue(index)
    });
  }

  _renderTitles() {
    this._keys = [];
    function labels(child, index) {
      let propForSelect = index;
      //add child
      this._items.push(child);

      //add prop to keys
      if(this.props.propForSelect){
         propForSelect = child.props[this.props.propForSelect];
        this._keys.push(propForSelect);
      } else {
        this._keys.push(index);
      }

      //selected index is selected key
      let selected = (this.state.selected === this._getIndexForValue(propForSelect));
      let baseClasses = classnames(
        'px-tab',
        {'iron-selected': selected}
      );
      return (
        <li key={index} className={baseClasses} >
          <a href='#' onClick={this.handleClick.bind(this, propForSelect)} className='tab-title'>
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
