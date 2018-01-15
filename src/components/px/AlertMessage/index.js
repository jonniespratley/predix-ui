import React from 'react';
import classnames from 'classnames';

import stylesheet from './px-alert-message.scss';

/**
 * AlertMessage component
 */
export default ({
  messageTitle,
  message,

  action = 'dismiss',
  visible,
  expanded,
  type = 'information',
  autoDismiss = 5000,
  language = 'en',
  children}) => {

  const baseClasses = classnames(
    'alert-message',
    {'alert-message--visible': visible},
    'shadow-notification',
    'flex',
    'flex--left',
    'flex--stretch'
  );
  const severityClasses = classnames(
    'severity',
    'flex',
    'flex--center',
    type
  );

  return (
  <div className='px-alert-message'>
    <div className={baseClasses}>
      <div className={severityClasses}></div>
      <div className="message-column flex flex--middle">
        <div className="message-container">
          <div id="message" className='message'>
            <span className="title u-mr--">{messageTitle}</span>
            <span>{message}</span>
            <div>{children}</div>
          </div>
        </div>
      </div>
      <div className='action flex flex--middle flex--center'>

        {action === 'dismiss' && <button
          onClick={(e) => {this.close(e);}}
          className='btn btn--bare dismiss'>
          <svg viewBox="0 0 22 22" preserveAspectRatio="xMidYMid meet" focusable="false">
            <g>
              <path strokeMiterlimit="10" d="M3 19L19 3M3 3l16 16"></path>
            </g>
          </svg>
        </button>}

        {action === 'acknowledge' && <button id="actionButton"
          onClick={(e) => {this.close(e);}}
          className="btn btn--tertiary">OK</button>}
      </div>


      <style jsx>{stylesheet}</style>

    </div>
  </div>
  );
}
