import * as React from 'react';
import * as enzyme from 'enzyme';

import Todos from './Todos';
import Todo from '../../components/Todo/Todo';
import AddTodo from '../../components/AddTodo/AddTodo';

describe('<Todos />', () => {
	let wrapper, wrapperInstance;

	// beforeEach(() => {
	// 	const labels = [
	// 		{
	// 			id: 1,
	// 			color: '#990000',
	// 			title: 'Personal',
	// 			parentLabelId: null,
	// 			isFavorite: false,
	// 			isSelected: false
	// 		},
	// 		{
	// 			id: 2,
	// 			color: '#000000',
	// 			title: 'Work',
	// 			parentLabelId: null,
	// 			isFavorite: false,
	// 			isSelected: true
	// 		}
	// 	];
	//
	// 	const priorities = [
	// 		{
	// 			id: 1,
	// 			title: 'Priority 1',
	// 			icon: 'flag-red',
	// 			isSelected: false
	// 		},
	// 		{
	// 			id: 2,
	// 			title: 'Priority 2',
	// 			icon: 'flag-orange',
	// 			isSelected: false
	// 		}
	// 	];
	//
	// 	const todos = [
	// 		{
	// 			id: 1,
	// 			title: 'Buy Skateboard',
	// 			description: 'Target, Home Depot or Walmart',
	// 			time: '03/20/2019',
	// 			labelId: 1,
	// 			priorityId: 2,
	// 			userId: 1,
	// 			parentTodoId: null,
	// 			isCompleted: false
	// 		},
	// 		{
	// 			id: 2,
	// 			title: 'Learn to Skateboard',
	// 			description: 'Watch Youtube, find a community',
	// 			time: '05/16/2019',
	// 			labelId: 2,
	// 			priorityId: 2,
	// 			userId: 1,
	// 			parentTodoId: null,
	// 			isCompleted: false
	// 		},
	// 		{
	// 			id: 3,
	// 			title: 'Learn GraphQL',
	// 			description: 'Follow the course on jscomplete.com',
	// 			time: '07/15/2019',
	// 			labelId: 2,
	// 			priorityId: 3,
	// 			userId: 1,
	// 			parentTodoId: null,
	// 			isCompleted: false
	// 		},
	// 		{
	// 			id: 4,
	// 			title: 'Learn GraphQL 1',
	// 			description: 'Follow the course on jscomplete.com 1',
	// 			time: '07/15/2019',
	// 			labelId: 2,
	// 			priorityId: 3,
	// 			userId: 1,
	// 			parentTodoId: null,
	// 			isCompleted: true
	// 		}
	// 	];
	//
	// 	// wrapper.setProps({labels, priorities, todos});
	// 	wrapper = enzyme.shallow(<Todos labels={labels} priorities={priorities} todos={todos} />);
	// 	wrapperInstance = wrapper.instance();
	// });

	it('should always render display name', () => {
		const labels = [
			{
				id: 1,
				color: '#990000',
				title: 'Personal',
				parentLabelId: null,
				isFavorite: false,
				isSelected: false
			},
			{
				id: 2,
				color: '#000000',
				title: 'Work',
				parentLabelId: null,
				isFavorite: false,
				isSelected: true
			}
		];

		const priorities = [
			{
				id: 1,
				title: 'Priority 1',
				icon: 'flag-red',
				isSelected: false
			},
			{
				id: 2,
				title: 'Priority 2',
				icon: 'flag-orange',
				isSelected: false
			}
		];

		const todos = [
			{
				id: 1,
				title: 'Buy Skateboard',
				description: 'Target, Home Depot or Walmart',
				time: '03/20/2019',
				labelId: 1,
				priorityId: 2,
				userId: 1,
				parentTodoId: null,
				isCompleted: false
			},
			{
				id: 2,
				title: 'Learn to Skateboard',
				description: 'Watch Youtube, find a community',
				time: '05/16/2019',
				labelId: 2,
				priorityId: 2,
				userId: 1,
				parentTodoId: null,
				isCompleted: false
			},
			{
				id: 3,
				title: 'Learn GraphQL',
				description: 'Follow the course on jscomplete.com',
				time: '07/15/2019',
				labelId: 2,
				priorityId: 3,
				userId: 1,
				parentTodoId: null,
				isCompleted: false
			},
			{
				id: 4,
				title: 'Learn GraphQL 1',
				description: 'Follow the course on jscomplete.com 1',
				time: '07/15/2019',
				labelId: 2,
				priorityId: 3,
				userId: 1,
				parentTodoId: null,
				isCompleted: true
			}
		];
		const wrapper = enzyme.shallow(<Todos labels={labels} priorities={priorities} todos={todos} />);
		// expect(wrapper.find('h1').length).toEqual(1);
		expect(wrapper.find('h1').first().text()).not.toEqual('');
	});

	it('should render selected label name', () => {
		expect(wrapper.find('h1.displayName').text()).toEqual('Work');
	});

	it('should render selected priority name', () => {
		const priorities = [
			{
				id: 1,
				title: 'Priority 1',
				icon: 'flag-red',
				isSelected: false
			},
			{
				id: 2,
				title: 'Priority 2',
				icon: 'flag-orange',
				isSelected: true
			}
		];

		wrapper.setProps({priorities});
		expect(wrapper.find('h1.displayName').text()).toEqual('Priority 2');
	});

	it('should render list of Todo component that are not completed and under selected label', () => {
		expect(wrapper.find(Todo).length).toEqual(2);
	});

	it('should render a AddTodo component', () => {
		expect(wrapper.find(AddTodo).length).toEqual(1);
	});
});

describe('mounted <Todos />', () => {

});