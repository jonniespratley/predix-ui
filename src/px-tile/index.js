import React from 'react';
import classnames from 'classnames';

import style from './style.scss';

/**
 * px-tile component
 */
export default ({
  title = 'px-tile',
  description,
  image,
  children}) => {
  const baseClasses = classnames('px-tile', {
    'px-tile--children': children
  });

  return (
    <div className={baseClasses}>
      <div className="tile__container">
       <div id="tile" className="tile">
         <div id="thumbnail" className="thumbnail">
           <img src={image}/>
         </div>
         <div className="title epsilon"><span className="title-span truncate">{title}</span></div>
       </div>
       <div id="overlay" className="overlay">
         <div className="title epsilon"><span className="title-span truncate">{title}</span></div>
         <div className="text">{description}</div>
         <div className="footer">

         </div>
       </div>
     </div>
      <style jsx>{style}</style>
    </div>
  );
}
