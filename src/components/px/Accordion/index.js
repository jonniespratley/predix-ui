
import React from 'react';
import BaseComponent from '../BaseComponent';
import classNames from 'classnames';
import stylesheet from './px-accordion.scss';
import IronCollapse from '../../iron/IronCollapse';
import CSSModules from 'react-css-modules';

class Accordion extends BaseComponent {
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

    const baseClasses = classNames(
      'px-accordion',
      {'px-accordion--disabled': disabled},
      {'px-accordion--open': open}
    );


    const headerClasses = classNames(
      'accordion__header',
      'flex',
      'flex--row',
      'flex--justify',
      'u-p--',
      'heading--subsection'
    );

    const iconClasses = classNames(
      'accordion__icon',
      'actionable--action',
      'flex',
      'flex--center',
      'flex--middle'
    );

    return (
      <div styleName={baseClasses} style={style}>
        <section styleName="accordion__container">
          <header styleName={headerClasses} onClick={this.onClick} disabled={disabled}>
            <div styleName="flex flex--middle">
              <span styleName={iconClasses}>
                {open && '-'}
                {!open && '+'}
              </span>
              <span>{headerValue}</span>
            </div>
            <div styleName="flex flex--middle">
              <span styleName="accordion__status">{status}</span>
              {showAction && <span styleName={iconClasses}>action</span>}
            </div>
          </header>

          <IronCollapse ref="collapse" opened={open}>
            <div styleName="accordion__body u-p--">
              {children}
            </div>
          </IronCollapse>
        </section>

      </div>
    );
  }
}
export default CSSModules(Accordion, stylesheet, {allowMultiple: true, handleNotFoundStyleName: 'log'});
