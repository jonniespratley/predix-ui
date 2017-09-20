import React from 'react';

import styles from './style';
export default ({ size=100, finished = false}) => (
	<div>
		{!finished && <svg viewBox='0 0 100 100' className="px-spinner" height={size} width={size}>
			<circle className="circle1" cx="50" cy="50" r="45"></circle>
			<circle className="circle2" cx="50" cy="50" r="45" transform="rotate(-45,50,50)"></circle>
		</svg>}
    <style jsx>{styles}</style>
	</div>
);
