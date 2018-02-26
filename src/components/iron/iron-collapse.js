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
		this._handleRef = this._handleRef.bind(this);
		this._transitionEndBound = this._transitionEnd.bind(this);
	}

	get dimension() {
		return this.state.horizontal
			? "width"
			: "height";
	}

	get _isDisplayed() {
		var rect = this.base.getBoundingClientRect();
		for (var prop in rect) {
			if (rect[prop] !== 0)
				return true;
			}
		return false;
	}

	_calcSize() {
		return this.base.getBoundingClientRect()[this.dimension] + "px";
	}

	toggleClass(name, bool) {
		if (bool) {
			this.base.classList.add(name);
		} else {
			this.base.classList.remove(name);
		}
	}

	_transitionEnd() {
		if (this.state.opened) {
			this.base.style[this.dimension] = 'auto';
		}
		this._updateTransition(false);
		this.toggleClass('iron-collapse-closed', !this.state.opened);
		//	this.toggleClass('iron-collapse-opened', this.state.opened);
	}

	_updateTransition(enabled) {
		this.base.style.transitionDuration = (enabled && !this.state.noAnimation)
			? ''
			: '0s';
	}

	focus() {
		this.base.focus();
	}

	updateSize(size, animated) {
		let style = this.base.style;
		if (this.base.style[this.dimension] === size) {
			return;
		}
		this._updateTransition(false);
		if (animated && !this.state.noAnimation && this._isDisplayed) {
			var startSize = this._calcSize();

			// For `auto` we must calculate what is the final size for the animation.
			// After the transition is done, _transitionEnd will set the size back to `auto`.
			if (size === "auto") {
				this.base.style[this.dimension] = size;
				size = this._calcSize();
			}
			this.base.style[this.dimension] = startSize;
			this.base.style.height = this.base.offsetHeight;
			this._updateTransition(true);
		}
		this.base.style[this.dimension] = size;
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
		this.base.addEventListener('transitionend', this._transitionEndBound);
		this._transitionEnd();
	}

	componentWillUnmount() {
		this.base.removeEventListener('transitionend', this._transitionEndBound);
	}

	_handleRef(el){
		this.base = el;
		console.log('got ref', el);
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
				ref={this._handleRef}
				className={baseClassnames}
				style={style}
				aria-hidden={!opened}
				aria-expanded={opened}>
				{children}
				<style jsx>{`
					.iron-collapse{
						overflow:hidden;
						display: block;
						transition-duration: 300ms;
					}

				`}</style>
			</div>
		);
	}
}
