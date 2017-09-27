import React from 'react';

import Overlay from '../px-overlay';
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
            {btnModalNegative && <button type="button" id="btnModalNegative" className="btn"
              onClick={(e) => onBtnModalNegativeClick(e)}>{btnModalNegative}</button>}
            {btnModalPositive && <button type="button"
              disabled={btnModalPositiveDisabled}
              id="btnModalPositive"
              className="btn"
              onClick={(e) => onBtnModalPositiveClick(e)}>{btnModalPositive}</button>}
          </div>
        </div>
      </section>
    </div>
    <style jsx>{stylesheet}</style>
  </div>);
}
