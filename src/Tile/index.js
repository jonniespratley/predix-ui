import React from 'react';
import classnames from 'classnames';

import stylesheet from './px-tile.scss';

/**
 * Tile component
 */
export default ({
  title = 'Tile',
  description,
  image,
  children
}) => {
  const baseClasses = classnames('px-tile');

  return (
    <div className={baseClasses}>
      <div className="tile__container">
       <div id="tile" className="tile">
         <div id="thumbnail" className="thumbnail">
           <img src={image}/>
         </div>
         <div className="title epsilon">
           <span className="title-span truncate">{title}</span>
         </div>
       </div>
       <div id="overlay" className="overlay">
         <div className="title epsilon">
           <span className="title-span truncate">{title}</span>
       </div>
        <div className="text">
          {description && description}
          {children && children}
        </div>
        <div className="footer">
        </div>
       </div>
     </div>
      <style jsx>{stylesheet}</style>
    </div>
  );
}
