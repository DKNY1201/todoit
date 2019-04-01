import {TodoAction} from "../actions/todo";
import {ITodoAppState} from "../../model/index";

const initState: ITodoAppState = {
    todos: [
        {
            id: 1,
            content: 'Buy Skateboard',
            schedule: '03/20/2019',
            labelId: 1,
            priorityId: 2,
            parentTodoId: undefined,
            isCompleted: false
        },
        {
            id: 2,
            content: 'Buy more Skateboard',
            schedule: '03/20/2019',
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

const todo = (state: ITodoAppState = initState, action: TodoAction): ITodoAppState => {
    return state;
};

export default todo;