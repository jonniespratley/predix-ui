import React from 'react';
import classnames from 'classnames';
import stylesheet from './device-view.scss';
import BaseComponent from '../BaseComponent';

/**
 * px-example-component component
 */
export default class DeviewView extends BaseComponent {
  constructor(props){
    super(props, {displayName: 'DeviewView'});
  }
	render() {
		const {
			label = 'px-example-component',
      src,
      device = 'phone',
      landscape,
			style,
			children
		} = this.props;

		const baseClasses = classnames(
      'device-view',
      {'landscape': landscape},
    {[`${device}`]: device}
  );

		return (
			<div className={baseClasses} style={style} data-device={device}>
        <div className='container'>
          {src && <iframe src={src}></iframe>}
          {children && <div className="device-view-content">{children}</div>}
        </div>
				<style jsx>{stylesheet}</style>
			</div>
		);
	}

}
