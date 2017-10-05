import React from 'react';
export default class IronSelector extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selected: props.selected || 0,
      selectedItem: props.selectedItem || null,
      propForSelected: props.propForSelected || null
    };
  }
  render(){
    const { children, className, style } = this.props;
    const { selected, selectedItem } = this.state;

    console.log('IronSelector', selected, this);
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }
}
