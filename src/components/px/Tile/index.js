import React from 'react';
import classnames from 'classnames';

import stylesheet from './px-tile.scss';

/**
 * Tile component
 */
export default ({
  title,
  subtitle,
  description,
  overlayDescription,
  image,
  className,
  actionButtons,
  children,
  imgStyle = {}
}) => {
  const baseClasses = classnames('px-tile', className);

  return (
    <div className={baseClasses}>

      <div className="tile__container">
       <div id="tile" className="tile">
         <div id="thumbnail" className="thumbnail">
           {image && <img src={image} alt={title} style={imgStyle}/>}
         </div>
         <div className='overlay-top-content'>
         <div className='header-wrapper'>
            <div className=''>
              {title && 
              <div className="title epsilon flex flex--justify">
                <span className="title-span truncate">{title}</span>
              </div>}
              {subtitle && 
              <div className="subtitle zeta truncate">
                <span className="subtitle-span">{subtitle}</span>
              </div>}
            </div>
         </div>
         </div>
       </div>
       <div id="overlay" className="overlay">
         <div className="title epsilon">
           <span className="title-span truncate">{title}</span>
          </div>
          <div className="text">
            {overlayDescription && overlayDescription}
            {children && children}
          </div>
          {actionButtons && <div className="footer">{actionButtons}</div>}
       </div>
     </div>
    </div>
  );
}
