import React from 'react';
import classNames from 'classnames';
import BaseComponent from '../BaseComponent';
import IronCollapse from '../../iron/IronCollapse';
import Flex from '../../../styles/flex';
import styled, {css} from 'styled-components';
import Icon from '../IconSet/Icon';
const styles = {
  width: `16px`,
  height: `16px`
};
const svgStyles = {
  pointerEvents: 'none',
  display: 'block',
  height: '100%',
  width: '100%'
};
const CloseIcon = () => (<i className="px-icon px-icon-utl px-utl-chevron" style={styles} ><svg viewBox="0 0 16 16" preserveAspectRatio="xMidYMid meet" style={svgStyles}><g id="px-utl-chevron-right"><path strokeLinejoin="round" d="M6.2 13.2l5.4-5.5-5.5-5.5"></path></g></svg></i>);
const OpenIcon = () => (<i className="px-icon px-icon-utl px-utl-chevron-down" style={styles}><svg viewBox="0 0 16 16" preserveAspectRatio="xMidYMid meet" style={svgStyles}><g id="px-utl-chevron"><path d="M2.4 6.2l5.5 5.5 5.5-5.5"></path></g></svg></i>);

const AccordionHeader = styled.div`
  font-family: "GE Inspira Sans";
  padding: .5rem;
  margin-bottom   : 0.3333rem;
  cursor          : pointer;
  user-select     : none;
  
  background-color: var(--px-accordion-header-background-color, white);
  color           : var(--px-accordion-header-color, black);
  
  color: var(--px-headings-heading-subsection-color);
  background-color: var(--px-headings-heading-subsection-background);
  
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
  constructor(props){
    super(props);
    this.state = {
      open: props.opened || true
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick(){
    if(!this.props.disabled){
      this.setState((prevState, props) => ({
        open: !prevState.open
      }));
    }
  }

  onActionClick(e){
    e.preventDefault();
  }
  
  componentDidUpdate(){
    const {onCollapsed, onExpanded} = this.props;
    if(this.state.open){
      //console.log('Trigger', 'onExpanded');
    } else {
      //console.log('Trigger', 'onCollapsed');
    }
  }
  componentWillReceiveProps(nextProps){
    this.setState({open: nextProps.opened});
  }

  render(){
    const { open } = this.state;
    const {
      headerValue = 'Accordion',
      status,
      disabled,
      showAction,
      onActionClick,
      icons = {
        more: 'px-utl:chevron-right',
        left: 'px-utl:chevron',
        action: 'px-utl:edit'
      },
      children
    } = this.props;
    const {more, less, action} = icons;
    
    const baseClasses = classNames(
      'px-accordion',
      {'px-accordion--disabled': disabled},
      {'px-accordion--open': open}
    );

    return (
      <AccordionContainer className={baseClasses}>
        <AccordionHeader disabled={disabled}>
          <Flex item={true} onClick={this.onClick} >
            <span>
              {open && <OpenIcon />}
              {!open && <CloseIcon />}
            </span>
            <AccordionHeaderText>{headerValue}</AccordionHeaderText>
          </Flex>
          <Flex middle>
            {status && <AccordionStatus>{status}</AccordionStatus>}
            {showAction && <AccordionAction onClick={this.onActionClick.bind(this)}> <Icon icon={action} size={16}/> </AccordionAction>}
          </Flex>
        </AccordionHeader>
        <IronCollapse ref="collapse" opened={open}>
          <AccordionBody>
            {children}
          </AccordionBody>
        </IronCollapse>
      </AccordionContainer>
    );
  }
}
Accordion.displayName = 'Accordion';
export default Accordion;
