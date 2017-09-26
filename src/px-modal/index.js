import React from 'react';
import classnames from 'classnames';
import style from './style.scss';

/**
 * px-modal component
 */
export default ({
  modalHeading = 'Modal',
  btnModalNegative,
  btnModalPositive,
  visible,
  onBackdropClick,
  children}) =>  {

    const modalBackdropClassnames = classnames(
      'modal__backdrop',
      'fadeout',
      {'modal__backdrop--invisible' : !visible}
    );

    const modalClassnames = classnames(
      'modal',
      'flex',
      'flex--middle',
      'flex--center',
      'full-height',
      {'invisible' : !visible}
    )
  return (
  <div className='px-modal'>
    <div className={modalBackdropClassnames}
      onClick={(e) => onBackdropClick(e)}
      ></div>
    <div className={modalClassnames} role="dialog">
      <section className="modal__content" role='region'>

        <h3 className="modal__title epsilon weight--normal">{modalHeading}</h3>

        <div>
          {children}
        </div>


        <div className="modal__buttons flex flex--right">

          <div className='flex'>
            {btnModalNegative && <button type="button" id="btnModalNegative" className="btn">{btnModalNegative}</button>}
            {btnModalPositive && <button type="button" id="btnModalPositive" className="btn">{btnModalPositive}</button>}
          </div>

        </div>
      </section>
    </div>
    <style jsx>{style}</style>
  </div>);
}
