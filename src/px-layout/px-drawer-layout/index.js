import React from 'react';
import classnames from 'classnames';
import style from './style.scss';
import Drawer from '../../px-drawer';
import Navbar from '../../px-navbar';
import NavDrawer from '../../px-drawer/px-nav-drawer';
import BaseComponent from '../../base-component';
/**
 * px-layout component
 */
export default class DrawerLayout extends BaseComponent {

  constructor(props){
    super(props, {displayName: 'DrawerLayout'});
    this.isAttached = false;
    this.state = {
      isNarrow: false
    };
    window.addEventListener('resize', this.resetLayout.bind(this));
  }

  toggleClass(name, onoff, el){
    if(el){
      el.classList.toggle(name);
    } else {
      if(onoff){
        this.refs.baseElement.classList.add(name);
      } else {
        this.refs.baseElement.classList.remove(name);
      }
    }
    console.log('toggleClass', name);
  }

  notifyResize(name, el){
    //console.log('notifyResize', name);
  }

  debounce(name, func, wait, immediate){
    console.log('DrawerLayout.debounce', name);
    var timeout;
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) {
        func.apply(context, args);
      }
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) {
      func.apply(context, args);
    }
  }

  componentWillMount(){
    console.log('[DrawerLayout.componentWillMount]', this);
  }

  componentWillUnmount(){

    window.removeEventListener('resize', this.resetLayout.bind(this));
  }

  componentDidMount(){
    this.isAttached = true;
  }

  /**
   * Handle resetting the layout and either hiding or revealing the drawer.
   * @event px-layout-reset
   */
  resetLayout () {
    if (!this.isAttached) {
      console.warn('notAttached');
      //return;
    }
    const narrow = !window.matchMedia(`(min-width: ${this.props.responsiveWidth})`).matches;
    var baseElement  = this.baseElement;
    var drawer = this.drawer;
    var drawerWidth = drawer && drawer.getWidth() || 250;
    var contentContainer = this.contentContainer;
    const navbar = this.navbar;

    console.log('narrow', this.props.responsiveWidth, narrow, drawerWidth);
    this.setState({isNarrow: narrow});

    if (narrow) {
      //drawer.props.opened = false;
      //drawer.props.persistent = false;
      //baseElement.classList.add('is-narrow');
      //contentContainer.classList.add('is-narrow');
      //contentContainer.style.marginLeft = '';
      //contentContainer.style.marginRight = '';
      if (navbar && navbar.fixed) {
        navbar.style.left = '';
      }

    } else {
      //baseElement.classList.remove('is-narrow');
      //contentContainer.classList.remove('is-narrow');
      if (navbar && navbar.fixed) {
        //navbar.style.left = drawerWidth + 'px';
      }
      if (drawer.props.align == 'right') {
        contentContainer.style.marginLeft = '';
        contentContainer.style.marginRight = drawerWidth + 'px';
      } else {
        console.warn('changing contentContainer marginLeft');
        contentContainer.style.marginLeft = (drawerWidth) + 'px';
        contentContainer.style.marginRight = '';
      }
    }
    //this.toggleClass('is-narrow', narrow);
    this.notifyResize();
  }

  _handleDrawerToggle(){
    var drawer = this.drawer;
    drawer.toggle();
  }

  render() {
    const {
      title = 'Drawer Layout',
      headerContent,
      drawerContent,
      navbarContent,
      children
    } = this.props;

    const {
      isNarrow
    } = this.state;

    const baseClassNames = classnames(
      'px-drawer-layout',
      {'px-drawer-layout--is-narrow': isNarrow}
    );


    console.log('DrawerLayout.render', this.props)
    return (

      <div className={baseClassNames} ref={(el) => { this.baseElement = el; }}>
        <div className='flex'>
          <button role="tab" onClick={(e) => this._handleDrawerToggle(e)} className="header__menu js-toggle-menu" title="Toggle nav menu">
            Toggle nav menu
            <svg viewBox="0 0 22 22" preserveAspectRatio="xMidYMid meet" focusable="false">
              <g>
                <path strokeMiterlimit="10" d="M3 19L19 3M3 3l16 16"></path>
              </g>
            </svg>
          </button>
          <div className="flex__item">
            {headerContent}
          </div>
        </div>

        <div id="container" className="l-drawer-layout" ref={(el) => { this.container = el; }}>
          <div id="drawerContainer" className="l-drawer-layout__drawer" ref={(el) => { this.drawerContainer = el; }}>
            <NavDrawer
              ref={(el) => { this.drawer = el; }}
              persistent
              opened={isNarrow}>
              {drawerContent}
            </NavDrawer>
          </div>

          <div id="contentContainer" className="l-drawer-layout__container " ref={(el) => { this.contentContainer = el; }}>
            <nav id="navbarContent">
              <Navbar title={title}
                showMenuButton={isNarrow}
                onMenuButtonClick={(e) => this._handleDrawerToggle(e)}/>
            </nav>
            <div id="content">{children}</div>
          </div>
        </div>
        <style jsx >{style}</style>
      </div>
    );
  }
}

DrawerLayout.defaultProps = {
  forceNarrow: false,
  responsiveWidth: '768px',
  narrow: false
};
