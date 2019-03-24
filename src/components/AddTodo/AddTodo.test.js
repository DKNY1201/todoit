import React from 'react';
import { shallow } from 'enzyme';

import AddTodo from './AddTodo';

describe('<AddTodo />', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<AddTodo />);
	});

});