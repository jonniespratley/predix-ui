import React from 'react'
//import injectSheet from 'react-jss'

/**
 * ExampleComponent styles
 */
const styles = {
  root: {
    background: props => props.color || 'green',
    padding: '1rem'
  },
  label: {
    fontWeight: 'bold'
  }
};

/**
 * ExampleComponent component
 */
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
