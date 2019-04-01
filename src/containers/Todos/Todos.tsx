import * as React from 'react';
import {connect} from 'react-redux';

import AddTodo from '../../components/AddTodo/AddTodo';
import {IAppState, ITodoAppState} from "../../model/index";
import Todo from '../Todo/Todo';
import './Todos.css';

export interface ITodosState {
    isAddingTodo: boolean;
}

export class Todos extends React.Component<ITodoAppState, ITodosState> {
    state = {
        isAddingTodo: false
    };


    public render(): React.ReactNode {
        const {todos, labels} = this.props;
        // const defaultLabel = {
        //     id: 1,
        //     color: '#990000',
        //     title: 'Personal',
        //     parentLabelId: undefined,
        //     isFavorite: false,
        //     isSelected: true
        // };
        const selectedLabel = labels.find(label => label.isSelected);
        const labelTitle = selectedLabel ? selectedLabel.title : 'N/A';

        const todoItems = selectedLabel ? todos
            .filter(todo => !todo.isCompleted)
            .filter(todo => todo.labelId === selectedLabel.id)
            .map(todo => <Todo key={todo.id} schedule={todo.schedule} content={todo.content} completeTodo={this.completeTodoHandler} />) : null;

        return (
            <div className="todos-container">
                <h1 className="label-title">{labelTitle}</h1>
                {todoItems}
                <AddTodo />
            </div>
        )
    }

    private completeTodoHandler = () => {
        console.log('completeTodoHandler');
    }
}

// Todos.propTypes = {
//     todo: PropTypes.object
// };

const mapStateToProps = ({todo}: IAppState) => {
    const {labels, priorities, todos} = todo;
    return {
        labels,
        priorities,
        todos,
    }
}

// const mapDispatchToProps = dispatch => {
// 	return {
// 		onIngredientAdded: (igName) => dispatch(actions.addIngredient(igName)),
//
// 	}
// }
export default connect(mapStateToProps)(Todos);