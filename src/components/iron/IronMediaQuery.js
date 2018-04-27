import React from 'react';
import PropTypes from 'prop-types';

/**
 * @class IronMediaQuery
 * @description React implementation of https://github.com/PolymerElements/iron-media-query
 */
class IronMediaQuery extends React.Component {
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
      queryMatches: false,
      query: props.query
    };
    this.namedQueries = {
      xs: '(max-width: 21.33rem)',
      sm: '(min-width: 22rem) and (max-width: 49.06rem)',
      md: '(min-width: 51.2rem) and (max-width: 68.2rem)',
      lg: '(min-width: 68.26rem) and (max-width: 80rem)',
      xl: '(min-width: 85.33rem)'
    };
  }

  _setQueryMatches(m) {
    const s = this.state;
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
    let { query } = this.state;
    if (this.namedQueries[query]) {
      query = this.namedQueries[query];
    }
    if (!query) {
      return;
    }
    if (!this.props.full && query[0] !== '(') {
      query = `(${query})`;
    }
    this._mq = window.matchMedia(query);
    this._add();
    this.queryHandler(this._mq);
  }

  queryHandler(mq) {
    this._setQueryMatches(mq.matches);
  }

  componentDidMount() {
    this.queryChanged();
  }

  componentWillUnmount() {
    this._remove();
  }

  render() {
    const { children } = this.props;
    const { queryMatches } = this.state;
    return (
      <div>{queryMatches && children}</div>
    );
  }
}

IronMediaQuery.defaultProps = {
  children: null,
  onChange: null,
  onMatch: null,
  query: null,
  full: false
};

IronMediaQuery.propTypes = {
  children: PropTypes.node,
  onChange: PropTypes.func,
  onMatch: PropTypes.func,
  query: PropTypes.string,
  full: PropTypes.bool
};

export default IronMediaQuery;
