import React from 'react';
import BaseComponent from '../BaseComponent';

export default class IronResizable extends BaseComponent {
	constructor(props) {
		super(props, {displayName: 'IronResizable'});
		this.defaultProps = {
			//The closest ancestor element that implements `IronResizableBehavior`.
			_parentResizable: {},
			//* True if this element is currently notifying its descedant elements of resize.
			_notifyingDescendant: false
		};
		this.isAttached = false;
		this.state = {};
		this._interestedResizables = [];
		this._boundNotifyResize = this.notifyResize.bind(this);
	}

	componentWillMount() {
		this.isAttached = true;
	}

	componentDidMount() {
		this._log('componentDidMount', 'setup');
		if (!this._parentResizable) {
			window.addEventListener('resize', this._boundNotifyResize);
			this.notifyResize();
		}
		this.notifyResize();
	}

	componentWillUnmount() {
		this._log('componentWillUnmount', 'cleanup');
		if (this._parentResizable) {
			this._parentResizable.stopResizeNotificationsFor(this);
		} else {
			window.removeEventListener('resize', this._boundNotifyResize);
		}

		this._parentResizable = null;
	}

	notifyResize() {
		console.log('notifyResize');
		if (!this.isAttached) {
			return;
		}

		this._interestedResizables.forEach(function(resizable) {
			if (this.resizerShouldNotify(resizable)) {
				this._notifyDescendant(resizable);
			}
		}, this);

		this._fireResize();
	}
	/**
   * Used to remove a resizable descendant from the list of descendants
   * that should be notified of a resize change.
   */
	stopResizeNotificationsFor(target) {
		var index = this._interestedResizables.indexOf(target);

		if (index > -1) {
			this._interestedResizables.splice(index, 1);
			this.unlisten(target, 'iron-resize', '_onDescendantIronResize');
		}
	}

	resizerShouldNotify(element) {
		return true;
	}

	_notifyDescendant() {
		// NOTE(cdata): In IE10, attached is fired on children first, so it's
		// important not to notify them if the parent is not attached yet (or
		// else they will get redundantly notified when the parent attaches).
		if (!this.isAttached) {
			return;
		}

		this._notifyingDescendant = true;
		descendant.notifyResize();
		this._notifyingDescendant = false;
	}

	_fireResize() {
		this._log('fireResize', this);
	}

	render() {
		const {children} = this.props;
		return (
			<div>{children}</div>
		);
	}
}
