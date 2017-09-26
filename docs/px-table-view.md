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

```react
const tableItems = [
  {
    title: 'John Doe',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    image:'https://placehold.it/80'
  },
  {title: 'Row 2', body: 'This is row 2'},
  {title: 'Row 3', body: 'This is row 3', image:'http://lorempixel.com/80/80/abstract'}
];
<div>
  <px.TableView items={tableItems} tappable/>
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
