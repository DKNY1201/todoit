import {TodoAction} from "../actions/todo";
import {ITodoState} from "../types/index";

const initState: ITodoState = {
    todos: [
        {
            id: 1,
            title: 'Buy Skateboard',
            description: 'Target, Home Depot or Walmart',
            time: '03/20/2019',
            labelId: 1,
            priorityId: 2,
            userId: 1,
            parentTodoId: undefined,
            isCompleted: false
        },
        {
            id: 2,
            title: 'Buy more Skateboard',
            description: 'Target, Home Depot or Walmart',
            time: '03/20/2019',
            labelId: 1,
            priorityId: 2,
            userId: 1,
            parentTodoId: undefined,
            isCompleted: false
        }
    ],
    labels: [
        {
            id: 1,
            color: '#990000',
            title: 'Personal',
            parentLabelId: undefined,
            isFavorite: false,
            isSelected: true
        }
    ],
    priorities: [
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
        },
        {
            id: 3,
            title: 'Priority 3',
            icon: 'flag-yellow',
            isSelected: false
        },
        {
            id: 4,
            title: 'Priority 4',
            icon: 'flag-gray',
            isSelected: false
        }
    ]
};

const todo = (state: ITodoState = initState, action: TodoAction): ITodoState => {
    return state;
};

export default todo;