import React from 'react';
import classnames from 'classnames';
import BaseComponent from '../base-component';
import stylesheet from './style.scss';

/**
 * px-popover component
 */

export default class Popover extends BaseComponent {
  constructor(props){
    super(props, {name: 'Popover'});
  }
  render(){
    const {
      title,
      body,
      classes,
      style,
      anchorEl,
      target,
      open,
      orientation = 'bottom',
      children
    } = this.props;

    const baseClasses = classnames('px-popover',
      { 'px-popover--is-open': open },
      classes
    );

    const popoverWrapperClasses = classnames(
      'popover__wrapper',
      {'fadeFromVisible': !open},
      {'fadeFromHidden': open}
    );

    const popoverClasses = classnames(
      'popover'
    );

    const popoverCaretClasses = classnames(
      'popover__carat',
      {[`${orientation}`] : orientation}
    );

    return (
      <div className={baseClasses}>
        <div id="popover__wrapper" className={popoverWrapperClasses}>
          <div id="popover__carat" className={popoverCaretClasses}></div>
          <div id="popover" className={popoverClasses}>
            {title && <h5 className="epsilon">{title}</h5>}
            {body && <p>{body}</p>}
            {children && <div>{children}</div>}
          </div>
          <style jsx>{stylesheet}</style>
        </div>
      </div>
    );
  }
}
