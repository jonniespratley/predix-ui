import React from 'react';
import classnames from 'classnames';
import IconSet from './';
//import stylesheet from './px-icon.scss';
import styled from 'styled-components';

const PxIcon = styled.i`
	color: var(--iron-icon-stroke-color, inherit);
	fill: var(--iron-icon-fill-color, none);
	stroke: var(--iron-icon-stroke-color, currentColor);
	display: inline-flex;
	align-items: center;
	justify-content: center;
	position: relative;
	vertical-align: middle;
	width: var(--iron-icon-width);
	height: var(--iron-icon-height);

  svg {
    color         : var(--iron-icon-stroke-color, inherit);
    fill          : var(--iron-icon-fill-color, none);
    stroke        : var(--iron-icon-stroke-color, currentColor);
    position      : relative;
    vertical-align: middle;
  }

  &.hidden {
    display: none;
  }

  svg {
    color : inherit;
    fill  : inherit;
    stroke: inherit;
  }
`;




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
			<PxIcon className={classnames('px-icon', className, icn)} style={styles}>
				<svg viewBox={_viewBox}
          preserveAspectRatio="xMidYMid meet"
          dangerouslySetInnerHTML={this.createMarkup(icon)}
        	style={this.mergeStyles(svgStyles, style)}>
	      </svg>
			</PxIcon>
    );
	}
}

Icon.defaultProps = {
  size: 24
};

export default Icon;
