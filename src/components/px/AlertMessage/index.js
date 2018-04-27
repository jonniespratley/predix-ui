import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import Button from '../Button';

const fadeIn = keyframes`
  from {
    opacity: 0;
    left: 4rem;
  }
  to {
    opacity: 1;
    left: 0;
  }
`;
const fadeOut = keyframes`
  from {
    opacity: 1;
    max-height: 6.66667rem;
    min-height: 0px;
  }
  to {
    opacity: 0;
    max-height: 0px;
    min-height: 0px;
    padding-top: 0px;
    padding-bottom: 0px;
  }
`;

const AlertMessage = styled.div`
  visibility: hidden;
  display: none;
  width: var(--px-alert-message-width, auto);
  margin: 0.33333rem;
  padding: 0.66667rem;
  min-height: 4rem;
  word-wrap: break-word;
  word-break: break-word;
  background-color: var(--px-alert-message-background-color, white);
  position: relative;
  min-height: 0px;
  opacity: 0;
  max-height: 0px;
  padding-top: 0px;
  padding-bottom: 0px;
  box-shadow: 0px 4px 8px var(--px-shadow-notification, rgba(0, 0, 0, 0.2));
  animation: ${fadeOut} 0.4s cubic-bezier(0.78, 0.13, 0.16, 0.87);
  align-items: center;

  ${props => props.visible && css`
    visibility: visible;
    display: flex;
    opacity: 1;
    max-height: none;
    padding-top: 0.66667rem;
    padding-bottom: 0.66667rem;
    animation: ${fadeIn} 0.4s cubic-bezier(0.78, 0.13, 0.16, 0.87);
  `}
  button {
    color: var(--px-alert-message-dismiss-icon-color, gray);
    outline: none;
    max-width: 50px;

    svg {
      height: 1.33333rem;
      width: 1.33333rem;
      fill: var(--px-alert-message-dismiss-icon-color, gray);
      stroke: var(--px-alert-message-dismiss-icon-color, gray);
    }
  }
`;

const AlertMessageContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 2;
  margin-left: 0.66667rem;
  margin-right: 0.66667rem;
`;

const AlertMessageActions = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  .dismiss {
    width: 44px;
    height: 44px;
    min-width: auto;
  }
`;

const AlertMessageSeverity = styled.div`
  min-height: 4rem;
  width: 4rem;
  margin-left: -0.6666rem;
  margin-top: -0.6666rem;
  margin-bottom: -0.6666rem;
  padding-top: 1rem;

  ${props => props.type === 'important' && css`
    background-color: var(--px-alert-message-color--important, red);
  `}

  ${props => (props.type === 'information' || props.type === 'info') && css`
    background-color: var(--px-alert-message-color--information, blue);
  `}

  ${props => props.type === 'warning' && css`
    background-color: var(--px-alert-message-color--warning, orange);
  `}

  ${props => props.type === 'error' && css`
    background-color: var(--px-alert-message-color--error, yellow);
  `}

  ${props => props.type === 'unknown' && css`
    background-color: var(--px-alert-message-color--unknown, gray);
  `}

  ${props => props.type === 'healthy' && css`
    background-color: var(--px-alert-label-background-color--healthy,green);
  `}

  ${props => props.type === 'success' && css`
    background-color: var(--px-alert-label-background-color--healthy,green);
  `}
`;

const Message = styled.div`
  color: var(--px-alert-message-text-color, black);
  line-height: 1.06667rem;
  font-size: 0.8rem;
  padding: 0;
  margin: 0;
`;

/**
 * AlertMessage component
 */
const Component = ({
  messageTitle,
  message,
  action,
  visible,
  actions,
  onActionClick,
  onDismiss,
  type,
  children
}) => (
  <AlertMessage visible={visible}>
    <AlertMessageSeverity type={type} />
    <AlertMessageContainer>
      <Message>
        <strong>{messageTitle} </strong>
        <span>{message}</span>
        <div>{children}</div>
      </Message>
    </AlertMessageContainer>
    <AlertMessageActions>
      {!actions && action === 'dismiss' &&
        <Button onClick={onDismiss} theme="bare" className="dismiss">
          <svg viewBox="0 0 22 22" preserveAspectRatio="xMidYMid meet" focusable="false">
            <g>
              <path strokeMiterlimit="10" d="M3 19L19 3M3 3l16 16" />
            </g>
          </svg>
        </Button>}

      {actions && actions()}

      {!actions && action === 'acknowledge' &&
        <Button
          id="actionButton"
          onClick={onActionClick}
          theme="tertiary"
        >OK
        </Button>}
    </AlertMessageActions>
  </AlertMessage>
);

Component.defaultProps = {
  action: 'dismiss',
  type: 'information',
  message: null,
  messageTitle: null,
  visible: false,
  actions: null,
  children: null,
  onActionClick: null,
  onDismiss: null
};

Component.propTypes = {
  action: PropTypes.string,
  type: PropTypes.string,
  message: PropTypes.string,
  messageTitle: PropTypes.string,
  visible: PropTypes.bool,
  actions: PropTypes.func,
  onActionClick: PropTypes.func,
  onDismiss: PropTypes.func,
  children: PropTypes.node
};

export default Component;
