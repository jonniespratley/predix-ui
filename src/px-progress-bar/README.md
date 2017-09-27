The `<ProgressBar/>` component enables you to use the design system progress bar.

The basic progress bar indicates the progress of an activity with explicit start and end times, or known duration. The filled portion of the bar grows from left to right to indicate the percentage of progress.



## Usage

```react
const { ProgressBar } = px;
<div>

  <ProgressBar value={75}/>
  <p>infinite example</p>
  <ProgressBar value={50} infinite/>
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
