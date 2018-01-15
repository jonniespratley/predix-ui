import React from 'react';
import classnames from 'classnames';


import styleheet from './px-table-view.scss';
import TableRow from './TableRow';
/**
 * TableView component
 */
export default({
  style,

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

  const baseClassnames = classnames('px-table-view',
  {'px-table-view--flush': flush},
  {'px-table-view--tiny': tiny},
  {'px-table-view--small': small},
  {'px-table-view--regular': regular},
  {'px-table-view--large': large},
  {'px-table-view--huge': huge}
);
  const tableViewClassnames = classnames(
    'table-view',
    {'table-view--flush': flush},
    {'table-view--tiny': tiny},
    {'table-view--small': small},
    {'table-view--regular': regular},
    {'table-view--large': large},
    {'table-view--huge': huge}
  );

	return (
		<div className={baseClassnames} style={style}>
			<div className={tableViewClassnames}>
				{items && items.map((item, index) => <TableRow tappable={tappable} key={index} {...item}/>)}
        {children}
			</div>
			<style jsx>{styleheet}</style>
		</div>
	);
}
