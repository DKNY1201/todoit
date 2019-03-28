import * as enzyme from 'enzyme';
import * as React from 'react';

import Checkbox from '../../components/UI/Checkbox/Checkbox';
import Todo from './Todo';

describe('<Todo /> rendering', () => {
	let wrapper;
	let wrapperInstance;

	beforeEach(() => {
		const content = "Default content";
		const isHovering = false;
		wrapper = enzyme.shallow(<Todo content={content} />);
		wrapper.setState({isHovering});
		wrapperInstance = wrapper.instance();
	});

	it('should render a checkbox component', () => {
		expect(wrapper.find(Checkbox).length).toEqual(1);
	});

	it('should render content correctly', () => {
		const content = "Bring clothes to Goodwill";
		wrapper.setProps({content});
		expect(wrapper.find('.todo-content').text()).toEqual(content);
	});

	it('shouldn\'t render Drag icon when not hover', () => {
		const isHovering = false;
		wrapper.setState({isHovering});
		expect(wrapper.find('.icon-drag-drop').length).toEqual(0);
	});

	it('should render Drag icon when hover', () => {
		const isHovering = true;
		wrapper.setState({isHovering});
		expect(wrapper.find('.icon-drag-drop').length).toEqual(1);
	});

	it('shouldn\'t render Action icon when not hover', () => {
		const isHovering = false;
		wrapper.setState({isHovering});
		expect(wrapper.find('.icon-action').length).toEqual(0);
	});

	it('should render Action icon when hover', () => {
		const isHovering = true;
		wrapper.setState({isHovering});
		expect(wrapper.find('.icon-action').length).toEqual(1);
	});

	it('shouldn\'t render Comment icon when not hover', () => {
		const isHovering = false;
		wrapper.setState({isHovering});
		expect(wrapper.find('.icon-comment').length).toEqual(0);
	});

	it('should render Comment icon when hover', () => {
		const isHovering = true;
		wrapper.setState({isHovering});
		expect(wrapper.find('.icon-comment').length).toEqual(1);
	});

	it('should render date/time? in Schedule area when schedule is set', () => {
		const schedule = '03/25/2019 22:42';
		wrapper.setProps({schedule});
		expect(wrapper.find('.todo-schedule').text()).toEqual(schedule);
	});

	it('shouldn\'t render Schedule area when schedule is not set and not hover', () => {
		const schedule = null;
		const isHovering = false;
		wrapper.setProps({schedule});
		wrapper.setState({isHovering});
		expect(wrapper.find('.todo-schedule').length).toEqual(0);
	});

	it('should render a Calendar in Schedule area when schedule is not set and is hovering', () => {
		const schedule = null;
		const isHovering = true;
		wrapper.setProps({schedule});
		wrapper.setState({isHovering});
		expect(wrapper.find('.todo-schedule').find('.icon-schedule').length).toEqual(1);
	});

	it('shouldn\'t be hovered at beginning', () => {
		expect(wrapperInstance.state.isHovering).toEqual(false);
	});
});

describe('<Todo /> events', () => {
	let wrapper, wrapperInstance;

	beforeEach(() => {
		const content = "Default content";
		const isHovering = false;
		wrapper = enzyme.shallow(<Todo content={content} />);
		wrapper.setState({isHovering});
		wrapperInstance = wrapper.instance();
	});

	it('should call toggleIsHover() and change isHover to true when mouse entered', () => {
		const spy = jest.spyOn(wrapperInstance, 'toggleIsHover');
		wrapperInstance.forceUpdate();
		expect(spy).toHaveBeenCalledTimes(0);
		wrapper.simulate('mouseover');
		expect(spy).toHaveBeenCalledTimes(1);
		expect(wrapperInstance.state.isHover).toEqual(true);
	});

	it('should call toggleIsHover() and change isHover to false when mouse leaved', () => {
		const spy = jest.spyOn(wrapperInstance, 'toggleIsHover');
		wrapperInstance.forceUpdate();
		expect(spy).toHaveBeenCalledTimes(0);
		wrapper.simulate('mouseleave');
		expect(spy).toHaveBeenCalledTimes(1);
		expect(wrapperInstance.state.isHover).toEqual(false);
	});

	// it('should call completeTodo() when check the checkbox', () => {
	// 	const spy = jest.spyOn(wrapperInstance, 'completeTodo');
	// 	wrapperInstance.forceUpdate();
	// 	expect(spy).toHaveBeenCalledTimes(0);
	// 	wrapper.find(Checkbox).simulate('click');
	// 	expect(spy).toHaveBeenCalledTimes(1);
	// });

	it('should call showCommentModal() when click on Comment icon', () => {
		const spy = jest.spyOn(wrapperInstance, 'showCommentModal');
		wrapperInstance.forceUpdate();
		expect(spy).toHaveBeenCalledTimes(0);
		wrapper.find('.todo-comment').simulate('click');
		expect(spy).toHaveBeenCalledTimes(1);
	});

	it('should call showScheduleModal() when click on Schedule icon', () => {
		const spy = jest.spyOn(wrapperInstance, 'showScheduleModal');
		wrapperInstance.forceUpdate();
		expect(spy).toHaveBeenCalledTimes(0);
		wrapper.find('.todo-schedule').simulate('click');
		expect(spy).toHaveBeenCalledTimes(1);
	});

	it('should call showActionModal() when click on Action icon', () => {
		const spy = jest.spyOn(wrapperInstance, 'showActionModal');
		wrapperInstance.forceUpdate();
		expect(spy).toHaveBeenCalledTimes(0);
		wrapper.find('.todo-action').simulate('click');
		expect(spy).toHaveBeenCalledTimes(1);
	});
});
