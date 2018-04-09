import React from 'react';

import Overlay from '../Overlay';
import Button from '../Button';
import classnames from 'classnames';
//import stylesheet from './px-modal.scss';

import styled, {css} from 'styled-components';
import Flex from '../../../styles/flex';




const Modal = styled.div`
 position        : absolute;

  background-color: transparent;
  visibility      : hidden;
  ${props => props.zIndex && css`
    z-index      : ${props.zIndex}
  `}
  ${props => props.fixed && css`
    position: fixed;
  `}
  ${props => props.opened && css`
    visibility      : visible;
  `}
`;

const ModalContent = styled.div`
  z-index         : 900;
  ${props => props.zIndex && css`
    z-index      : ${props.zIndex}
  `}
  top: 50%;
  left: 50%;
  
  transform: translate(-50%, -50%);
 
  max-height: calc(100% - 2rem);
  max-width: calc(100% - 2rem);
  overflow: auto;
  white-space: normal;
  word-wrap: break-word;
  background-color: var(--px-modal-background-color, white);
  color: var(--px-modal-text-color, black);
  
  box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.2);
  padding: 1rem;
  position: fixed;
  ${props => props.fixed && css`
    position: fixed;
  `}
  @media screen and (max-width: 44.9375em) {
    width: 100%;
  }
  @media screen and (min-width: 45em) {
    min-width: 400px;
  }
`;

const ModalTitle = styled.h3`
  margin-bottom: 2rem;
  margin-top: 0;
`;





/**
 * Modal component
 */
export default ({
  style,
  headerText,
  rejectText,
  onBtnModalNegativeClick,
  acceptText,
  onBtnModalPositiveClick,
  visible,
  opened,
  onBackdropClick,
  btnModalPositiveDisabled = false,
  children,
  fixed, 
  zIndex,
  modalContentElement
}) =>  {


  return (
  <Modal opened={opened} fixed={fixed} zIndex={zIndex}>
    <Overlay opened={opened} onOverlayClick={(e) => onBackdropClick(e)}/>
      
      <ModalContent role='region'  fixed={fixed} zIndex={zIndex}>
        {modalContentElement && modalContentElement}
        {!modalContentElement && 
          <div>
           
            <ModalTitle>{headerText}</ModalTitle>
            <div>
              {children}
            </div>
            <div className="modal__buttons flex flex--right">
              <Flex right>
              {rejectText && 
                <Button id="btnModalNegative"
                    onClick={onBtnModalNegativeClick}>
                    {rejectText}
                  </Button>
                }
                {acceptText && 
                <Button primary
                  id="btnModalPositive"
                  primary
                  disabled={btnModalPositiveDisabled}
                  onClick={onBtnModalPositiveClick}>
                    {acceptText}
                  </Button>
                  }
              </Flex>
            </div>
          </div>
        }
        
      </ModalContent>
  </Modal>
  );
}
