import React from 'react';
import classnames from 'classnames';



class IronPages extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			selected: props.selected || 0,
			selectedItem: null,
			attrForSelected: props.attrForSelected || null
		};
	}
	_renderChildren(){
		let selected = this.props.selected;
		let child = null;
		let len = this.props.children.length;
		if(selected > len - 1){
			child = this.props.children[0];
		} else {
			child = this.props.children[selected];
		}


    const selectedClassName = classnames(this.props.selectedClassName);

		return (<div className={selectedClassName}>{child}</div>);
	}
	render(){

    const {
      children,
      className = 'iron-selector',
      selectedClassName = 'iron-selected',
      style = null
    } = this.props;

    const { selected, selectedItem } = this.state;

    const baseClassnames = classnames(className);

		return (<div className={baseClassnames}>{this._renderChildren()}</div>)
	}
}
IronPages.defaultProps = {
  selectedClassName: 'iron-selected'
};

export default IronPages;
