import React from 'react';
import style from './style.scss';

/**
 * px-alert-label component
 */
export default ({label, type, badge, children}) => {
  const _isCircle = (t) =>{
    return t === 'unknown';
  };

  const _getPoints = (t) => {
    if(t === 'important') {
      return '16.5,3 32,30 1,30';
    }
    else if(t === 'warning') {
      return '16,0.5 32.5,16 16,32.5, 0.5,16';
    }
    else if(t === 'info' || t === 'information') {
      return '6.6,32.5 26.4,32.5 32.5,13 16,0.5 0.5,13';
    }
    else {
      return '3,3 3,30 30,30 30,3';
    }
  };
  const classNames = `alertlabel ${type} ${badge}`;

  return (
    <div className='px-alert-label'>
      <span className={classNames}>
        {badge && <div>
          {!_isCircle(type) &&
            <svg className="svg-canvas" viewBox="0 0 33 33">
              <polygon id="polygon" points={_getPoints(type)}/>
            </svg>
          }
          {_isCircle(type) &&
            <svg className="svg-canvas" viewBox="0 0 33 33">
              <circle id="circle" cx="16" cy="16" r="15"/>
            </svg>
          }
        </div>}
        <div className='label'>
          <span className='label__text'>{label}</span>
        </div>
      </span>
      <style jsx>{style}</style>
    </div>
  );

};
