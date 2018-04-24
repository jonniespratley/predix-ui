import React from 'react';
import classnames from 'classnames';

export default class SvgIcon extends React.Component {
  render() {
    const {
      children, classes, className, titleAccess, viewBox
    } = this.props;
    return (
      <svg
        className={classnames(classes, className)}
        focusable="false"
        viewBox={viewBox}
        aria-hidden={titleAccess ? 'false' : 'true'}
      >
        {titleAccess ? <title>{titleAccess}</title> : null}
        {children}
      </svg>
    );
  }
}
