import React from 'react';
import classnames from 'classnames';

import style from './style.scss';

/**
 * px-accordion component
 */
export default class Accordion extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      open: true
    };
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount(){
    console.log('Accordion.componentDidMount', this);
  }

  onClick(){
    console.log('toggle iron-collapse');
    this.setState((prevState, props) => ({
      open: !prevState.open
    }));
  }

  render(){
    const open = this.state && this.state.open;
    const {headerValue = 'px-accordion', status, disabled, showAction, children} = this.props;

    const baseClasses = classnames('px-accordion', {
      'px-accordion--children': children
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
      <div className={baseClasses}>
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
        <style jsx>{style}</style>
      </div>
    );
  }
}
