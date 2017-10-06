import React from 'react';
import classnames from 'classnames';


export default class IronSelector extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selected: props.selected || 0,
      selectedItem: props.selectedItem || null,
      propForSelected: props.propForSelected || null
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

  _renderTitles() {
    this._keys = [];
    function labels(child, index) {
      let propForSelect = index;

      //add child
      this._items.push(child);

      //add prop to keys
      if(this.props.propForSelect){
         propForSelect = child.props[this.props.propForSelect];
        this._keys.push(propForSelect);
      } else {
        this._keys.push(index);
      }

      //selected index is selected key
      let selected = (this.state.selected === this._getIndexForValue(propForSelect));
      let baseClasses = classnames(
        {'iron-selected': selected}
      );
      return (
        <div key={index} className={baseClasses}>
          {child}
        </div>
      );
    }
    return (
      <section>
        {this.props.children && this.props.children.map(labels.bind(this))}
      </section>
    );
  }


  _getIndexForValue(val){
    return this._keys.indexOf(val);
  }

  render(){
    const {
      children,
      className = 'iron-selector',
      selectedClassName = 'iron-selected',
      selected,
      selectedItem,
      style = null
    } = this.props;

    const baseClassnames = classnames(
      className
    );

    return (
      <div className={baseClassnames} style={style}>
        { this._renderTitles() }
      </div>
    );
  }
}
