import * as enzyme from 'enzyme';
import * as React from 'react';

import Button from './Button';

describe('<Button />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = enzyme.shallow(<Button label="Add Todo" style="highlight" id="add-todo-btn"/>);
    });

    it('should render a icon correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should render a button with provided label', () => {
        expect(wrapper.find('button').text()).toEqual('Add Todo');
    });

    it('should have corresponding class with provided style', () => {
        expect(wrapper.hasClass('highlight')).toEqual(true);
    });

    it('should have corresponding id with provided id', () => {
        expect(wrapper.hasAttribute('id')).toEqual("add-todo-btn");
    });

    it('should call provided function when click', () => {
        const clicked = jest.fn();
        wrapper.setProps({clicked});
        expect(clicked).toHaveBeenCalledTimes(0);
        wrapper.find('button').simulate('click');
        expect(clicked).toHaveBeenCalledTimes(1);
    });
});