import React from 'react';
import { shallow } from 'enzyme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import AddTodoButton from './AddTodoButton';

describe('<AddTodoButton />', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<AddTodoButton />);
	});

	it('should render a Font Awesome icon', () => {
		console.log('wrapper ', wrapper);
		console.log('wrapper text', wrapper.text());
		expect(wrapper.find(FontAwesomeIcon).length).toEqual(1);
	});

	it('should render a Add Todo text', () => {
		expect(wrapper.find('span').text()).toEqual('Add Todo');
	});
});