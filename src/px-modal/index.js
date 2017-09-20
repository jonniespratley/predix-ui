import React from 'react';
import style from './style.scss';

/**
 * px-modal component
 */
export default ({
  modalHeading = 'Modal',
  btnModalNegative = 'Close',
  btnModalPositive = 'Submit',
  visible,
  children}) =>  {
    let hiddenClass = 'invisible';
    if(visible){
      hiddenClass = '';
    }
  return (
  <div className='px-modal'>
    <div className={`modal flex flex--top flex--center full-height ${hiddenClass}`} role="dialog">
      <section className="modal__content" role='region'>
        <h3 className="modal__title epsilon weight--normal">{modalHeading}</h3>
        <div className="modal__buttons flex flex--right">
          <div className='flex'>
            <button type="button" id="btnModalNegative" className="btn">{btnModalNegative}</button>
            <button type="button" id="btnModalPositive" className="btn">{btnModalPositive}</button>
          </div>
        </div>
      </section>
    </div>
    <style jsx>{style}</style>
  </div>);
}
