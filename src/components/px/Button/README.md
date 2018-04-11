The `<Button/>` component provides a way to use Predix Design buttons.


## Usage


```react|lang-jsx
const { Button } = PxReact;
<div>
  <Button>Button</Button>
  <Button theme='bare'>Button</Button>
  <Button theme='primary'>Button</Button>
  <Button theme='tertiary'>Button</Button>
  <Button theme='bare-primary'>Button</Button>
  <Button theme='call-to-action'>Button</Button>
  <Button disabled>Button</Button>
  <Button>😀 😎 👍 💯</Button>
</div>
```

### Themes
```react|lang-jsx
const { Button, Flex } = PxReact;
const buttonThemes = [
	'primary', 
	'secondary', 
	'tertiary', 
	'call-to-action',
	'bare', 
	'bare-primary',
	'info',
	'healthy',
	'warning',
	'error', 
	'important'
];

<Flex wrap='true' middle spaced>
 {buttonThemes.map((theme, index) => (
    <Button 
      theme={theme} 
      key={index}>Button ({theme})</Button>
  ))}
</Flex>
```
### Sizes
```react|lang-jsx
const { Button } = PxReact;
<div>
  <Button size='small'>Button</Button>
  <Button>Button</Button>
  <Button size='large'>Button</Button>
  <Button size='huge'>Button</Button>
  <Button size='full'>Button</Button>
</div>
```

### Custom style

```react|lang-jsx
const { Button } = PxReact;
<div>
  <Button className='btn--danger' size='large'>Button</Button>
  <style>{`
    .btn--danger {
      color: white;
      background-color: red;
    }
    .btn--danger:hover,
    .btn--danger:focus,
    .btn--danger:active {
      color: white;
      background-color: darkred;
    }
  `}</style>
</div>
```

## Properties

```table
span: 6
rows:
  - Name: theme
    Type: String
    Description: The color scheme to use.
  - Name: size
    Type: String
    Description: The size of the button. 
```



### Styling

```table
span: 6
rows:
  - Property: --px-btn-height
    Description: The height of the button.
```
