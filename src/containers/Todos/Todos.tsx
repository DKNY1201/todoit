import * as React from 'react';
import {connect} from 'react-redux';

import AddTodo from '../../components/AddTodo/AddTodo';
import Todo from '../Todo/Todo';
import {IState, ITodoState} from "../../model/index";
import './Todos.css';

export interface ITodosState {
    isAddingTodo: boolean;
}

export class Todos extends React.Component<ITodoState, ITodosState> {
    state = {
        isAddingTodo: false
    };


    render() {
        const {todos, labels} = this.props;
        const defaultLabel = {
            id: 1,
            color: '#990000',
            title: 'Personal',
            parentLabelId: undefined,
            isFavorite: false,
            isSelected: true
        };
        const selectedLabel = labels.find(label => label.isSelected);
        const labelTitle = selectedLabel ? selectedLabel.title : 'N/A';

        const todoItems = selectedLabel ? todos
            .filter(todo => !todo.isCompleted)
            .filter(todo => todo.labelId === selectedLabel.id)
            .map(todo => <Todo key={todo.id} />) : null;

        return (
            <div className="todo-container">
                <h1 className="label-title">{labelTitle}</h1>
                {todoItems}
                <AddTodo />
            </div>
        )
    }
}


const mapStateToProps = ({todo}: IState) => {
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