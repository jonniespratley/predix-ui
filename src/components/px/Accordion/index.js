
import React from 'react';
import BaseComponent from '../BaseComponent';
import classNames from 'classnames';

//import stylesheet from './px-accordion.scss';

import IronCollapse from '../../iron/IronCollapse';
import Flex from '../../../styles/flex';

import styled from 'styled-components';


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


import CSSModules from 'react-css-modules';

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
                {open && '-'}
                {!open && '+'}
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
