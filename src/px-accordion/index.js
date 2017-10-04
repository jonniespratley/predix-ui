import BaseComponent from '../base-component';
import React from 'react';
//import classnames from 'classnames';
import stylesheet from './px-accordion.scss';

/**
 * px-accordion component
 */
export default class Accordion extends BaseComponent {
  constructor(props){
    super(props, {displayName: 'Accordion'});
    this.state = {
      open: true
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick(){
    this.setState((prevState, props) => ({
      open: !prevState.open
    }));
  }

  render(){
    const open = this.state && this.state.open;
    const {
      headerValue = 'px-accordion',
      status,
      disabled,
      showAction,
      style,
      children
    } = this.props;

    const classnames = this.$$.classnames;
    const baseClasses = classnames('px-accordion', {
      'px-accordion--disabled': disabled
    });

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

    const collapseClasses = classnames(
      'iron-collapse',
      {'iron-collapse-opened': open},
      {'iron-collapse-closed': !open}
    );

    return (
      <div className={baseClasses} style={style}>
        <section className="accordion__container">
          <div className={headerClasses} onClick={this.onClick} disabled={disabled}>
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
          </div>
          <div id="collapse" ref="collapse" className={collapseClasses}>
            <div className="accordion__body u-p--">
              <div>{children}</div>
            </div>
          </div>
        </section>
        <style jsx>{stylesheet}</style>
      </div>
    );
  }
}
