import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Icon from '../IconSet/Icon';
import Button from '../Button';

/*
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
*/
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
  className: 'px-dropdown__content'
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

const DropdownTrigger = styled.div`
  max-width: inherit;
  width: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: 0;
  font-weight: var(--px-dropdown-font-weight,normal);
  height: auto;
`;
DropdownTrigger.displayName = 'DropdownTrigger';
DropdownTrigger.defaultProps = {
  className: 'px-dropdown__trigger'
};

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'Dropdown';
    this._handleClear = this._handleClear.bind(this);
    this._handleClick = this._handleClick.bind(this);
    this.state = {
      dropdownContentWidth: props.dropdownContentWidth,
      selected: props.selected, /* eslint-disable-line */
      selectedItems: props.selectedItems || null, /* eslint-disable-line */
      selectedValues: props.selectedValues || null, /* eslint-disable-line */
      opened: props.opened || false,
      items: props.items || null
    };
  }

  _handleClick(e) {
    if (e && e.target && e.target.classList.contains('px-utl-close')) {
      this._clearSelected();
      this.setState({
        selectedItem: null
      });
    } else {
      this.setState({ opened: !this.state.opened });
    }
  }

  _clearSelected() {
    const { items } = this.state;
    items.forEach((item) => {
      const i = item;
      i.selected = false;
      return i;
    });
    this.setState({ items });
  }

  _handleChange(item, index, e) {
    if (item.disabled) {
      return;
    }
    this.setState({
      selectedItem: item
    });

    if (!this.props.multi) {
      this._clearSelected();
      this._handleClick();
    }
    // const items = this.state.items[index].selected = !this.state.items[index].selected;
    if (this.props.onChange) {
      this.props.onChange(item, index, e);
    }
  }

  _handleClear() {
    this.setState({
      selectedItem: null
    });
  }
  _handleDropdownContentRef(el) {
    this.dropdownContent = el;
  }

  render() {
    const {
      keys = {
        key: 'key',
        val: 'val'
      },
      className,
      disabled,
      disableClear,
      icon,
      triggerHeight,
      hideChevron,
      buttonStyle,
      displayValue,
      children
    } = this.props;

    const triggerStyle = {
      height: triggerHeight
    };

    const {
      opened,
      items,
      selectedItem,
      dropdownContentWidth
    } = this.state;

    const baseClasses = classnames('px-dropdown', className);
    return (
      <div className={baseClasses}>
        <Button
          theme={buttonStyle}
          disabled={disabled}
          style={triggerStyle}
          onClick={this._handleClick}
        >
          {children && children}
          {!children &&
          <DropdownTrigger>
            {selectedItem && <DropdownLabel>{selectedItem[keys.val]}</DropdownLabel>}
            {!selectedItem && <DropdownLabel>{displayValue}</DropdownLabel>}
            {(!hideChevron && !opened && !selectedItem) && <Icon icon={icon} size={16} />}
            {(!disableClear && selectedItem && opened) && <Icon icon="px-utl:close" size={16} onClick={this._handleClear} />}
          </DropdownTrigger>}
        </Button>
        <DropdownContent opened={opened} width={dropdownContentWidth}>
          {items && items.map((item, index) => (
            <DropdownOption
              key={item[keys.key]}
              data-key={item[keys.key]}
              data-val={item[keys.val]}
              disabled={item.disabled}
              selected={item.selected}
              onClick={this._handleChange.bind(this, item, index)} /* eslint-disable-line */
            >
              {item[keys.val]}
            </DropdownOption>
          ))}
        </DropdownContent>
      </div>
    );
  }
}

Dropdown.defaultProps = {
  keys: {
    key: 'key',
    val: 'val'
  },
  className: null,
  disabled: null,
  disableClear: null,
  triggerHeight: null,
  selected: null,
  hideChevron: null,
  buttonStyle: null,
  dropdownContentWidth: null,
  displayValue: null,
  multi: null,
  opened: null,
  children: null,
  items: null,
  onChange: null,
  selectedItems: null,
  selectedValues: null,
  icon: 'px-utl:chevron'
};

Dropdown.propTypes = {
  keys: PropTypes.shape({
    key: PropTypes.string,
    val: PropTypes.string
  }),
  items: PropTypes.arrayOf(PropTypes.any),
  selectedItems: PropTypes.arrayOf(PropTypes.any),
  selectedValues: PropTypes.arrayOf(PropTypes.any),
  selected: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  disabled: PropTypes.bool,
  disableClear: PropTypes.bool,
  dropdownContentWidth: PropTypes.number,
  triggerHeight: PropTypes.number,
  hideChevron: PropTypes.bool,
  buttonStyle: PropTypes.string,
  displayValue: PropTypes.string,
  opened: PropTypes.bool,
  multi: PropTypes.bool,
  children: PropTypes.node,
  onChange: PropTypes.func,
  icon: PropTypes.string
};

Dropdown.displayName = 'Dropdown';

export default Dropdown;
