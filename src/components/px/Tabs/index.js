import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styled, { css } from 'styled-components';

// Container
const TabsContainer = styled.div`
  color: var(--px-tabs-color, black);
  border: 0;
  padding: 0;
  &:focus {
    outline: var(--px-tab-outline-style, none);
  }
`;
TabsContainer.displayName = 'TabsContainer';

// Nav
const TabsContainerNav = styled.ul`
  font: inherit;
  margin: 0;
  border-bottom: 1px solid var(--px-tab-border-color, gray);
  padding: 0 1rem 0;
  display: flex;
`;
TabsContainerNav.displayName = 'TabsContainerNav';

// Tab Title
const TabTitle = styled.span`
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
class Tabs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: props.selected || 0
    };

    this._items = [];
    this._keys = [];
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selected !== undefined) {
      // const index = this._getIndexForValue(nextProps.selected);
      const selected = this._getIndexForValue(nextProps.selected);
      this.setState({
        selected
      });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (
      nextProps.selected !== this.props.selected ||
      nextState.selected !== this.state.selected
    ) {
      return true;
    }
    return false;
  }

  _getIndexForValue(val) {
    const index = this._keys.indexOf(val);
    return index;
  }

  _getValueForIndex(index) {
    const val = this._keys[index];
    return val;
  }

  handleClick(i, event) {
    const index = this._getIndexForValue(i);
    // const val = this._getValueForIndex(i);
    this.setState({
      selected: index
    });
    if (this.props.onChange) {
      this.props.onChange(i, event);
    }
  }

  _renderTitles() {
    this._keys = [];

    function labels(child, index) {
      let propForSelect = index;
      this._items[index] = child;
      if (this.props.propForSelect) {
        propForSelect = child.props[this.props.propForSelect];
      }
      this._keys[index] = propForSelect;
      const selected = (
        this.state.selected === (this.props.propForSelect
          ? this._getIndexForValue(propForSelect) : index));
      const baseClasses = classnames({ 'iron-selected': selected });
      return (
        <TabItem
          key={index}
          className={baseClasses}
          active={selected}
          aria-controls={`panel-${index}`}
          role="tab"
        >
          <TabTitle
            {...child.props}
            onClick={this.handleClick.bind(this, propForSelect)} /* eslint-disable-line */
          >
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
    const { style } = this.props;
    return (
      <TabsContainer style={style} className="px-tabs__container">
        <TabsContainerNav className="px-tabs__nav" role="tablist">
          {this._renderTitles()}
        </TabsContainerNav>
        {this._renderContent()}
      </TabsContainer>
    );
  }
}

Tabs.defaultProps = {
  selected: 0,
  onChange: null,
  style: null,
  children: null,
  propForSelect: null
};

Tabs.propTypes = {
  selected: PropTypes.number,
  onChange: PropTypes.func,
  style: PropTypes.objectOf(PropTypes.string),
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  propForSelect: PropTypes.string
};

Tabs.displayName = 'Tabs';

export default Tabs;
