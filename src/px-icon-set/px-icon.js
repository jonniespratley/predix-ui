import React from 'react';
import classnames from 'classnames';
//import IronIcon from '../iron-components/iron-icon';
import com from './px-icon-set-communication';
import utl from './px-icon-set-utility';
import doc from './px-icon-set-document';
import nav from './px-icon-set-navigation';
import obj from './px-icon-set-object';
import vis from './px-icon-set-vis';
import fea from './px-icon-set-feature';


const AllPxIcons = Object.assign({}, doc, nav, obj, vis, fea, com, utl);

class Icon extends React.Component{
	constructor(props){
		super(props);
		this.createMarkup = this.createMarkup.bind(this);
	}
	mergeStyles(...args){
		return Object.assign({}, ...args);
	}
	createMarkup(icon){
		let html = this.getIcon(icon);
		return { __html: html };
	}
	getIcon(name){
		if(AllPxIcons.hasOwnProperty(name)){
			return AllPxIcons[name];
		}
	}
	render(){
		const {icon, size} = this.props;
		let styles = {
      width: `${size}px`,
      height: `${size}px`
    };
    return (
			<div className="ReactIcon">
				<svg viewBox={`0 0 ${size} ${size}`} preserveAspectRatio="xMidYMid meet"
          dangerouslySetInnerHTML={this.createMarkup(icon)}
        	style={this.mergeStyles(styles,this.props.style)}>
	      </svg>
        <style jsx>{`
          .ReactIcon {
          	color: #2c404c;
          	fill: none;
          	stroke: #2c404c;
          	display: inline-flex;
          	align-items: center;
          	justify-content: center;
          	position: relative;
          	vertical-align: middle;
          }
        `}</style>
			</div>
    );

	}
}
Icon.defaultProps = {
  size: 32
};
export default Icon;
