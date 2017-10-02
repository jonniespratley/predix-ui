import React from 'react';
import classnames from 'classnames';
import style from './style.scss';
import Drawer from '../../px-drawer';
import AppHeader from '../../px-app-header';
import BrandingBar from '../../px-branding-bar';
import AppNav from '../../px-app-nav';
import Navbar from '../../px-navbar';
import NavDrawer from '../../px-drawer/px-nav-drawer';
import BaseComponent from '../../base-component';
import IronMediaQuery from '../../iron-components/iron-media-query';
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
    this.handleMediaChange = this.handleMediaChange.bind(this);

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
  //  this.setState({isNarrow: narrow});

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

  // TODO: Implement changes to position containter based on draw widt;
  handleMediaChange(e){

    var contentContainer = this.contentContainer;
    var drawer = this.drawer;
    var drawerWidth = drawer.offsetWidth || '300px';
    console.log('handleMatch', e);
    this.setState({isNarrow: !e.queryMatches});

    if (drawer.props.align == 'right') {
      contentContainer.style.marginLeft = '';
      contentContainer.style.marginRight = drawerWidth + 'px';
    } else {
      console.warn('changing contentContainer marginLeft');
      contentContainer.style.marginLeft = drawerWidth + 'px';
      contentContainer.style.marginRight = '';
    }
  }

  _handleDrawerToggle(){
    var drawer = this.drawer;
    drawer.toggle();
  }

  render() {
    const {
      title = 'Drawer Layout',
      navItems,
      drawerContent,
      navbarContent,
      children
    } = this.props;

    const {
      isOpen,
      isNarrow
    } = this.state;

    const baseClassNames = classnames(
      'px-drawer-layout',
      {'px-drawer-layout--is-narrow': isNarrow},
      'l-drawer-layout'

    );


    const headerContent = (
      <div className='flex'>
        <div className="flex__item">
          <BrandingBar title={title}/>
        </div>
      </div>
    );

    return (

      <div className={baseClassNames} ref={(el) => { this.baseElement = el; }}>


        {!isNarrow && headerContent}


        <div id="container" className="l-drawer-layout__container" ref={(el) => { this.container = el; }}>
          <div id="drawerContainer" className="l-drawer-layout__drawer" ref={(el) => { this.drawerContainer = el; }}>
            <Drawer

              ref={(el) => { this.drawer = el; }}
              open={isOpen}
              docked={!isNarrow}
              onOverlayClick={(e) => this.setState({isOpen: false})}
              >
                <AppNav
                  vertical
                  items={navItems}/>

              {drawerContent}
            </Drawer>
          </div>

          <div id="contentContainer" className="l-drawer-layout__content" ref={(el) => { this.contentContainer = el; }}>
            <nav id="navbarContent">
              <Navbar title={title}
                showMenuButton={isNarrow}
                onMenuButtonClick={(e) => this._handleDrawerToggle(e)}/>
            </nav>
            <div id="content">{children}</div>
          </div>
        </div>

        <IronMediaQuery
            onChange={this.handleMediaChange}
            query={`(min-width: ${this.props.responsiveWidth})`} full/>
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
