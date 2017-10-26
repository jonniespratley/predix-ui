import BaseComponent from '../BaseComponent';
import React from 'react';
import classnames from 'classnames';
import stylesheet from './px-accordion.scss';
import IronCollapse from '../iron-components/IronCollapse';

/**
 * Accordion component
 */
export default class Accordion extends BaseComponent {
  constructor(props){
    super(props, {displayName: 'Accordion'});
    this.state = {
      open: props.open || true
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick(){
    if(!this.props.disabled){
      this.setState((prevState, props) => ({
        open: !prevState.open
      }));
    }
  }

  render(){
    const { open } = this.state;
    const {
      headerValue = 'Accordion',
      status,
      disabled,
      showAction,
      style,
      children
    } = this.props;

    const baseClasses = classnames(
      'px-accordion',
      {'px-accordion--disabled': disabled},
      {'px-accordion--open': open}
    );


    const headerClasses = classnames(
      'accordion__header',
      'flex',
      'flex--row',
      'flex--justify',
      'u-p--',
      'heading--subsection'
    );

    const iconClasses = classnames(
      'accordion__icon',
      'actionable--action',
      'flex',
      'flex--center',
      'flex--middle'
    );

    return (
      <div className={baseClasses} style={style}>
        <section className="accordion__container">
          <header className={headerClasses} onClick={this.onClick} disabled={disabled}>
            <div className="flex flex--middle">
              <span className={iconClasses}>
                {open && '-'}
                {!open && '+'}
              </span>
              <span>{headerValue}</span>
            </div>
            <div className="flex flex--middle">
              <span className="accordion__status">{status}</span>
              {showAction && <span className={iconClasses}>action</span>}
            </div>
          </header>

          <IronCollapse ref="collapse" opened={open}>
            <div className="accordion__body u-p--">
              {children}
            </div>
          </IronCollapse>
        </section>
        <style jsx>{stylesheet}</style>
      </div>
    );
  }
}
