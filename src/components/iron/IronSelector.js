import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

class IronSelector extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'IronSelector';
    this.state = {
      selected: props.selected || 0,
      selectedClassName: props.selectedClassName || 'iron-selected',
      propForSelected: props.propForSelect || null
    };
    this._items = [];
    this._keys = [];
  }

  _renderChildren() {
    const { selected, children } = this.props;
    const child = children[selected];
    if (child) {
      return <div>{child}</div>;
    }
    return null;
  }

  componentDidUpdate() {
    const { onChange } = this.props;
    if (onChange) {
      onChange(this.state);
    }
  }

  _renderTitles() {
    this._keys = [];

    const { propForSelect, selected, children } = this.props;

    function labels(child, index) {
      let propForSelectChild = propForSelect || index;
      this._items.push(child);
      if (propForSelectChild) {
        propForSelectChild = child.props[propForSelectChild];
        this._keys.push(propForSelectChild);
      } else {
        this._keys.push(index);
      }
      const { selectedClassName } = this.props;
      const selectedItem = (selected === this._getIndexForValue(propForSelectChild));
      const baseClasses = classnames({ [`${selectedClassName}`]: selectedItem });
      return (
        <li key={index} className={baseClasses}>
          {child}
        </li>
      );
    }
    const nodes = children.map(labels.bind(this));
    return nodes;
  }

  _getIndexForValue(val) {
    return this._keys.indexOf(val);
  }

  render() {
    const {
      className,
      style
    } = this.props;

    const baseClassnames = classnames(
      'iron-selector',
      className
    );

    return (
      <ul className={baseClassnames} style={style}>
        { this._renderTitles() }
      </ul>
    );
  }
}

IronSelector.defaultProps = {
  onChange: null,
  style: {
    listStyleType: 'none',
    margin: 0,
    padding: 0
  },
  propForSelect: null,
  selected: 0,
  children: null,
  // selectedItem: null,
  selectedClassName: 'iron-selected',
  className: 'iron-selector'
};

IronSelector.propTypes = {
  onChange: PropTypes.func,
  style: null,
  children: PropTypes.node,
  propForSelect: PropTypes.string,
  selected: PropTypes.oneOfType(PropTypes.number, PropTypes.string),
  // selectedItem: PropTypes.string,
  selectedClassName: PropTypes.string,
  className: PropTypes.string
};

export default IronSelector;
