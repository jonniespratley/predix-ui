import React from 'react'
export default class ExampleComponent extends React.Component {
  constructor(props){
    super(props);
    this.displayName = 'ExampleComponent';
  }
	render() {
		const {
			label = 'px-example-component',
			style,
      classes,
			children
		} = this.props;

		return (
			<div style={style}>
				{label && <h4>{ label }</h4>}
				<div>{children}</div>
			</div>
		);
	}
}

//export default injectSheet(styles)(ExampleComponent);
