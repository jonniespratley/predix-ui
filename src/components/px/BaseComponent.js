import {Component} from 'react';
/**
 * @description Base component class that all ui components extend.
 * @class BaseComponent
 */
export default class BaseComponent extends Component {

	/**
   * constructor - description
   *
   * @param  {type} props description
   * @return {type}       description
   */
	constructor(props, options = {
		displayName: 'base-component',
		log: true
	}) {
		super(props);
		this.displayName = options.name || options.displayName;

		// TODO: Find a way to flag on or off
		options.log = true;
		if (options && options.log) {
			// eslint-disable-next-line no-console
			this._log = console.log;
		} else {
			this._log = () => {};
		}
	}

	setBaseRef(el) {
		this.base = el;
	}

	$$(slctr) {
		if (this.base) {
			return this.base.querySelector(slctr);
		}
	}

	transform(transform, node) {
		node = node || this.base;
		node.style.webkitTransform = transform;
		node.style.transform = transform;
	}

	translate3d(x, y, z, node) {
		node = node || this.base;
		this.transform(`translate3d(${x}, ${y}, ${z})`, node);
	}

	/**
   * componentWillMount - https://reactjs.org/docs/react-component.html#componentWillMount
   *
   * @return {type}  description
   */
	componentWillMount() {
		//this._log('componentWillMount', this);
	}

	/**
   * render - https://reactjs.org/docs/react-component.html#render
   *
   * @return {type}  description
   */
	render() {
		//this._log('render', this);
		//return (<div>base-component</div>);
	}

	/**
   * componentDidMount - https://reactjs.org/docs/react-component.html#componentDidMount
   *
   * @return {type}  description
   */
	componentDidMount() {
		//this._log('componentDidMount', this);
	}

	/**
   * Updating
   An update can be caused by changes to props or state.
   These methods are called when a component is being re-rendered:
   */

	/**
   * componentWillReceiveProps - https://reactjs.org/docs/react-component.html#componentWillReceiveProps
   *
   * @param  {type} nextProps description
   * @return {type}           description
   */
	componentWillReceiveProps(nextProps) {
		//this._log('componentWillReceiveProps', nextProps);
	}

	/**
   * shouldComponentUpdate - https://reactjs.org/docs/react-component.html#shouldComponentUpdate
   *
   * @param  {type} nextProps description
   * @param  {type} nextState description
   * @return {type}           description
   */
	shouldComponentUpdate(nextProps, nextState) {
		//this._log('shouldComponentUpdate', nextProps, nextState);
		return true;
	}

	/**
   * componentWillUpdate - https://reactjs.org/docs/react-component.html#componentwillupdate
   *
   * @param  {type} nextProps description
   * @param  {type} nextState description
   * @return {type}           description
   */
	componentWillUpdate(nextProps, nextState) {
		//this._log('shouldComponentUpdate', nextProps, nextState);
		return true;
	}

	/**
   * componentWillUnmount -  https://reactjs.org/docs/react-component.html#componentWillUnmount
   *
   * @return {type}  description
   */
	componentWillUnmount() {
		//this._log('componentWillUnmount');
	}

}
