import React from 'react';
import classnames from 'classnames';
import IconSet from './';
import stylesheet from './px-icon.scss';

class Icon extends React.Component {
	constructor(props){
		super(props);
		this.createMarkup = this.createMarkup.bind(this);
    this.mergeStyles = this.mergeStyles.bind(this);
	}
	mergeStyles(...args){
		return Object.assign({}, ...args);
	}
	createMarkup(icon){
    let name = icon && icon.replace(':', '-');
		let html = this.getIcon(name);
		return { __html: html };
	}
	getIcon(name){
		if(IconSet.hasOwnProperty(name)){
			return IconSet[name];
		}
	}
	render(){
    const { icon = '', size, style, className, viewBox } = this.props;
		const styles = {
     width: `${size}px`,
     height: `${size}px`
    };
		const svgStyles = {
			pointerEvents: 'none',
			display: 'block',
			width: `${size}px`,
     	height: `${size}px`
    };
		const icn = icon && icon.replace(':', '-');
		const _viewBox = viewBox || `0 0 ${size} ${size}`;
    return (
			<i className={classnames('px-icon', className, icn)} style={styles}>
				<svg viewBox={_viewBox}
          preserveAspectRatio="xMidYMid meet"
          dangerouslySetInnerHTML={this.createMarkup(icon)}
        	style={this.mergeStyles(svgStyles, style)}>
	      </svg>
			</i>
    );
	}
}

Icon.defaultProps = {
  size: 24
};

export default Icon;
