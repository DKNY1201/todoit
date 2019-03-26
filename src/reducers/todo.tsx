import {TodoAction} from "../actions/todo";
import {ITodoState} from "../types/index";

const initState: ITodoState = {
    todos: [
        {
            id: 1,
            title: 'Buy Skateboard',
            time: '03/20/2019',
            labelId: 1,
            priorityId: 2,
            parentTodoId: undefined,
            isCompleted: false
        },
        {
            id: 2,
            title: 'Buy more Skateboard',
            time: '03/20/2019',
            labelId: 1,
            priorityId: 2,
            parentTodoId: undefined,
            isCompleted: false
        }
    ],
    labels: [
        {
            id: 1,
            color: '#990000',
            title: 'Study',
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
        },
        {
            id: 2,
            title: 'Priority 2',
            icon: 'flag-orange',
        },
        {
            id: 3,
            title: 'Priority 3',
            icon: 'flag-yellow',
        },
        {
            id: 4,
            title: 'Priority 4',
            icon: 'flag-gray',
        }
    ]
};

const todo = (state: ITodoState = initState, action: TodoAction): ITodoState => {
    return state;
};

export default todo;