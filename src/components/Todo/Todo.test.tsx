import * as enzyme from 'enzyme';
import * as React from 'react';

import Checkbox from '../UI/Checkbox/Checkbox';
import Todo from './Todo';

describe('<Todo /> rendering', () => {
	let wrapper, wrapperInstance;

	beforeEach(() => {
		const title = "Default title";
		wrapper = enzyme.shallow(<Todo title={title} />);
		wrapperInstance = wrapper.instance();
	});

	it('should render a checkbox component', () => {
		expect(wrapper.find(Checkbox).length).toEqual(1);
	});

	it('should render title', () => {
		const title = "Bring clothes to Goodwill";
		wrapper.setProps(title);
		expect(wrapper.find('.todoTitle').text()).toEqual(title);
	});

	it('should render schedule when schedule is set', () => {
		const schedule = "03/25/2019 22:42";
		wrapper.setProps(schedule);
		expect(wrapper.find('.todoSchedule').text()).toEqual(schedule);
	});

	it('shouldn\'t display Drag icon, Action icon when not hover', () => {

	});

	it('should display Drag icon, Action icon when hover', () => {

	});

	it('shouldn\'t display Calendar icon when not hover and schedule is not set', () => {

	});

	it('should display Calendar icon when hover and schedule is not set', () => {

	});

	it('isHover state should be false at beginning', () => {
		expect(wrapperInstance.state.isHover).toEqual(false);
	});

	it('should change isHover to true when mouse entered', () => {
		// expect(wrapperInstance.state.isHover).toEqual(false);
	});

	it('should change isHover to false when mouse leaved', () => {
		// expect(wrapperInstance.state.isHover).toEqual(false);
	});
});
