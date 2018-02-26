
The `Tabs` and `Tab` components together provide the tabbed interface.

```hint
Reference https://www.predix-ui.com/#/elements/px-tabs
```



## Usage

```react
const {Tabs, Tab} = PxReact;
const style = {
  color: 'black'
};
<Tabs propForSelect='url' style={style}>
  <Tab label="Tab 1" url='/tab1'>
    <div>
      <p>This is the tab 1 content. </p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
    </div>
  </Tab>
  <Tab label="Tab 2" url='/tab2'>
    <div>
      <p>This is the tab 2 content. </p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
    </div>
  </Tab>
  <Tab label="Tab 3" url='/tab3'>
    <div>
      <p>This is the tab 3 content. </p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
    </div>
  </Tab>
</Tabs>
```


### Minimal

```react
const {Tabs, Tab} = PxReact;
<Tabs>
  <Tab label="Tab 1">
    This is content.
  </Tab>
</Tabs>
```


## Properties

```table
span: 6
rows:
  - Name: children
    Type: node
    Description: The children content.
```


### Styling

```table
span: 6
rows:
  - Property: --px-tab-color
    Default: null
    Description: Text color for unselected tabs

  - Property: --px-tab-color--hover
    Default: null
    Description: Text color for unselected tabs on hover

  - Property: --px-tab-color--active
    Default: null
    Description: Text color for unselected tabs on press

  - Property: --px-tab-color--selected
    Default: null
    Description: Text and border color for selected tab

  - Property: --px-tab-border-color
    Default: null
    Description: Border color for unselected tabs
```
