# px-table-view
Px-table-view is a Predix UI component that creates a table-style list of items which can be interacted with by the user. It works as users expect from a native mobile app, allowing swiping, tapping, and re-ordering of list items.

Use the px-table-view component to create list-style interfaces like menus or to display sets of related data that can be acted upon.



Getting Started

First, install the component via bower on the command line:

```code
$ npm install @px-components-react/px-table-view --save
```

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
  {title: 'Row 1', body: 'This is row 1'},
  {title: 'Row 2', body: 'This is row 2'},
  {title: 'Row 3', body: 'This is row 3', image:'http://lorempixel.com/80/80/abstract'}
];
<div>
  <px.TableView items={tableItems} tappable/>
</div>
```
