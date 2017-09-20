import React from 'react';

import styles from './style.scss';

//https://www.predix-ui.com/#/elements/px-branding-bar
export default ({ title = 'Current View Title', subtitle, children }) => (
	<div className='px-view-header'>
		<div className='px-view-header__actionable'>Back</div>
		<div className='px-view-header__text'>
			<div className='px-view-header__title truncate'>{title}</div>
			{subtitle && <div className='zeta px-view-header__subtitle truncate' title={subtitle}>{subtitle}</div>}
		</div>
		<div className='px-view-header__actionable'>Next</div>
    <style jsx>{styles}</style>
	</div>
);
