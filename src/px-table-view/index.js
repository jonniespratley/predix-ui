import React from 'react';
import classnames from 'classnames';


import style from './style';
import TableRow from './px-table-row';
/**
 * px-table-view component
 */
export default({
  items,
  selectedItem,
  selected,
  tappable,

  //sizes
  flush,
  tiny,
  small,
  regular,
  large,
  huge,

  children}) => {

  const baseClassnames = classnames(
    'table-view',
    {'table-view--flush': flush},
    {'table-view--tiny': tiny},
    {'table-view--small': small},
    {'table-view--regular': regular},
    {'table-view--large': large},
    {'table-view--huge': huge}
  );

	return (
		<div className='px-table-view'>
			<div className={baseClassnames}>
				{items && items.map((item, index) => <TableRow tappable={tappable} key={index} {...item}/>)}
        {children}
			</div>
			<style jsx>{style}</style>
		</div>
	);
}
