import React from 'react';
import classnames from 'classnames';
import stylesheet from './px-gauge.scss';
import BaseComponent from '../base-component';

/**
 * px-example-component component
 */
export default class Gauge extends BaseComponent {
  constructor(props){
    super(props, {displayName: 'px-gauge'});
    this.state = {};
  }
	render() {

    const {
			label = 'px-gauge',
			style,
      value = 0,
      unit,
      min = 0,
      max = 100,
      barWidth,
      error,
      normal,
      anormal,
      abnormal,
			children
		} = this.props;
    const _valueOfProcess = value;
		const baseClasses = classnames(
      'px-gauge',
      {'px-gauge--children': children}
    );

		return (
			<div className={baseClasses} style={style}>
        <div id="chart">
          <svg xmlns="http://www.w3.org/2000/svg"
            id="chartSVG">
            <g id="chartG">
              <path className="arc chart-filled"></path>
              <path className="arc chart-empty"></path>
              <path className="needle" transform="rotate(-180)"></path>
            </g>
          </svg>
        </div>
        <div className="text-wrapper text--center">
          <span className="text-value">{_valueOfProcess}</span>
          <span className="text-unit">{unit}</span>
        </div>
				<style jsx>{stylesheet}</style>
			</div>
		);
	}
}
