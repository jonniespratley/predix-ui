import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled, { css } from 'styled-components';
import IronCollapse from '../iron/IronCollapse';
import Flex from '../Flex';
import Icon from '../Icon/Icon';

const styles = {
  width: '16px',
  height: '16px'
};

const svgStyles = {
  pointerEvents: 'none',
  display: 'block',
  height: '16px',
  width: '16px',
  fill: 'none',
  stroke: 'currentColor'
};
const CloseIcon = () => (<i className="px-icon px-icon-utl px-utl-chevron" style={styles}><svg viewBox="0 0 16 16" preserveAspectRatio="xMidYMid meet" style={svgStyles}><g id="px-utl-chevron-right"><path strokeLinejoin="round" d="M6.2 13.2l5.4-5.5-5.5-5.5" /></g></svg></i>);
const OpenIcon = () => (<i className="px-icon px-icon-utl px-utl-chevron-down" style={styles}><svg viewBox="0 0 16 16" preserveAspectRatio="xMidYMid meet" style={svgStyles}><g id="px-utl-chevron"><path d="M2.4 6.2l5.5 5.5 5.5-5.5" /></g></svg></i>);

const AccordionHeader = styled.div`
  padding: .5rem;
  margin-bottom   : 0.3333rem;
  cursor          : pointer;
  user-select     : none;

  color: var(--px-headings-heading-subsection-color, black);
  background-color: var(--px-headings-heading-subsection-background, whitesmoke);

  background-color: var(--px-accordion-header-background-color, whitesmoke);
  color           : var(--px-accordion-header-color, black);

  

  display         : flex;
  justify-content : space-between;
  > * {
    user-select   : none;
  }

  ${props => props.disabled && css`
    cursor:not-allowed;
    pointerEvents: none;
  `}
`;
AccordionHeader.displayName = 'AccordionHeader';
AccordionHeader.defaultProps = {
  className: 'px-accordion__header'
};

const AccordionHeaderText = styled.span`
  text-transform:uppercase;
  margin-left: .2rem;
`;
AccordionHeaderText.displayName = 'AccordionHeaderText';

const AccordionContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "GE Inspira Sans";
  -webkit-transition-duration: 300ms;
  -moz-transition-duration: 300ms;
  transition-duration: 300ms;
`;
AccordionContainer.displayName = 'AccordionContainer';
AccordionContainer.defaultProps = {
  className: 'px-accordion__container'
};

const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
`;
AccordionSection.displayName = 'AccordionSection';
AccordionSection.defaultProps = {
  className: 'px-accordion__section'
};

const AccordionBody = styled.div`
  margin  : 0;
  overflow: auto;
  padding: .5rem;
`;
AccordionBody.displayName = 'AccordionBody';
AccordionBody.defaultProps = {
  className: 'px-accordion__body'
};

const AccordionIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width : 1rem;
  height: 1rem;
`;
AccordionIcon.displayName = 'AccordionIcon';

const AccordionStatus = styled.div`
  margin-right  : 1rem;
  text-transform: none;
`;
AccordionStatus.displayName = 'AccordionStatus';

const AccordionAction = styled.div`
  cursor: pointer;
  color: var(--px-actionable-alt-text-color, blue);
  background: transparent;
  border: transparent;
  outline: none;
  --iron-icon-width: 1rem;
  --iron-icon-height: 1rem;
`;
AccordionAction.displayName = 'AccordionAction';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      closed: props.closed
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const { disabled } = this.props;
    if (!disabled) {
      this.setState(prevState => ({
        closed: !prevState.closed
      }));
    }
  }

  componentDidUpdate() {
    const { onCollapsed, onExpanded } = this.props;
    const { closed } = this.state;
    if (!closed) {
      onExpanded ? onExpanded(this.state) : null;
    } else {
      onCollapsed ? onCollapsed(this.state) : null;
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ closed: nextProps.closed });
  }

  render() {
    const { closed } = this.state;
    const {
      headerText,
      headerValue,
      status,
      disabled,
      actions,
      showAction,
      onActionClick,
      icons,
      children
    } = this.props;
    const { action } = icons;
    const baseClasses = classNames(
      'px-accordion',
      { 'px-accordion--disabled': disabled },
      { 'px-accordion--open': !closed }
    );
    const headerClasses = classNames('px-accordion__header');

    return (
      <AccordionContainer className={baseClasses}>
        <AccordionHeader disabled={disabled} className={headerClasses}>
          <Flex item onClick={this.onClick}>
            <span>
              {!closed && <OpenIcon />}
              {closed && <CloseIcon />}
            </span>
            <AccordionHeaderText>{headerText || headerValue}</AccordionHeaderText>
          </Flex>
          <Flex middle>
            {status && <AccordionStatus>{status}</AccordionStatus>}
            {showAction
            && (
            <AccordionAction onClick={onActionClick}>
              <Icon icon={action} size={16} />
            </AccordionAction>
            )}
            {actions
            && (
            <AccordionAction>
              {actions()}
            </AccordionAction>
            )}
          </Flex>
        </AccordionHeader>
        <IronCollapse opened={!closed}>
          <AccordionBody>
            {children}
          </AccordionBody>
        </IronCollapse>
      </AccordionContainer>
    );
  }
}

Accordion.displayName = 'Accordion';

Accordion.propTypes = {
  headerText: PropTypes.string,
  headerValue: PropTypes.string,
  status: PropTypes.string,
  closed: PropTypes.bool,
  disabled: PropTypes.bool,
  actions: PropTypes.node,
  showAction: PropTypes.bool,
  onExpanded: PropTypes.func,
  onCollapsed: PropTypes.func,
  onActionClick: PropTypes.func,
  icons: PropTypes.shape({
    more: PropTypes.string,
    left: PropTypes.string,
    action: PropTypes.string
  }),
  children: PropTypes.node
};

Accordion.defaultProps = {
  headerText: null,
  headerValue: null,
  status: null,
  closed: null,
  disabled: null,
  actions: null,
  showAction: null,
  onCollapsed: null,
  onExpanded: null,
  onActionClick: null,
  icons: {
    more: 'px-utl:chevron-right',
    left: 'px-utl:chevron',
    action: 'px-utl:edit'
  },
  children: null
};

export default Accordion;
