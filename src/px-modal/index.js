import React from 'react';

import Overlay from '../px-overlay';
import Button from '../Button';
import classnames from 'classnames';
import stylesheet from './style.scss';

/**
 * px-modal component
 */
export default ({
  style,
  modalHeading = 'Modal',
  btnModalNegative,
  onBtnModalNegativeClick,
  btnModalPositive,
  onBtnModalPositiveClick,
  visible,
  isOpen,
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
      {'invisible' : !visible}
    );

  return (
  <div className='px-modal'>
    <Overlay visible={visible} onOverlayClick={(e) => onBackdropClick(e)}/>
    <div className={modalClassnames} role="dialog">
      <section className="modal__content" role='region'>
        <h3 className="modal__title epsilon weight--normal">{modalHeading}</h3>
        <div>
          {children}
        </div>
        <div className="modal__buttons flex flex--right">
          <div className='flex'>
            {btnModalNegative && <Button id="btnModalNegative"
              label={btnModalNegative}
              onClick={(e) => onBtnModalNegativeClick(e)}/>}
            {btnModalPositive && <Button primary
              disabled={btnModalPositiveDisabled}
              id="btnModalPositive"
              label={btnModalPositive}
              onClick={(e) => onBtnModalPositiveClick(e)}/>}
          </div>
        </div>
      </section>
    </div>
    <style jsx>{stylesheet}</style>
  </div>);
}
