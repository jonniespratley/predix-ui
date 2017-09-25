import React from 'react';
import style from './px-nav-drawer.scss';

export default class NavDrawer extends React.Component {
  constructor(props){
    super(props);
  }

	componentDidMount() {
		this.hasUnprefixedTransform = 'transform' in document.documentElement.style;
		//this.rootElement = this.base.querySelector('.js-nav-drawer');
		//this.sideNavContent = this.refs.rootElement.querySelector('.js-nav-drawer-content');
		//this.sideNavBody = this.refs.rootElement.querySelector('.nav-drawer__body');
		this.refs.sideNavContent.addEventListener('click', (e) => {
			console.log('e.stopPropagation');
			e.stopPropagation();
		});
		if (this.hasUnprefixedTransform) {
			this._setupTouchHandlers();
		}
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
	}

	toggle() {
		if (this.isOpen()) {
			this.close();
		} else {
			this.open();
		}
	}

	close() {
		this.refs.rootElement.classList.remove('nav-drawer--visible');
		this.refs.sideNavContent.classList.add('nav-drawer__content--animatable');
		if (this.hasUnprefixedTransform) {
			this.refs.sideNavContent.style.transform = 'translateX(-102%)';
		} else {
			this.refs.sideNavContent.classList.remove('nav-drawer--visible');
		}
		return false;
	}

	open() {
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
	}

	render() {
    const {
  		title = 'AppNav',
  		nav,
  		open,
      children
  	} = this.props;
		return (
			<div className='px-nav-drawer'>
				<section className="nav-drawer js-nav-drawer"  ref='rootElement'
          onClick={(e) => this.close(e)}>
					<div className="nav-drawer__content js-nav-drawer-content" ref='sideNavContent'>
						<div className="nav-drawer__header">
							<h1 className="nav-drawer__title">{title}</h1>
						</div>
						<nav className="nav-drawer__body" ref='sideNavBody'>
              {children}
							{nav && nav.map((item) => (
								<Link href={item.url} role="tab" activeClassName="active" className="nav-drawer__link">
									<span onClick={(e) => this.close(e)}>{item.label}</span>
								</Link>
							))}
						</nav>
					</div>
				</section>
        <style jsx>{style}</style>
			</div>
		);
	}
}
