import React from 'react';
import classnames from 'classnames';

import stylesheet from './style.scss';


import NavItem from './px-app-nav-item';

/**
 * px-app-nav component
 */
export default ({
  label = 'px-app-nav',
  vertical,
  opened = true,
  items,
  selectedItem,
  style,
  children
}) => {

  const baseClasses = classnames(
    'px-app-nav',
    'app-nav',
    { 'vertical': vertical },
    { 'vertical-opened': opened },
    { 'px-app-nav--children': children }
  );

  return (
    <nav className={baseClasses} style={style}>
      <section className='app-nav__items'>


        {items && items.map((item, index) => <NavItem key={index} item={item} {...item}/>)}


      </section>
      {/* Horizontal menu */}

      {/* Overflowed or collapsed */}


      <div>{children}</div>
      <style jsx>{stylesheet}</style>
    </nav>
  );
}
