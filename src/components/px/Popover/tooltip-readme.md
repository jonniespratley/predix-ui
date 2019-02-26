# Tooltip
The `<Tooltip/>` component enables you to create custom tooltips relative to a target element. The contents of the tooltip is customizable by the developer.

## Usage
The following is how to use this component as an un-controlled component.

```js
import React from "react";
import Tooltip from "./components/Tooltip";

class Example extends React.Component {
  state = {
    tooltipOpen: false
  };

  toggle = () => {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  };

  render() {
    return (
      <div>
          <p>
            Somewhere{" "}<span id="target1" className="target">here is</span>{" "}a tooltip.
          </p>
          <Tooltip
            onMouseLeaveDelay={500}
            placement="top"
            isOpen={this.state.tooltipOpen}
            target="target1"
            toggle={this.toggle}
          >
            This is the contents of the tooltip.
          </Tooltip>
      </div>
    );
  }
}
```

> Note: This is a un-controlled component, meaning you handle the state.

## Properties
The following properties are available for customization.  

| Name | Description | Default |
| :--- | :--- | :--- |
| `disabled` | Disable the tooltip | false |
| `isOpen` | Visibility of the tooltip | false |
| `onMouseEnterDelay` | Time in `ms` before tooltip is visible | 0 |
| `onMouseLeaveDelay` | Time in `ms` before tooltip is hidden | 0 |
| `placement` | Placement for the tooltip (`top`, `bottom`, `left`, `right`) | top |
| `toggle` | Function to invoke when target triggered | null |
| `target` | ID of the target DOM element for positioning | null |




## Styling
The following custom properties are available for styling via CSS variables:

| Custom Property | Description |
| :--- | :--- |
| `--tooltip-background-color` | Background color for the tooltip |
| `--tooltip-border` | Border for the tooltip |
| `--tooltip-border-radius` | Border radius for the tooltip |
| `--tooltip-box-shadow` | Box shadow for the tooltip |
| `--tooltip-color` | Color for the tooltip text |
| `--tooltip-transition` | Transition of the tooltip |



--- 

## Trade-offs
Here are some of the trade-offs of this component.

- Controlled / Un-controlled component, there is no internal state to manage. Developer implementing component has to handle the state.
- Extending this component with internal state and custom content (images, Ajax, custom html) would be trivial.
- Styling is done with CSS so it can be easy to change and update styles, using CSS variables.

## Drawbacks
Here are some of the drawbacks of this component.

- This component not using a third party library for handling the positioning of the element, thus there are not very many positions to choose from.
- This component is an un-controlled component, meaning it has no internal state. But it could be extended to add that functionality.
- The styles are external, my thoughts would be to use StyledComponents or some CSS-in-JS to remove the external dependency.
- Hmm, with more usage Im sure one could come up with many...