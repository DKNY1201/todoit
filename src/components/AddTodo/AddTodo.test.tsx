import * as enzyme from 'enzyme';
import * as React from 'react';

import AddTodo from './AddTodo';

describe('<AddTodo > render', () => {
    let wrapper, wrapperInstance;

    beforeEach(() => {
        const isAdding = false;
        wrapper = enzyme.shallow(<AddTodo labelId="1" />);
        wrapper.setState({isAdding});
        wrapperInstance = wrapper.instance();
    });

    it('should render Add Todo text when not adding', () => {
        expect(wrapper.find('.add-todo-text').text()).toEqual('Add Todo');
        expect(wrapper.find('.add-todo-form').length).toEqual(0);
    });

    it('should render Adding form when adding', () => {
        const isAdding = true;
        wrapper.setState({isAdding});
        expect(wrapper.find('.add-todo-form').length).toEqual(1);
        expect(wrapper.find('.add-todo-text').length).toEqual(0);
    });

    it('should always render blank Todo form at first when adding', () => {
        const isAdding = true;
        wrapper.setState({isAdding});
        expect(wrapperInstance.state.content).toEqual('');
        expect(wrapperInstance.state.schedule).toEqual('');
        expect(wrapperInstance.state.priorityId).toEqual('');
        expect(wrapperInstance.state.parentTodoId).toEqual('');
    });
});

describe('<AddTodo > render', () => {
    let wrapper, wrapperInstance;

    beforeEach(() => {
        wrapper = enzyme.mount(<AddTodo labelId="1"/>);
        wrapperInstance = wrapper.instance();
    });

    it('should call triggerAdding() and change isAdding to true when click on Add Todo text', () => {
        const spy = jest.spyOn(wrapperInstance, 'triggerAdding');
        wrapperInstance.forceUpdate();
        expect(spy).toHaveBeenCalledTimes(0);
        wrapper.find('.add-todo-text').simulate('click');
        expect(spy).toHaveBeenCalledTimes(1);
        expect(wrapperInstance.state.isAdding).toEqual(true);
    });

    it('should call cancelAdding() and change isAdding to false when click on Cancel', () => {
        const spy = jest.spyOn(wrapperInstance, 'cancelAdding');
        wrapperInstance.forceUpdate();
        expect(spy).toHaveBeenCalledTimes(0);
        wrapper.find('.cancel-add-todo-text').simulate('click');
        expect(spy).toHaveBeenCalledTimes(1);
        expect(wrapperInstance.state.isAdding).toEqual(false);
    });

    it('should call addTodo() when click on Add Todo button', () => {
        const spy = jest.spyOn(wrapperInstance, 'addTodo');
        wrapperInstance.forceUpdate();
        expect(spy).toHaveBeenCalledTimes(0);
        wrapper.find('.add-todo-button').simulate('click');
        expect(spy).toHaveBeenCalledTimes(1);
    });

    it('should call addTodo() and change isAdding to false when click on Add Todo button and has content', () => {
        wrapperInstance.state.content = "random content";
        const spy = jest.spyOn(wrapperInstance, 'addTodo');
        wrapperInstance.forceUpdate();
        expect(spy).toHaveBeenCalledTimes(0);
        wrapper.find('.add-todo-button').simulate('click');
        expect(spy).toHaveBeenCalledTimes(1);
        expect(wrapperInstance.state.isAdding).toEqual(false);
    });

    it('shouldn\'t change isAdding to true when click on Add Todo button and has no content', () => {
        const spy = jest.spyOn(wrapperInstance, 'addTodo');
        wrapperInstance.forceUpdate();
        expect(spy).toHaveBeenCalledTimes(0);
        wrapper.find('.add-todo-button').simulate('click');
        expect(spy).toHaveBeenCalledTimes(1);
        expect(wrapperInstance.state.isAdding).toEqual(false);
    });

    it('should call openScheduleModal() when click on Schedule area', () => {
        const spy = jest.spyOn(wrapperInstance, 'openScheduleModal');
        wrapperInstance.forceUpdate();
        expect(spy).toHaveBeenCalledTimes(0);
        wrapper.find('.add-todo-schedule').simulate('click');
        expect(spy).toHaveBeenCalledTimes(1);
    });

    it('should call openLabelModal() when click on Label icon', () => {
        const spy = jest.spyOn(wrapperInstance, 'openLabelModal');
        wrapperInstance.forceUpdate();
        expect(spy).toHaveBeenCalledTimes(0);
        wrapper.find('.add-todo-label').simulate('click');
        expect(spy).toHaveBeenCalledTimes(1);
    });

    it('should call openPriorityModal() when click on Priority icon', () => {
        const spy = jest.spyOn(wrapperInstance, 'openPriorityModal');
        wrapperInstance.forceUpdate();
        expect(spy).toHaveBeenCalledTimes(0);
        wrapper.find('.add-todo-priority').simulate('click');
        expect(spy).toHaveBeenCalledTimes(1);
    });
});

