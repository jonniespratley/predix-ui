import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import Drawer from '../../Drawer';
import BrandingBar from '../../BrandingBar';
import AppNav from '../../AppNav';
import Navbar from '../../Navbar';
import BaseComponent from '../../BaseComponent';
import IronMediaQuery from '../../iron/IronMediaQuery';

class DrawerLayout extends BaseComponent {
  constructor(props) {
    super(props, { displayName: 'DrawerLayout' });
    this.isAttached = false;
    this.state = {
      isNarrow: false
    };
    this.handleMediaChange = this.handleMediaChange.bind(this);
  }

  componentDidMount() {
    this.isAttached = true;
  }

  // TODO: Implement changes to position containter based on drawer width;
  handleMediaChange(e) {
    const narrow = !e.queryMatches;
    const { contentContainer, drawer } = this;
    const drawerWidth = drawer.offsetWidth || '256';
    if (narrow) {
      contentContainer.style.marginLeft = '';
      contentContainer.style.marginRight = '';
    } else if (drawer.props.align === 'right') {
      contentContainer.style.marginLeft = '';
      contentContainer.style.marginRight = `${drawerWidth}px`;
    } else {
      contentContainer.style.marginLeft = `${drawerWidth}px`;
      contentContainer.style.marginRight = '';
    }
    this.setState({ isNarrow: narrow });
  }

  _handleDrawerToggle() {
    this.drawer.toggle();
  }

  render() {
    const {
      title,
      responsiveWidth,
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
      { 'px-drawer-layout--is-narrow': isNarrow },
      'l-drawer-layout'
    );

    const headerContent = (
      <div className="flex">
        <div className="flex__item">
          <BrandingBar title={title} />
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
              onOverlayClick={() => this.setState({ isOpen: false })}
            >
              <AppNav
                vertical
                items={navItems}
              />
              {drawerContent}
            </Drawer>
          </div>

          <div id="contentContainer" className="l-drawer-layout__content" ref={(el) => { this.contentContainer = el; }}>
            <nav id="navbarContent">
              { navbarContent }
              <Navbar
                title={title}
                showMenuButton={isNarrow}
                onMenuButtonClick={e => this._handleDrawerToggle(e)}
              />
            </nav>
            <div id="content">{children}</div>
          </div>
        </div>
        <IronMediaQuery
          onChange={this.handleMediaChange}
          query={`(min-width: ${responsiveWidth})`}
          full
        />
      </div>
    );
  }
}

DrawerLayout.defaultProps = {
  title: null,
  navbarContent: null,
  drawerContainer: null,
  drawerContent: null,
  forceNarrow: false,
  responsiveWidth: '768px',
  narrow: false
};

DrawerLayout.propTypes = {
  title: PropTypes.string,
  navbarContent: PropTypes.node,
  drawerContainer: PropTypes.node,
  drawerContent: PropTypes.node,
  forceNarrow: PropTypes.bool,
  responsiveWidth: PropTypes.string,
  narrow: PropTypes.bool
};

export default DrawerLayout;
