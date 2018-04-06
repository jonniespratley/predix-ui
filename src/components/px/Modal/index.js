import React from 'react';

import Overlay from '../Overlay';
import Button from '../Button';
import classnames from 'classnames';
import stylesheet from './px-modal.scss';

import styled from 'styled-components';
import Flex from '../../../styles/flex';

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
  children
}) =>  {

  const modalClassnames = classnames(
    'modal',
    'flex',
    'flex--middle',
    'flex--center',
    'full-height',
    {'invisible' : !opened}
  );

  return (
  <div className='px-modal'>
    <Overlay opened={opened} onOverlayClick={(e) => onBackdropClick(e)}/>
    <div className={modalClassnames} role="dialog">
      <section className="modal__content" role='region'>
        <h3 className="modal__title epsilon weight--normal">{headerText}</h3>
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
      </section>
    </div>
  </div>
  );
}
