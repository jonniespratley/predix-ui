import React from 'react';

import Overlay from '../Overlay';
import Button from '../Button';
import classnames from 'classnames';
import stylesheet from './px-modal.scss';

import styled from 'styled-components';
import Flex from '../../flex';

/**
 * Modal component
 */
export default ({
  style,
  modalHeading = 'Modal',
  btnModalNegative,
  onBtnModalNegativeClick,
  btnModalPositive,
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
        <h3 className="modal__title epsilon weight--normal">{modalHeading}</h3>
        <div>
          {children}
        </div>
        <div className="modal__buttons flex flex--right">
          <Flex right>
          {btnModalNegative && 
            <Button id="btnModalNegative"
                onClick={onBtnModalNegativeClick}>{btnModalNegative}</Button>
            }
            {btnModalPositive && 
            <Button primary
              id="btnModalPositive"
              disabled={btnModalPositiveDisabled}
              onClick={onBtnModalPositiveClick}>
                {btnModalPositive}
              </Button>
              }
          </Flex>
        </div>
      </section>
    </div>
  </div>
  );
}
