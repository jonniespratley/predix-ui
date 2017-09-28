import React from 'react';
import classnames from 'classnames';

//IconSet - Take svg defs and make icon available
export default class IconSet extends React.Component {

	componentWillMount() {
		console.log('componentWillMount');
	}
	componentDidMount() {
		console.log('componentDidMount');
		console.log('icon', this._createIconMap());
	}

	getIconNames() {
		this._icons = this._createIconMap();
		return Object.keys(this._icons).map(function(n) {
			return this.name + ':' + n;
		}, this);
	}

	removeIcon(element) {
		if (element._svgIcon) {
			(this.refs.root || element).removeChild(element._svgIcon);
			element._svgIcon = null;
		}
	}

	//Create a map of child svg elements by id
	_createIconMap() {
		let icons = Object.create(null);
		this.refs.root.querySelectorAll('[id]').forEach((icon) => {
			icons[icon.id] = icon;
		});
		return icons;
	}

	_prepareSvgClone(sourceSvg, size) {
		if (sourceSvg) {
			let content = sourceSvg.cloneNode(true),
				svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg'),
				viewBox = content.getAttribute('viewBox') || '0 0 ' + size + ' ' + size,
				cssText = 'pointer-events: none; display: block; width: 100%; height: 100%;';
			svg.setAttribute('viewBox', viewBox);
			svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
			svg.setAttribute('focusable', 'false');
			svg.style.cssText = cssText;
			svg.appendChild(content).removeAttribute('id');
			return svg;
		}
		return null;
	}

	render() {
		const {children} = this.props;
		return (
			<div ref='root'>
				{children}
			</div>
		);
	}
}
