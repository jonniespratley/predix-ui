The `<Spinner/>` indicates an ongoing activity with an indefinite end, such as loading data. 


```hint
Reference https://www.predix-ui.com/#/elements/px-spinner
```




## Usage

```react
const {Spinner} = PxReact;
<Spinner size={100}/>
```

### Custom CSS example


```react
const {Spinner} = PxReact;
<div className='custom'>
  <style>{`
    .custom{
      --px-spinner-fill-color: green;
      --px-spinner-background-color: pink;
    }
    `}</style>
  <Spinner size={100}/>
</div>
```


### Styling
The following custom properties are available for styling:
```table
span: 6
rows:
  - Name: --px-spinner-fill-color
    Description: Fill color for the spinner
    Default: black
  - Name: --px-spinner-background-color
    Description: Background color for the spinner
    Default: gray
```
