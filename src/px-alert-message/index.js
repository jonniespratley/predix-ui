import React from 'react';
import classnames from 'classnames';

import style from './style.scss';

/**
 * px-alert-message component
 */
export default ({
  label = 'px-alert-message',
  messageTitle,
  message,
  type = 'information',
  action,
  autoDismiss = 5000,
  language = 'en',
  expanded,
  children}) => {

  const baseClasses = classnames('px-alert-message',
    'alert-message',
    'alert-message--visible',
    'shadow-notification',
    'flex',
    'flex--left',
    'flex--stretch'
  );
  const severityClasses = classnames(
    'severity',
    'flex',
    'flex--center',
    type);

  return (
    <div className={baseClasses}>
      <div className={severityClasses}></div>
      <div className="message-column flex flex--middle">
        <div className="message-container">
          <div id="message">
            <span className="title">{messageTitle}</span>
            <span>{message}</span>
          </div>

        </div>
      </div>
      <div>{children}</div>
      <style jsx>{style}</style>
    </div>
  );
}
