import {expect} from 'chai';
import React from 'react';
import {shallow} from 'enzyme';
import PxTree from './';
var data = {
	id: 1,
	label: "All Categories",
	children: [
		{
			id: 2,
			label: "For Sale",
			children: [
				{
					label: "Audio & Stereo"
				}, {
					label: "Baby"
				}, {
					label: "Music"
				}
			]
		}, {
			id: 6,
			label: "Motors",
			children: [
				{
					id: 7,
					label: "Car Parts & Accessories",
					children: [
						{
							id: 7,
							label: "Category 1"
						}, {
							id: 8,
							label: "Category 2"
						}, {
							id: 13,
							label: "Category 3"
						}
					]
				}, {
					id: 8,
					label: "Cars"
				}, {
					id: 13,
					label: "Motorbike Parts & Accessories"
				}
			]
		}, {
			id: 9,
			label: "Jobs",
			children: [
				{
					id: 10,
					label: "Accountancy"
				}, {
					id: 11,
					label: "Financial Services & Insurance"
				}, {
					id: 12,
					label: "Bar Staff & Management"
				}
			]
		}
	]
};
describe('px-tree', () => {
	test('should...', () => {
		const wrapper = shallow(<PxTree items={data}/>);
		console.log(wrapper.debug());
		expect(true).to.equal(true);
	});
	//expect(wrapper.find('.label')).to.have.length(1);
	//expect(wrapper.find('.delta')).to.have.length(1);
	//expect(wrapper.find('.alpha')).to.have.length(1);
	//expect(wrapper.contains(<div className='label'/>)).to.equal(true);
});
