import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

class IronSelector extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'IronSelector';
    this.state = {
      selected: props.selected,
      selectedClassName: props.selectedClassName,
      propForSelected: props.propForSelect
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

  _renderTitles = (children) => {
    this._keys = [];
    this._items = [];
    const {
      propForSelect,
      selectedClassName,
      selected
    } = this.props;

    function labels(child, index) {
      const propForSelectChild = propForSelect || index;

      this._items.push(child);
      if (propForSelectChild) {
        this._keys.push(propForSelectChild);
      } else {
        this._keys.push(index);
      }


      const selectedItem = (selected === this._getIndexForValue(propForSelectChild));
      const baseClasses = classnames({ [`${selectedClassName}`]: selectedItem });

      const propForChild = {
        [`${propForSelect}`]: child.props[`${propForSelect}`]
      };
      return (
        <li key={index} className={baseClasses} {...propForChild}>
          {child}
        </li>
      );
    }

    return children.map(labels.bind(this));
  }

  _getIndexForValue(val) {
    return this._keys.indexOf(val);
  }

  render() {
    const {
      className,
      style,
      children
    } = this.props;

    const baseClassnames = classnames(className);

    return (
      <ul className={baseClassnames} style={style}>
        { this._renderTitles(children) }
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
  selected: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  // selectedItem: PropTypes.string,
  selectedClassName: PropTypes.string,
  className: PropTypes.string
};

export default IronSelector;
