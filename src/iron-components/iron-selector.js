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
        <li key={index} className={baseClasses}>
          {child}
        </li>
      );
    }
    let nodes = this.props.children.map(labels.bind(this));
    return nodes;
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
      style = {
        listStyleType: 'none',
        margin: 0,
        padding: 0
      }
    } = this.props;

    const baseClassnames = classnames(
      className
    );

    return (
      <ul className={baseClassnames} style={style}>
        { this._renderTitles() }

        <style jsx>{`

          .iron-selector {
            user-select: none;
          }

          .iron-selector .iron-selected {
            background: var(--iron-selected, green);
          }
        `}</style>
      </ul>
    );
  }
}
