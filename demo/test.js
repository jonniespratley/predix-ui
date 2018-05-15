

let _React = React,
  Component = _React.Component;
let _ReactDOM = ReactDOM,
  render = _ReactDOM.render;
let _PxReact = PxReact,
  AppNav = _PxReact.AppNav,
  Button = _PxReact.Button,
  Card = _PxReact.Card,
  Notification = _PxReact.Notification;


let navItems = [{
  id: 'home', path: '/', label: 'Home', icon: 'px-fea:home'
}, {
  id: 'dashboard', path: '/dashboard', label: 'Dashboard', icon: 'px-fea:dashboard'
}, {
  id: 'about', path: '/about', label: 'About', icon: 'px-fea:catalog'
}, {
  id: 'topics', path: '/topics', label: 'Topics', icon: 'px-fea:log'
}, {
  id: 'users', path: '/users', label: 'Users', icon: 'px-fea:users'
}];
let dashboardData = {
  title: 'Predix Sample Application',
  navItems,
  keyVals: [{ label: 'New Alerts', value: 21 }, { label: 'Utilization', value: '70', uom: '%' }, { label: 'Faults', value: 3 }, { label: 'Output', value: 53, uom: 'mw' }]
};

/**
 * Example App
 */
let App = function App() {
  return React.createElement(
    'div',
    null,
    React.createElement(AppNav, {
      title: dashboardData.title,
      items: dashboardData.navItems
    }),
    React.createElement(
      'div',
      { className: 'u-' },
      React.createElement('br', null),
      React.createElement(
        Notification,
        {
          type: 'info',
          statusIcon: 'px-utl:clock',
          opened: true
        },
        'Welcome back'
      ),
      React.createElement('br', null),
      React.createElement(
        Card,
        { headerText: 'My Card' },
        'This is the main content area.'
      )
    )
  );
};

render(React.createElement(App, null), document.querySelector('#rootNode'));

