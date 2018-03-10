import React from 'react';
import classnames from 'classnames';


class IronSelector extends React.Component {
  constructor(props){
    super(props);
    this.displayName = 'IronSelector';
    this.state = {
      selected: props.selected || 0,
      selectedItem: props.selectedItem || null,
      selectedClassName: props.selectedClassName || 'iron-selected',
      propForSelected: props.propForSelect || null
    };
    this._items = [];
    this._keys = [];
  }

  _renderChildren(){
    let selected = this.props.selected;
    let children = this.props.children;
    let child = children[selected];
    if(child){
      return <div>{child}</div>
    }
  }

  componentWillReceiveProps(nextProps){
    console.log('componentWillReceiveProps', nextProps);
    //this.setState({selected: nextProps.selected});
  }
  
  componentDidUpdate(){
    if(this.props.onChange){
      this.props.onChange(this.state);
    }
  }

  _renderTitles() {
    this._keys = [];
    function labels(child, index) {
      let propForSelect = index;
      this._items.push(child);
      if(this.props.propForSelect){
         propForSelect = child.props[this.props.propForSelect];
        this._keys.push(propForSelect);
      } else {
        this._keys.push(index);
      }
      const selectedClassName = this.props.selectedClassName;
      const selected = (this.props.selected === this._getIndexForValue(propForSelect));
      const baseClasses = classnames(
        {[`${selectedClassName}`]: selected}
      );
      return (
        <li key={index} className={baseClasses}>
          {child}
        </li>
      );
    }
    const nodes = this.props.children.map(labels.bind(this));
    return nodes;
  }

  _getIndexForValue(val){
    return this._keys.indexOf(val);
  }

  render(){
    const {
      children,
      className,
      selected,
      selectedItem,
      style = {
        listStyleType: 'none',
        margin: 0,
        padding: 0
      }
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
  selectedClassName: 'iron-selected',
  selectedStyle: null,
  selected: 0,
  selectedItem: null,
  propForSelect: null
};
export default IronSelector;