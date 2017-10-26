import React from 'react';
import PredixLogo from './px-predix-svg-logo';
import Logo from './px-ge-svg-logo';
import stylesheet from './px-branding-bar.scss';

//https://www.predix-ui.com/#/elements/px-branding-bar
export default ({ title = 'Predix Design System', powered = 'Powered by', children }) => (
	<div className='px-branding-bar flex flex--justify'>
		<div className='u-ml flex flex--middle'>
			<span className='u-ml-- flex flex--middle'><Logo/></span>
			<label className='u-ml-- flex flex--middle'>{title}</label>
			{children && <div>{children}</div>}
		</div>
		<div className='flex flex--middle'>
			<span className='u-mr-- px-branding-bar__powered-by-text'>{powered}</span>
			<span className='u-mr'><PredixLogo size={10}/></span>
		</div>
		<style jsx>{stylesheet}</style>
	</div>
);
