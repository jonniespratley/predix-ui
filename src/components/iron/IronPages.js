import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class IronPages extends React.Component {
  _renderChildren() {
    const {
      selected,
      selectedClassName,
      children
    } = this.props;
    const len = React.Children.count(children);
    let child = null;
    
    if (selected > len - 1) {
      [child] = children;
    } else {
      child = children[selected];
    }
    return (<div className={classnames(selectedClassName)}>{child}</div>);
  }

  render() {
    const {
      className
    } = this.props;

    return (
      <div className={classnames(className)}>{this._renderChildren()}</div>
    );
  }
}

IronPages.defaultProps = {
  // propForSelect: null,
  selected: 0,
  children: null,
  // selectedItem: null,
  selectedClassName: 'iron-selected',
  className: 'iron-selector'
};

IronPages.propTypes = {
  children: PropTypes.node,
  // propForSelect: PropTypes.string,
  selected: PropTypes.number,
  // selectedItem: PropTypes.string,
  selectedClassName: PropTypes.string,
  className: PropTypes.string
};

IronPages.displayName = 'IronPages';

export default IronPages;
