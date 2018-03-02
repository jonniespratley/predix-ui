import React from 'react';
import classnames from 'classnames';
//import stylesheet from './px-dropdown.scss';
import BaseComponent from '../BaseComponent';
import Icon from '../IconSet/px-icon';
import styled, {css} from 'styled-components';
import Button from '../Button';


const SearchInput = styled.input`
  height: 2em;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid var(--px-input-border-color--outer,#889aa5);
  padding: 0 .33333rem;
  color: var(--px-input-text-color,#2c404c);
  &:focus{
    border-color: var(--px-input-border-color--outer--focused,#007acc);
    background-color: var(--px-input-background-color--focused,#eefbff);
    color: var(--px-input-text-color--focused,inherit);
  }
`;

const DropdownLabel = styled.div`
  overflow: hidden;
  flex-grow: 1;
  text-overflow: ellipsis;
  text-align: left;
  
`;
DropdownLabel.displayName = 'DropdownLabel';

const DropdownContent = styled.div`
  z-index: 10;
  position: absolute;
  background-color: var(--px-dropdown-bg-color,#fff);
  border: 1px solid var(--px-dropdown-border-color,gray);
  max-height: var(--px-dropdown-max-height,300px);
  max-width: var(--px-dropdown-max-width,400px);
  min-width: var(--px-dropdown-min-width);
  min-height: var(--px-dropdown-min-height);
  display: flex;
  flex-direction: column;
  display: none;
  ${props => props.opened && css`
    display: block;
  `}
  
`;
DropdownContent.displayName = 'DropdownContent';

const DropdownOption = styled.div`
    padding-left: var(--px-dropdown-item-padding,.66667rem);
    padding-right: var(--px-dropdown-item-padding,.66667rem);
    padding-top: var(--px-dropdown-item-padding);
    padding-bottom: var(--px-dropdown-item-padding);
    height: var(--px-dropdown-item-height,2rem);
    cursor: pointer;
    display: flex;
    align-items: center;
    &:hover {
      background-color: var(--px-dropdown-bg-color--hover,#d3d3d3);
    }
    &.selected,
    &:active {
      background-color: var(--px-dropdown-bg-color--selected,#00f);
      color: var(--px-dropdown-text-color--selected,#fff);
    }
    ${props => props.disabled && css`
      color: var(--px-dropdown-text-color--disabled,gray);
      background-color: var(--px-dropdown-bg-color--disabled,transparent);
      cursor: not-allowed;
      pointer-events: none;
    `}
    
    ${props => props.selected && css`
      background-color: var(--px-dropdown-bg-color--selected,#00f);
      color: var(--px-dropdown-text-color--selected,#fff);
      &:hover {
        background-color: var(--px-dropdown-bg-color--selected,#00f);
        color: var(--px-dropdown-text-color--selected,#fff);
      }
    `}
`;
DropdownOption.displayName = 'DropdownOption';

const DropdownTrigger = Button.extend`
  max-width: inherit;
  width: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: .66667rem;
  padding-right: .66667rem;
  outline: 0;
  font-weight: var(--px-dropdown-font-weight,normal);
  height: auto;
`;
DropdownTrigger.displayName = 'DropdownTrigger';



/**
 * px-example-component component
 */
class Dropdown extends BaseComponent {
  constructor(props){
    super(props, {name: 'Dropdown'});
    this.state = {
      selected: props.selected || null,
      selectedItems: props.selectedItems || null,
      selectedValues: props.selectedValues || null,
      opened: props.opened || false,
      items: props.items || null
    };
  }
  _handleClick(e){
    this.setState({opened: !this.state.opened});
  }
  _clearSelected(){
    let items = this.state.items;
    items.map(item => item.selected = false);
    this.setState({items});
  }
  _handleChange(item, index, e){
    console.log(item, index);
    if(item.disabled){
      return;
    }
    
    this.setState({
      selectedItem: item
    });
    
    if(!this.props.multi){
      this._clearSelected();
      this._handleClick();
    } else {
      console.log('Push item to selectedValues');  
    }
    let items = this.state.items[index].selected = !this.state.items[index].selected;
    

    if (this.props.onChange) {
      this.props.onChange(item, index, e);
    }
  }
	render() {
		const {
			label = 'px-example-component',
      selectBy,
      disabled,
      disableClear,
      hover,
      icon,
      triggerHeight,
      focusedItem,
      hideChevron,
      buttonStyle,
      boundTarget,
      preventCloseOnOutsideClick,
      displayValue,
      multi,
			children
    } = this.props;
    const triggerStyle = {
      height: triggerHeight 
    };
    const {opened, items, selectedItems, selectedValues, selected} = this.state;
		const baseClasses = classnames('px-dropdown');
		return (
			<div className={baseClasses}>
        <DropdownTrigger {...buttonStyle} disabled={disabled} onClick={this._handleClick.bind(this)} style={triggerStyle}>
          <DropdownLabel>{displayValue}</DropdownLabel>
          {!hideChevron && <Icon icon={icon} size={16} />}
        </DropdownTrigger>
        <DropdownContent opened={opened}>
          {items && items.map((item, index) => (
            <DropdownOption 
              disabled={item.disabled}
              selected={item.selected}
              onClick={this._handleChange.bind(this, item, index)}
              key={item.key}>{item.val}
            </DropdownOption>)
          )}
        </DropdownContent>      
			</div>
		);
	}
}

Dropdown.defaultProps = {
  icon: 'px-utl:chevron',
  showCaret: false,
  hideChevron: true
};

Dropdown.displayName = 'Dropdown';

export default Dropdown;