The `px.TableView` is a Predix UI component that creates a table-style list of items which can be interacted with by the user. It works as users expect from a native mobile app, allowing swiping, tapping, and re-ordering of list items.

Use the `px.TableView` component to create list-style interfaces like menus or to display sets of related data that can be acted upon.



Use the component in your application:

```code
import px from 'px-components-react';
import {TableView, TableRow} from 'px-components-react';

<px.TableView>
  <px.TableRow title="Text Label"/>
  <px.TableRow title="Tappable Item" tappable/>
</px.TableView>
```

## Usage

```react
<px.TableView large>
  <px.TableRow title="Tappable Item" tappable/>
</px.TableView>
```



## Examples


### 1. Basic

```react
const items = [
  {title: 'Text Label'},
  {title: 'Text Label'},
  {title: 'Text Label'}
];
<px.TableView items={items} tappable/>
```

### 2. With icons

```react
const items = [
  {title: 'Text Label', icon:'px-nav:home'},
  {title: 'Text Label', icon:'px-nav:home'},
  {title: 'Text Label', icon:'px-nav:home'}
];
<px.TableView items={items} tappable/>
```





### 3. With  images

```react
const items = [
  {title: 'Text Label', image:'http://placehold.it/44'},
  {title: 'Text Label', image:'http://placehold.it/44'},
  {title: 'Text Label', image:'http://placehold.it/44'}
];
<px.TableView items={items} tappable/>
```


### 4. With labels

```react
const items = [
  {title: 'Text Label', label1: 'New'},
  {title: 'Text Label', label1: 'New'}
];
<px.TableView items={items} tappable/>
```

### 5. With descriptions


```react
const items = [
  {
    title: 'Text Label',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
  },
  {
    title: 'Text Label',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
  },
  {
    title: 'Text Label',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
  }
];
<div>
  <px.TableView items={items} tappable/>
</div>
```







## Properties

```table
span: 6
rows:
  - Name: label
    Type: String
    Description: Label for the button
```
