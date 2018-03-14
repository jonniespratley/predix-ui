The `px.TableView` is a Predix UI component that creates a table-style list of items which can be interacted with by the user. It works as users expect from a native mobile app, allowing swiping, tapping, and re-ordering of list items.

Use the `px.TableView` component to create list-style interfaces like menus or to display sets of related data that can be acted upon.



## Usage
This component is best used with `react-virtualized`.

```react
function makeRows(count = 5){
	let items = [];
	while(count--){ 
		items.push({title: `Item ${count}`});
	}
	return items;
}
const items = makeRows();
<px.TableView items={items} tappable/>
```



## Examples
The following are examples of the row component.


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
<px.TableView items={items} size='large' tappable/>
```

### 4. With labels

```react
const items = [
  {title: 'Text Label', labelRight: 'New'},
  {title: 'Text Label', labelRight: 'New'},
  {title: 'Text Label', labelRight: 'New'}
];
<px.TableView items={items} size='large' tappable/>
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
  <px.TableView items={items} size='large' tappable/>
</div>
```







## Properties

```table
span: 6
rows:
  - Name: size
    Type: String
    Description: The size of the rows
```
