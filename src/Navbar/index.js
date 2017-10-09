import React from 'react';
import stylesheet from './px-navbar.scss';

/**
 * Navbar component
 */
export default({
	title,
	subtitle,
	showBackButton,
	backButtonLabel,
	showMenuButton,
  onBackButtonClick,
  onMenuButtonClick,
	rightContent,
	children
}) => (
	<div className='px-navbar'>
		<nav id="navbar" className="navbar">
			<div className="navbar__inner">
				<div id="left" className="navbar__left">
					{showMenuButton &&
						<button className="navbar__button flex flex--center toggle__menu" onClick={onMenuButtonClick}>
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24h-24z" fill="none"/><path d="M3 18h18v-2h-18v2zm0-5h18v-2h-18v2zm0-7v2h18v-2h-18z"/></svg>
            </button>}
					{showBackButton && <button id="backButton" className="navbar__button" onClick={onBackButtonClick}>{backButtonLabel}</button>}
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

		<style jsx>{stylesheet}</style>
	</div>
);
