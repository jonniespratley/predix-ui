import React from 'react';

import Overlay from '../Overlay';
import Button from '../Button';
import classnames from 'classnames';
import stylesheet from './px-modal.scss';

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
          <div className='flex'>
            {btnModalNegative && <Button id="btnModalNegative"
              label={btnModalNegative}
              onClick={onBtnModalNegativeClick}/>}
            {btnModalPositive && <Button primary
              disabled={btnModalPositiveDisabled}
              id="btnModalPositive"
              label={btnModalPositive}
              onClick={onBtnModalPositiveClick}/>}
          </div>
        </div>
      </section>
    </div>
    <style>{`${stylesheet}`}</style>
  </div>);
}
