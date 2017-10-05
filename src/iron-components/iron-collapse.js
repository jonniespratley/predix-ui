import React from 'react';
import classnames from 'classnames';


/**
 * IronCollapse component implementation.
 */
export default class IronCollapse extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			noAnimation: props.noAnimation || false,
			horizontal: props.horizontal || false,
			opened: props.opened || false,
			style: null
		};
		this._transitionEndBound = this._transitionEnd.bind(this);
	}

	get dimension() {
		return this.state.horizontal
			? "width"
			: "height";
	}

	get _isDisplayed() {
		var rect = this.$.getBoundingClientRect();
		for (var prop in rect) {
			if (rect[prop] !== 0)
				return true;
			}
		return false;
	}

	_calcSize() {
		return this.$.getBoundingClientRect()[this.dimension] + "px";
	}

	toggleClass(name, bool) {
		if (bool) {
			this.$.classList.add(name);
		} else {
			this.$.classList.remove(name);
		}
	}

	_transitionEnd() {
		if (this.state.opened) {
			this.$.style[this.dimension] = 'auto';
		}
		this._updateTransition(false);
		this.toggleClass('iron-collapse-closed', !this.state.opened);
		//	this.toggleClass('iron-collapse-opened', this.state.opened);
	}

	_updateTransition(enabled) {
		this.$.style.transitionDuration = (enabled && !this.state.noAnimation)
			? ''
			: '0s';
	}

	focus() {
		this.$.focus();
	}

	updateSize(size, animated) {
		let style = this.$.style;
		if (this.$.style[this.dimension] === size) {
			return;
		}
		this._updateTransition(false);
		if (animated && !this.state.noAnimation && this._isDisplayed) {
			var startSize = this._calcSize();

			// For `auto` we must calculate what is the final size for the animation.
			// After the transition is done, _transitionEnd will set the size back to `auto`.
			if (size === "auto") {
				this.$.style[this.dimension] = size;
				size = this._calcSize();
			}
			this.$.style[this.dimension] = startSize;
			this.$.style.height = this.$.offsetHeight;
			this._updateTransition(true);
		}
		this.$.style[this.dimension] = size;
	}

	/**
	 * toggle - Toggle content
	 *
	 * @return {type}  description
	 */
	toggle() {
		if (this.state.opened) {
			this.hide();
		} else {
			this.show();
		}
	}
  /** Show content*/
	show() {
		this.setState({opened: true});
	}

  /** Hide content*/
	hide() {
		this.setState({opened: false});
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.opened !== this.state.opened) {
			this.setState({opened: nextProps.opened});
		}
	}

	componentDidUpdate() {
		this.updateSize(this.state.opened
			? 'auto'
			: '0px', true);
		if (this.state.opened) {
			this.focus();
		}
		if (this.state.noAnimation) {
			this._transitionEnd();
		}
	}

	componentDidMount() {
		this.$.addEventListener('transitionend', this._transitionEndBound);
		this._transitionEnd();
	}

	componentWillUnmount() {
		this.$.removeEventListener('transitionend', this._transitionEndBound);
	}

	render() {
		const { opened, style } = this.state;
		const { children } = this.props;
		const baseClassnames = classnames(
			'iron-collapse',
			{ 'iron-collapse-opened': opened }
		//	{ "iron-collapse-closed": !opened }
		);


		return (
			<div className={baseClassnames}
				ref={e => { this.$ = e;}}
				className={baseClassnames}
				style={style}
				aria-hidden={!opened}
				aria-expanded={opened}>
				{children}
			</div>
		);
	}
}
