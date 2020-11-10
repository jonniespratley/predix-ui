import React from 'react';
import PropTypes from 'prop-types';
import use from 'reuse';

const Base = ({ use: T = 'div', ...props }) => <T {...props} />;

Base.propTypes = {
  use: PropTypes.string
};

Base.defaultProps = {
  use: 'div'
};
export default use(Base);
