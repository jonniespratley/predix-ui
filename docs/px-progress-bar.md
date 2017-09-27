The basic progress bar indicates the progress of an activity with explicit start and end times, or known duration. The filled portion of the bar grows from left to right to indicate the percentage of progress. The infinite progress bar indicates an ongoing activity with an indefinite end, such as loading data.

The animation hints at forward progress, but since an end time cannot be calculated, does not explicitly display the amount of progress.

## Usage

```react
const {ProgressBar} = px;
<ProgressBar value={50}/>
```


## Properties

```table
span: 6
rows:
  - Name: value
    Type: string
    Description: Represents the value (from 0 to 100) of the percentage progress.
  - Name: infinite
    Type: bool
    Description: Flag for whether to animate the progress bar. Set to true for an indeterminate or infinite progress bar.
```
