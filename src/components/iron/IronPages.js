import React from 'react';
import classnames from 'classnames';

class IronPages extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'IronPages';
  }
  _renderChildren() {
    const selected = this.props.selected;
    let child = null;
    const len = this.props.children.length;
    if (selected > len - 1) {
      child = this.props.children[0];
    } else {
      child = this.props.children[selected];
    }
    const selectedClassName = classnames(this.props.selectedClassName);
    return (<div className={selectedClassName}>{child}</div>);
  }
  render() {
    const {
      children,
      className,
      selectedClassName,
      style
    } = this.props;

    return (
      <div className={classnames(className)}>{this._renderChildren()}</div>
    );
  }
}

IronPages.defaultProps = {
  propForSelect: null,
  selected: 0,
  selectedItem: null,
  selectedClassName: 'iron-selected',
  className: 'iron-selector'
};

export default IronPages;
