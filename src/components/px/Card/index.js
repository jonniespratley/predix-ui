import React from 'react';
import Icon from '../IconSet/Icon';
import styled, {css} from 'styled-components';

const Card = styled.div`
  display: block; 
  width: 100%; 
  background-color: var(--px-card-background-color, lightgray); 
  padding-bottom: 4rem; 
  border-top: 1px solid var(--px-card-border-color, gray); 
  border: var(--px-card-border);
`;

const CardHeader = styled.header`
 padding: 1rem; 
 padding-top: 1.33333rem; 
 border-bottom: 1px solid var(--px-card-border-color, transparent); 
 margin-bottom: 1rem; 
 display: flex;
 justify-content: space-between;
 align-items: center;
 user-select: none;
`;

const CardTitle = styled.span`
 height: 2rem; 
 line-height: 2rem; 
 text-transform: uppercase;
 color: var(--px-card-header-color, black);
`;

const CardBody = styled.section`
  padding-left: 1rem; 
  padding-right: 1rem;
  ${props => props.fullBleed && css`
    padding: none;
  `}
`;

const CardIcon = styled.span`
 
  color: var(--px-card-icon-color, black); 
  cursor: auto; 
  
  color: var(--px-card-action-icon-color, black); 
  cursor: pointer; 
  margin-right: .5rem;
  
  &:hover{
    color: var(--px-card-action-icon-color--hover, blue);
  }
  &:active{
    color: var(--px-card-action-icon-color--pressed, blue); 
  }
  &:not(:last-of-type) { 
    margin-right: .66666rem; 
  }
`;

const CardComponent = ({
  headerText,
  icon,
  actions,
  fullBleed,
  children
}) => (
  <Card className='px-card'>
    <CardHeader className='px-card-header'>
    
      <CardTitle>
      {icon && <CardIcon><Icon icon={icon} size={22} /></CardIcon>}
        {headerText}
      </CardTitle>

      {actions && actions()}
    </CardHeader>
    <CardBody fullBleed={fullBleed} className='px-card-body'>
      {children}
    </CardBody>
  </Card>
);

CardComponent.displayName = 'Card';

export default CardComponent;
