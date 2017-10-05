import React from 'react';
import stylesheet from './px-view-header.scss';

//https://www.predix-ui.com/#/elements/px-branding-bar
export default ({
  title = 'Current View Title',
  subtitle,
  onMenuButtonClick,
  onBackButtonClick,
  showMenuButton,
  showBackButton,
  backButtonLabel,
  leftContent, rightContent, children }) => (
	<div className='px-view-header vh-header'>
		<div className='vh-header__inner'>
      <div className='left'>
        {leftContent}
        {showMenuButton &&
          <button className="btn flex flex--center toggle__menu" onClick={onMenuButtonClick}>
            Menu
          </button>}
        {showBackButton && <button id="backButton" className="btn" onClick={onBackButtonClick}>{backButtonLabel}</button>}
      </div>
      <div className='vh-header-text vh-header-text--ms-fix vh-header__center'>
  			<div className='regular vh-title truncate'>{title}</div>
  			{subtitle && <div className='zeta vh-subtitle truncate' title={subtitle}>{subtitle}</div>}
      </div>
      <div className='right'>{rightContent}</div>
    </div>
    <style jsx>{stylesheet}</style>
  </div>
);
