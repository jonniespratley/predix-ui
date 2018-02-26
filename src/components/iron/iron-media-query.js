import React from 'react';

/**
 * @class IronMediaQuery
 * @description React implementation of https://github.com/PolymerElements/iron-media-query
 */
export default class IronMediaQuery extends React.Component {
	constructor(props) {
		super(props);
		this._mq = null;
		this._boundMQHandler = this.queryHandler.bind(this);
		this.defaultProps = {
			queryMatches: false,
			query: null,
			onMatch: null,
			onChange: null
		};
		this.state = {
			full: props.full || false,
			queryMatches: false,
			query: props.query || null
		};
		this.namedQueries = {
			xs: "(max-width: 21.33rem)",
			sm: "(min-width: 22rem) and (max-width: 49.06rem)",
			md: "(min-width: 51.2rem) and (max-width: 68.2rem)",
			lg: "(min-width: 68.26rem) and (max-width: 80rem)",
			xl: "(min-width: 85.33rem)"
		};
	}
	_setQueryMatches(m) {
		let s = this.state;
		s.queryMatches = m;
		this.setState(s);
		if (this.props.onChange) {
			this.props.onChange(s);
		}
		if (m && this.props.onMatch) {
			this.props.onMatch(s);
		}
	}
	_add() {
		if (this._mq) {
			this._mq.addListener(this._boundMQHandler);
		}
	}
	_remove() {
		if (this._mq) {
			this._mq.removeListener(this._boundMQHandler);
		}
		this._mq = null;
	}
	queryChanged() {
		this._remove();
		var query = this.state.query;
		if (this.namedQueries[query]) {
			query = this.namedQueries[query];
		}
		if (!query) {
			return;
		}
		if (!this.props.full && query[0] !== "(") {
			query = "(" + query + ")";
		}
		this._mq = window.matchMedia(query);
		this._add();
		this.queryHandler(this._mq);
	}
	queryHandler(mq) {
		this.fire("px-media-query-change", mq);
		this._setQueryMatches(mq.matches);
	}
	fire(e, d) {
		//console.log('fire', e, d);
	}
	componentDidMount() {
		this.queryChanged();
	}
	componentWillUnmount() {
		this._remove();
	}
	render() {
		const {children} = this.props;
		const {queryMatches} = this.state;
		return (
			<div>{queryMatches && children}</div>
		);
	}
}
