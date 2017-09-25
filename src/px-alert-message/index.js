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

  const baseClasses = classnames(
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
        <div className='action flex flex--middle flex--center'>
          <button className='btn btn--bare dismiss'>
            <svg viewBox="0 0 22 22" preserveAspectRatio="xMidYMid meet" focusable="false">
              <g>
                <path strokeMiterlimit="10" d="M3 19L19 3M3 3l16 16"></path>
              </g>
            </svg>
          </button>
        </div>

      </div>



      <style jsx>{style}</style>

    </div>
  </div>
  );
}
