The `<ProgressBar/>` component enables you to use the design system progress bar.


## Usage

```react
const { ProgressBar } = PxReact;
<div>
  <ProgressBar value={75}/>
</div>
```

### Infinite example

```react
const { ProgressBar } = PxReact;
<div>
  <ProgressBar value={75} infinite/>
</div>
```


## Properties

```table
span: 6
rows:
  - Name: infinite
    Type: bool
    Description: Flag for whether to animate the progress bar. Set to true for an indeterminate or infinite progress bar.
  - Name: value
    Type: number
    Description: Represents the value (from 0 to 100) of the percentage progress.
```


### Styling

```
Custom property | Description | Default

`--px-progress-bar-height` | Height of the progress bar element | `5px`
`--px-progress-bar-fill-color` | Color of the filled portion of the bar | black
`--px-progress-bar-background-color` | Color of the unfilled portion of the bar | lightgray
```
