import React from 'react';
import BaseComponent from '../base-component';

import style from './px-nav-drawer.scss';
import classnames from 'classnames';

class NavDrawer extends BaseComponent {
  constructor(props){
    super(props);
    this.state = {
      opened: props.opened || false,
      persistent: props.persistent || false

    };
  }

	componentDidMount() {
		this.hasUnprefixedTransform = 'transform' in document.documentElement.style;
		//this.rootElement = this.base.querySelector('.js-nav-drawer');
		//this.sideNavContent = this.refs.rootElement.querySelector('.js-nav-drawer-content');
		//this.sideNavBody = this.refs.rootElement.querySelector('.nav-drawer__body');
    console.log('componentDidMount', this);
		this.refs.sideNavContent.addEventListener('click', (e) => {
			console.log('e.stopPropagation');
			e.stopPropagation();
		});
		if (this.hasUnprefixedTransform) {
			this._setupTouchHandlers();
		}
	}

  componentWillReceiveProps(nextProps){
    console.log('NavDrawer.componentWillReceiveProps', nextProps);

    //this.setState(nextProps);
    //this.toggle();
  }

  getWidth(){
    return this.refs.sideNavContent.offsetWidth;
  }

	_setupTouchHandlers() {
		this.touchStartX = null;
		this.sideNavTransform = null;
		this.refs.sideNavContent.addEventListener('touchstart', this.onSideNavTouchStart.bind(this));
		this.refs.sideNavContent.addEventListener('touchmove', this.onSideNavTouchMove.bind(this));
		this.refs.sideNavContent.addEventListener('touchend', this.onSideNavTouchEnd.bind(this));
	}

	onSideNavTouchStart(e) {
		e.preventDefault();
		this.touchStartX = e.touches[0].pageX;
	}

	onSideNavTouchMove(e) {
		e.preventDefault();
		const newTouchX = e.touches[0].pageX;
		this.sideNavTransform = Math.min(0, newTouchX - this.touchStartX);
		this.refs.sideNavContent.style.transform = 'translateX(' + this.sideNavTransform + 'px)';
	}

	onSideNavTouchEnd(e) {
		let TOUCH_SLOP = 8 * window.devicePixelRatio * 3;
		if (this.sideNavTransform < -TOUCH_SLOP) {
			this.close();
			return;
		}
		this.open();
	}

	isOpen() {
		return this.refs.rootElement.classList.contains('nav-drawer--visible');
    //this.props.opened;
	}

	toggle() {
		if (this.isOpen()) {
			this.close();
		} else {
			this.open();
		}
	}

	close() {

    this.setState({opened: false});
		this.refs.rootElement.classList.remove('nav-drawer--visible');
		this.refs.sideNavContent.classList.add('nav-drawer__content--animatable');
		if (this.hasUnprefixedTransform) {
			this.refs.sideNavContent.style.transform = 'translateX(-102%)';
		} else {
			this.refs.sideNavContent.classList.remove('nav-drawer--visible');
		}
    if(this.props.onClose){
      this.props.onClose();
    }

    console.log('px-nav-drawer', 'close', this);
    return false;
	}

	open() {

    this.setState({opened: true});
		this.refs.rootElement.classList.add('nav-drawer--visible');
		if (this.hasUnprefixedTransform) {
			let onSideNavTransitionEnd = (e) => {
				this.refs.sideNavBody.focus();
				this.refs.sideNavContent.classList.remove('nav-drawer__content--animatable');
				this.refs.sideNavContent.removeEventListener('transitionend', onSideNavTransitionEnd);
			};

			this.refs.sideNavContent.classList.add('nav-drawer__content--animatable');
			this.refs.sideNavContent.addEventListener('transitionend', onSideNavTransitionEnd);
			requestAnimationFrame(() => {
				this.refs.sideNavContent.style.transform = 'translateX(0px)';
			});
		} else {
			this.refs.sideNavContent.classList.add('nav-drawer--visible');
		}
    if(this.props.onOpen){
      this.props.onOpen();
    }
    console.log('px-nav-drawer', 'open', this);
	}

	render() {
    const {
  		title = 'AppNav',
  		nav,
      opened,
      persistent,
      children
  	} = this.props;

    const baseClasses = classnames(
      'px-nav-drawer',
      {'px-nav-drawer--is-visible': opened},
      {'px-nav-drawer--is-persistent': persistent}
    );

    const rootElementClasses = classnames(
      'nav-drawer',
      'js-nav-drawer',
    //  {'nav-drawer--visible': opened},
      {'nav-drawer--persistent': persistent}
    );

    const sideNavContentClasses = classnames(
      'nav-drawer__content',
      'js-nav-drawer-content'
    );


		return (
			<div className={baseClasses}>
				<section className={rootElementClasses} ref='rootElement' onClick={(e) => this.close(e)}>
					<div className={sideNavContentClasses} ref='sideNavContent'>
						<div className="nav-drawer__header">
							<h1 className="nav-drawer__title">{title}</h1>
						</div>
						<nav className="nav-drawer__body" ref='sideNavBody'>
              {children}
							{nav && nav.map((item) => (
								<a href={item.url} role="tab" activeClassName="active" className="nav-drawer__link">
									<span onClick={(e) => this.close(e)}>{item.label}</span>
								</a>
							))}
						</nav>
					</div>
				</section>
        <style jsx>{style}</style>
			</div>
		);
	}
}

NavDrawer.defaultProps = {
  opened: false,
  persistent: false
};
export default NavDrawer;
