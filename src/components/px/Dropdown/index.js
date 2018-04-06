import React from 'react';
import classnames from 'classnames';
//import stylesheet from './px-dropdown.scss';
import BaseComponent from '../BaseComponent';
import Icon from '../IconSet/Icon';
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
  ~ i{
    margin-left: .5rem; 
  }
`;
DropdownLabel.displayName = 'DropdownLabel';
DropdownLabel.defaultProps = {
  className: 'px-dropdown__label'
};

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
  
  ${props => props.width && css`
    width: width;
  `}
  
`;
DropdownContent.displayName = 'DropdownContent';
DropdownContent.defaultProps = {
  className:'px-dropdown__content'
};

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
DropdownOption.defaultProps = {
  className: 'px-dropdown__option'
};


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



class Dropdown extends BaseComponent {
  constructor(props){
    super(props, {name: 'Dropdown'});
    this.displayName = 'Dropdown';
    this.state = {
      dropdownContentWidth: props.dropdownContentWidth || null,
      selected: props.selected || null,
      selectedItems: props.selectedItems || null,
      selectedValues: props.selectedValues || null,
      opened: props.opened || false,
      items: props.items || null
    };
  }
  _handleClick(e){
    if(e && e.target && e.target.classList.contains('px-utl-close')){
      this._clearSelected();
      this.setState({
        //opened: !this.state.opened,
        selectedItem: null
      });
    } else {
      this.setState({opened: !this.state.opened});
    }
  }

  _clearSelected(){
    let items = this.state.items;
    items.map(item => item.selected = false);
    this.setState({items});
  }

  _handleChange(item, index, e){
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
  
    }
    let items = this.state.items[index].selected = !this.state.items[index].selected;
    if (this.props.onChange) {
      this.props.onChange(item, index, e);
    }
  }
  handleClear(){
   // console.log('handleClear');
    this.setState({
      selectedItem: null
    });
  }
  _handleDropdownContentRef(el){
    this.dropdownContent = el;
  }
	render() {
		const {
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
    const {
      opened, 
      items, 
      selectedItem, 
      selectedItems, 
      selectedValues, 
      selected,
      dropdownContentWidth
    } = this.state;

		const baseClasses = classnames('px-dropdown');
		return (
			<div className={baseClasses}>
        <Button theme={buttonStyle} disabled={disabled} style={triggerStyle} onClick={this._handleClick.bind(this)}>
          {selectedItem && <DropdownLabel>{selectedItem.val}</DropdownLabel>}
          {!selectedItem && <DropdownLabel>{displayValue}</DropdownLabel>}
          
          {(!hideChevron && !opened || !selectedItem) && <Icon icon={icon} size={16} />}
          {(!disableClear && selectedItem && opened) && <Icon icon='px-utl:close' size={16} onClick={this.handleClear.bind(this)}/>}
        </Button>
        <DropdownContent opened={opened} width={dropdownContentWidth}>
          {items && items.map((item, index) => (
            <div key={index}>
              <DropdownOption 
                disabled={item.disabled}
                selected={item.selected}
                onClick={this._handleChange.bind(this, item, index)}>
                {item.val}
              </DropdownOption>
            </div>)
          )}
        </DropdownContent>      
			</div>
		);
	}
}

Dropdown.defaultProps = {
  icon: 'px-utl:chevron'
};

Dropdown.displayName = 'Dropdown';

export default Dropdown;