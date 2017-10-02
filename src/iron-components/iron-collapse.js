import React from 'react';

export default class IronCollapse extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			noAnimation: props.noAnimation || false,
			horizontal: props.horizontal || false,
			opened: props.opened || false,
			style: {}
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
		console.log('toggleClass', this.$.classList);
		if (bool) {
			this.$.classList.add(name);
		} else {
			this.$.classList.remove(name);
		}
	}

	_transitionEnd() {
		console.log("transition end", this);
		if (this.state.opened) {
			this.$.style[this.dimension] = 'auto';
		}
		//this._updateTransition(false);
		//this.toggleClass('iron-collapse-closed', !this.state.opened);
		//this.toggleClass('iron-collapse-opened', this.state.opened);
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
		console.warn('updateSize', size, animated);
		let style = this.$.style;
		if (style[this.dimension] === size) {
			return;
		}
		this._updateTransition(false);
		if (animated && !this.state.noAnimation && this._isDisplayed) {

			// Animation will start at the current size.
			var startSize = this._calcSize();

			console.warn('Animation will start at the current size.', startSize);
			// For `auto` we must calculate what is the final size for the animation.
			// After the transition is done, _transitionEnd will set the size back to `auto`.
			if (size === "auto") {
				style[this.dimension] = size;
				size = this._calcSize();
			}
			style[this.dimension] = startSize;
			style.height = this.$.offsetHeight;
			this._updateTransition(true);
		}
		// Set the final size.
		style[this.dimension] = size;
		this.$.style = style;
	}

	toggle() {
		if (this.state.opened) {
			this.hide();
		} else {
			this.show();
		}
	}

	show() {
		this.setState({opened: true});
	}

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
		const {opened, style} = this.state;
		const baseClassnames = classnames('iron-collapse', {
			'iron-collapse-opened': opened
		}, {
			'iron-collapse-closed': !opened
		});
		const {children} = this.props;
		return (
			<div ref={e => {
				this.$ = e;
			}} className={baseClassnames} style={style} aria-hidden={!opened} aria-expanded={opened}>
				{children && children}

        <style jsx>{`
          .iron-collapse {
            display: block;
            -webkit-transition-duration: 300ms;
                    transition-duration: 300ms;
            overflow: visible;
            @apply (--iron-collapse);
          }
          .iron-collapse.iron-collapse-opened {
            @apply (--iron-collapse-opened);
          }
          .iron-collapse.iron-collapse-closed {
            display: none;
            @apply (--iron-collapse-closed);
          }
          .iron-collapse:not(.iron-collapse-opened) {
            overflow: hidden;
          }
        `}</style>
			</div>
		);
	}
}
