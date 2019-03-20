import React from 'react';
import PropTypes from 'prop-types';
import styled, { ifProp } from '../styled';

const BreadcrumbIcon = () => (
  <svg
    viewBox="0 0 16 16"
    preserveAspectRatio="xMidYMid meet"
    style={{
      width: 24, height: 24, fill: 'none', stroke: 'currentColor'
    }}
  >
    <g id="px-utl-chevron-right"><path strokeLinejoin="round" d="M6.2 13.2l5.4-5.5-5.5-5.5" /></g>
  </svg>
);
const Breadcrumbs = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
`;

const BreadcrumbItem = styled.li`
  list-style-type: none;
  height         : 2rem;
  display: flex;
  align-items: center;
  &:last-of-type {
    font-weight: 600;
  }
`;

const BreadcrumbLabel = styled.span`
  padding: 0 .2rem;
  user-select: ${ifProp({ clickOnlyMode: true }, 'none', 'normal')};
  cursor: ${ifProp({ clickOnlyMode: true }, 'pointer', 'normal')};
`;

class BreadcrumbsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.clickOnlyMode = props.clickOnlyMode || false;
    //  this._assetGraph = new AssetGraph(props.items || []);

    this.keys = props.keys;

    this.handleRef = this.handleRef.bind(this);
    this._getItemProp = this._getItemProp.bind(this);
    this._isLabel = this._isLabel.bind(this);
    this._isDropdown = this._isDropdown.bind(this);
    this._doesItemHaveSiblings = this._doesItemHaveSiblings.bind(this);
    this._isNotFirstItemInData = this._isNotFirstItemInData.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(index, items) {
    const { onClick } = this.props;
    if (onClick) {
      onClick({ index, items });
    }
  }

  componentDidMount() {
    if (this.root) {
      /*
        this.refs.root,
        this._assetGraph,
        this.clickOnlyMode,
        this.props.items,
        this.keys
      ); */
    }
  }

  handleRef(el) {
    this.root = el;
  }
  /**
   * Fetches an item's property at the configured key. Used to dynamically
   * fetch the item's label, icon, children, etc. based on the configured
   * `keys` for the component.
   */
  /* eslint-disable*/
  _getItemProp(item, key){
    if (item && typeof item === 'object' && typeof key === 'string' && item[key]) {
      return item[key];
    }
    return null;
  }

  _isNotFirstItemInData(index) {
    return index !== 0
  }
  /**
   * This function checks whether the item in question has siblings.
   * If the item is an overflow item, we return a false,
   * since it's not going to be in the graph anyway.
   */
  _doesItemHaveSiblings(itemInPath) {
    const graph = this._assetGraph;
    const source = itemInPath.source ? itemInPath.source : itemInPath;
    const isItemOverflow = this._getItemProp(itemInPath, this.keys.label) === '...';
    return isItemOverflow ? true : graph.hasSiblings(source);
  }
  /**
   * These three methods are used to determine which type of node to render.
   * Returns true if clickOnlyMode is turned on and its not the overflow node.
   */
  _isLabel(item, clickOnlyMode) {
    return (clickOnlyMode && this._getItemProp(item, this.keys.label) !== '...') || (!clickOnlyMode && !this._doesItemHaveSiblings(item));
  }
  /**
   * These three methods are used to determine which type of node to render.
   * Returns true if clickOnlyMode is turned off and its not the overflow node.
   */
  _isDropdown(item, clickOnlyMode) {
    return !clickOnlyMode && this._getItemProp(item, this.keys.label) !== '...' && this._doesItemHaveSiblings(item);
  }
  /**
   * These three methods are used to determine which type of node to render.
   * Returns true if this is the overflow node.
   */
  _isOverflow(item) {
    return this._getItemProp(item, this.keys.label) === '...';
  }
  /** 
   * Determines whether to display small or large chevrons based on whether
   * `clickOnlyMode` is enabled.
   */
  _getSeparatorSize(clickOnlyMode){
    return (clickOnlyMode ? 'small' : 'large');
  }
  /**
  * Returns a disabled class if the item is set as non-selectable.
  */
  _getDisabled(item){
    return (item.isSelectable === false ? 'disabled' : '');
  }

  render() {
    const {
      selectedRoute,
      clickOnlyMode
    } = this.props;

    return (
      <Breadcrumbs ref={this.handleRef}>
          {selectedRoute && selectedRoute.map((label, index) => (
            <BreadcrumbItem data-index={index} key={label} >
              
                {this._isNotFirstItemInData(index, selectedRoute) && (<BreadcrumbIcon />)}
                <BreadcrumbLabel clickOnlyMode={clickOnlyMode}
                  onClick={() => { this.handleClick(index, selectedRoute) }} /* eslint-ignore-line */
                >
                  {label}
                </BreadcrumbLabel>
              
            </BreadcrumbItem>
          ))}
      </Breadcrumbs>
    );
  }
}
BreadcrumbsComponent.defaultProps = {
  clickOnlyMode: false,
  onClick: null,
  selectedRoute: null,
  keys: {
    id: 'id',
    label: 'label',
    children: 'children'
  }
};

const shape = PropTypes.shape({
  id: PropTypes.string,
  label: PropTypes.string,
  children: PropTypes.arrayOf(shape)
});

BreadcrumbsComponent.propTypes = {
  clickOnlyMode: PropTypes.bool,
  onClick: PropTypes.func,
  selectedRoute: PropTypes.arrayOf(PropTypes.string),
  keys: PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    children: PropTypes.string
  })
};

export default BreadcrumbsComponent;
