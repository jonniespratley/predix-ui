Example application.

```react
const {
  AppHeader,
  AppNav,
  Button,
  Card,
  Drawer,
  Navbar,
  KeyValuePair,
  Grid,
  Gauge,
  Layout,
  Spinner,
  ProgressBar,
  Theme
  } = PxReact;

const dashboardData = {
  title: 'Predix Sample Application',
  navItems: [
    { "path": "dashboard", "icon": "px-nav:home", "label": "Dashboard" },
    { "path": "details", "icon": "px-nav:list", "label": "Details" },
    { "path": "alerts","icon": "px-nav:home", "label": "Alerts" }
  ],
  keyVals: [
    {label: 'New Alerts', value: 21},
  //  {label: 'Devices', value: 583},
    {label: 'Utilization', value: '70', uom: '%'},
    {label: 'Faults', value: 3},
    {label: 'Output', value: 53, uom: 'mw'}
  ],
  cards: [
    { title: 'Card 1', children: [ <div>Lorem ipsum dolor sit</div> ] },
    { title: 'Card 2', children: [ <div>Lorem ipsum dolor sit</div> ] },
    { title: 'Card 3', children: [ <div>Lorem ipsum dolor sit</div> ] }
  ]
};

<Theme dark>
<AppHeader
  title={dashboardData.title}
  items={dashboardData.navItems}>

  <Card headerText='West Coast Fleet'>
    <Layout container center middle wrap>
      {dashboardData.keyVals.map((item, index) => (
        <Layout item key={index} xs={2}>
          <KeyValuePair
            label={item.label}
            uom={item.uom}
            value={item.value}
            size="beta"/>
        </Layout>
      ))}
    </Layout>
  </Card>



  {dashboardData.cards && dashboardData.cards.map((card, index) => (
    <Card key={index}
      headerText={card.title}>

      <Spinner/>

      {card.children}
    </Card>
  ))}
  </AppHeader>
</Theme>

```
