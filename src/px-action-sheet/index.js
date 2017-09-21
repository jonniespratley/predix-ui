import React from 'react';
import style from './style.scss';
import classnames from 'classnames';

/**
    * px-action-sheet component
    */
export default class ActionSheet extends React.Component {
  toggle() {
    console.log('toggle');
  }
  open() {
    console.log('open');
  }
  close() {
    console.log('close');
  }
  render() {
    const {
      opened,
      children
    } = this.props;

    //base
    let baseClasses = classnames('px-action-sheet',
      {'px-action-sheet--is-opened': opened}
    );
    
    //overlay
    let overlayClasses = classnames('c-action-dialog--mask',
      {'c-action-dialog--mask--is-opened': opened}
    );

    //style
    let classes = classnames(
      'c-action-sheet',
    { 'c-action-sheet--is-open': opened });

    return (
      <div className={baseClasses}>
        <div id="overlay" className={overlayClasses}></div>
        <div id="sheet" className={classes}>
          <div id="actions" className="c-action-sheet__actions">
            {children}
          </div>
        </div>
        <style jsx>{style}</style>
      </div>
    );
  }
}
