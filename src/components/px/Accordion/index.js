import React from 'react';
import classNames from 'classnames';
import BaseComponent from '../BaseComponent';
import IronCollapse from '../../iron/IronCollapse';
import Flex from '../../../styles/flex';
import styled from 'styled-components';
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
  display         : flex;
  justify-content : space-between;
  > * {
    user-select   : none;
  }
`;

const AccordionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const AccordionBody = styled.div`
  margin  : 0;
  overflow: auto;
  padding: .5rem;
`;

const AccordionIcon = styled.div`
  display: flex;
  width : 1rem;
  height: 1rem;
  
`;

const AccordionStatus = styled.div`
  margin-right  : 1rem;
  text-transform: none;
`;



class Accordion extends BaseComponent {
  constructor(props){
    super(props, {displayName: 'Accordion'});
    this.state = {
      open: props.open || true
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

  render(){
    const { open } = this.state;
    const {
      headerValue = 'Accordion',
      status,
      disabled,
      showAction,
      style,
      children
    } = this.props;

    const baseClasses = classNames(
      'px-accordion',
      {'px-accordion--disabled': disabled},
      {'px-accordion--open': open}
    );

    const iconClasses = classNames(
      'accordion__icon',
      'actionable--action',
      'flex',
      'flex--center',
      'flex--middle'
    );

    return (
      <div className={baseClasses} style={style}>
        <AccordionContainer>

          <AccordionHeader onClick={this.onClick} disabled={disabled}>
            <Flex middle>
              <span className={iconClasses}>
                {open && <OpenIcon/>}
                {!open && <CloseIcon/>}
              </span>
              <span>{headerValue}</span>
            </Flex>
            <Flex middle>
              <AccordionStatus>{status}</AccordionStatus>
              {showAction && <span className={iconClasses}>action</span>}
            </Flex>
          </AccordionHeader>

          <IronCollapse ref="collapse" opened={open}>
            <AccordionBody>
              {children}
            </AccordionBody>
          </IronCollapse>

        </AccordionContainer>

      </div>
    );
  }
}
//export default CSSModules(Accordion, stylesheet, {allowMultiple: true, handleNotFoundStyleName: 'log'});
export default Accordion;
