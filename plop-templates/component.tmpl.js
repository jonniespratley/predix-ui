import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * @class {{titleCase name}}
 */
class {{titleCase name}} extends Component {
	render() {
    const {
			label,
			children
		} = this.props;

		return (
			<div>
				<h4>{label}</h4>
				<div>{children}</div>
			</div>
		);
	}
}

{{titleCase name}}.propTypes = {
  label: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.node
  ])
};

export default {{titleCase name}};
