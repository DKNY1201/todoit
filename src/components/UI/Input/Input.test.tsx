import * as enzyme from 'enzyme';
import * as React from 'react';

import Input from './Input';

describe('<Input />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = enzyme.shallow(<Input placeholder="Enter Todo" value="A Todo"/>);
    });

    it('should render a icon correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should render an input with correct placeholder', () => {
        expect(wrapper.find('input').prop('placeholder')).toEqual('Enter Todo');
    });

    it('should have an input with correct value', () => {
        expect(wrapper.find('input').prop('value')).toEqual('A Todo');
    });

    it('should call provided function when value changes', () => {
        const changed = jest.fn();
        wrapper.setProps({changed});
        expect(changed).toHaveBeenCalledTimes(0);
        wrapper.find('input').simulate('change');
        expect(changed).toHaveBeenCalledTimes(1);
    });
});