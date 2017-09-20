import React from 'react';
import style from './style.scss';

/**
 * px-navbar component
 */
export default({
	title,
	subtitle,
	back,
	backLabel,
	drawer,
	rightContent,
	children
}) => (
	<div className='px-navbar'>

		<nav id="navbar" className="navbar">
			<div className="navbar__inner">
				<div id="left" className="navbar__left">
					{drawer && <button className="navbar__button flex flex--center">Menu</button>}
					{back && <button id="backButton" className="navbar__button" >{backLabel}</button>}
				</div>
				<div className="navbar__center">
					<span className="navbar__title">
						<span>{title}</span>
					</span>
					<span className="navbar__subtitle">
						<span>{subtitle}</span>
					</span>
				</div>
				<div id="right" className="navbar__right">
					{rightContent}
				</div>
			</div>
		</nav>

		<style jsx>
			{
				style
			}</style>
	</div>
);
