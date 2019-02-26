const { Component } = React;

const {
  AppNav,
  Button,
  Card,
  Notification
} = PxReact;

const navItems = [
  {
    id: 'home', path: '/', label: 'Home', icon: 'px-fea:home'
  },
  {
    id: 'dashboard', path: '/dashboard', label: 'Dashboard', icon: 'px-fea:dashboard'
  },
  {
    id: 'about', path: '/about', label: 'About', icon: 'px-fea:catalog'
  },
  {
    id: 'topics', path: '/topics', label: 'Topics', icon: 'px-fea:log'
  },
  {
    id: 'users', path: '/users', label: 'Users', icon: 'px-fea:users'
  }
];
const dashboardData = {
  title: 'Predix Sample Application',
  navItems,
  keyVals: [
    { label: 'New Alerts', value: 21 },
    { label: 'Utilization', value: '70', uom: '%' },
    { label: 'Faults', value: 3 },
    { label: 'Output', value: 53, uom: 'mw' }
  ]
};

/**
   * Example App
   */
const App = () => (
  <div>
    <AppNav
      title={dashboardData.title}
      items={dashboardData.navItems}
    />
    <div className="u-p">
      <br />
      <Notification
        type="info"
        statusIcon="px-utl:clock"
        opened
        small
      >
      Welcome back
      </Notification>
      <br />

      <br />
      <Card headerText="My Card">
        This is the main content area.
        <Button>Label</Button>
      </Card>
      <br />

      <Card headerText="My Card">
        This is the main content area.
      </Card>

    </div>
  </div>
);

ReactDOM.render(<App />, document.querySelector('#rootNode'));
