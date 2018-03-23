import React from 'react';
import BaseComponent from '../BaseComponent';
import classnames from 'classnames';
import styled, {css} from 'styled-components';
import Tab from './Tab';


const Pane = (props) => {
  return (<div>{props.children}</div>);
};

//Container
const TabsContainer = styled.div`
  color: var(--px-tabs-color, black);
  border: 0;
  padding: 0;
  &:focus {
    outline: var(--px-tab-outline-style, none);
  }
`;
TabsContainer.displayName = 'TabsContainer';

//Nav
const TabsContainerNav = styled.ul`
  font: inherit;
  margin: 0;
  border-bottom: 1px solid var(--px-tab-border-color, gray);
  padding: 0 1rem 0;
  display: flex;
`;
TabsContainerNav.displayName = 'TabsContainerNav';

//Tab Title
const TabTitle = styled.a`
  color: var(--px-tab-color, black);
  cursor: pointer;
  text-decoration: none;
  user-select: none;

  &:hover {
    color: var(--px-tab-color--hover, black);
  }

  &:active {
    color: var(--px-tab-color--active, black);
  }
`;
TabTitle.displayName = 'TabTitle';

const TabItem = styled.li`
  list-style-type: none;
  line-height: 1.3;
  font: inherit;
  text-align: center;
  vertical-align: middle;
  padding-bottom: 10px;
  margin: 1px 20px 0 0;
  color: var(--px-tab-color, black);

  ${props => props.active && css`
    color: var(--px-tab-color--selected, black);
    border-bottom: 2px solid var(--px-tab-color--selected, black);
    font-weight: bold;
  `}
`;

/**
 * Tabs component
 */
class Tabs extends BaseComponent {
	constructor(props) {
		super(props, {displayName: 'Tabs'});

    this.state = {
      selected: this.props.selected || 0,
      propForSelect: this.props.propForSelect || null
    };

    this._items = [];
    this._keys = [];
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.selected !== undefined){
      this.setState({
        selected: nextProps.selected
      });
    }
  }

  _getIndexForValue(val){
    let index = this._keys.indexOf(val);
    return index;
  }

  handleClick(index, event) {
    this._log('handleClick', index);
    event.preventDefault();
    const selected = this._getIndexForValue(index);
    if(this.props.onChange){
      this.props.onChange(selected, event);
    }
    
    this.setState({
      selected: selected
    });
  }

  _renderTitles() {
    this._keys = [];

    function labels(child, index) {
      let propForSelect = index;
      this._items[index] = child;
      if(this.props.propForSelect){
         propForSelect = child.props[this.props.propForSelect];
      } 
      this._keys[index] = propForSelect;
      let selected = (this.state.selected === this._getIndexForValue(propForSelect));
      let baseClasses = classnames(
        {'iron-selected': selected}
      );
      return (
        <TabItem key={index} className={baseClasses} active={selected} className='px-tab__item'>
          <TabTitle href='#' onClick={this.handleClick.bind(this, propForSelect)}>
            {child.props.label}
          </TabTitle>
        </TabItem>
      );
    }

    const { children } = this.props;
    return React.Children.map(children, labels.bind(this));
  }

	_renderContent() {
    return this.props.children && this.props.children[this.state.selected];
	}

	render() {
   const {style} = this.props;
		return (
      <TabsContainer style={style} className='px-tabs__container'>
        <TabsContainerNav className='px-tabs__nav'>
          {this._renderTitles()}
        </TabsContainerNav>
        {this._renderContent()}
      </TabsContainer>
		);
	}
}
Tabs.defaultProps = {
  selected: 0
};
Tabs.displayName = 'Tabs';

export default Tabs;
