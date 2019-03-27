import * as enzyme from 'enzyme';
import * as React from 'react';

import Checkbox from '../UI/Checkbox/Checkbox';
import Todo from './Todo';

describe('<Todo /> rendering', () => {
	let wrapper, wrapperInstance;

	beforeEach(() => {
		const title = "Default title";
		const isHovering = false;
		wrapper = enzyme.shallow(<Todo title={title} />);
		wrapper.setState({isHovering});
		wrapperInstance = wrapper.instance();
	});

	it('should render a checkbox component', () => {
		expect(wrapper.find(Checkbox).length).toEqual(1);
	});

	it('should render title correctly', () => {
		const title = "Bring clothes to Goodwill";
		wrapper.setProps({title});
		expect(wrapper.find('.todoTitle').text()).toEqual(title);
	});

	it('shouldn\'t render Drag icon, Action icon when not hover', () => {
		const isHovering = false;
		wrapper.setState({isHovering});
		expect(wrapper.find('.todoDragIcon').length).toEqual(0);
		expect(wrapper.find('.todoActionIcon').length).toEqual(0);
	});

	it('should render Drag icon, Action icon when hover', () => {
		const isHovering = true;
		wrapper.setState({isHovering});
		expect(wrapper.find('.todoDragIcon').length).toEqual(1);
		expect(wrapper.find('.todoActionIcon').length).toEqual(1);
	});

	it('should render Schedule area when schedule is set', () => {
		const schedule = '03/25/2019 22:42';
		wrapper.setProps({schedule});
		expect(wrapper.find('.todoSchedule').text()).toEqual(schedule);
	});

	it('shouldn\'t render Schedule area when schedule is not set and not hover', () => {
		const schedule = null;
		const isHovering = false;
		wrapper.setProps({schedule});
		wrapper.setState({isHovering});
		expect(wrapper.find('.todoSchedule').length).toEqual(0);
	});

	it('should display Schedule area when schedule is not set and is hovering', () => {
		const schedule = null;
		const isHovering = true;
		wrapper.setProps({schedule});
		wrapper.setState({isHovering});
		expect(wrapper.find('.todoSchedule').length).toEqual(1);
	});

	it('isHover state should be false at beginning', () => {
		expect(wrapperInstance.state.isHover).toEqual(false);
	});

	// it('should change isHover to true when mouse entered', () => {
	// 	// Simulate
	// 	expect(wrapperInstance.state.isHover).toEqual(true);
	// });
    //
	// it('should change isHover to false when mouse leaved', () => {
	// 	// Simulate
	// 	expect(wrapperInstance.state.isHover).toEqual(true);
	// });
});
