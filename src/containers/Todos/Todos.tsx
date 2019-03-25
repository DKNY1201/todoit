import * as React from 'react';
import {connect} from 'react-redux';

import AddTodo from '../../components/AddTodo/AddTodo';
import Todo from '../../components/Todo/Todo';
import {IState, ITodoState} from "../../types/index";
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
        }
        const selectedLabel = labels.find(label => label.isSelected) || defaultLabel;
        const displayName = selectedLabel ? selectedLabel.title : 'N/A';

        const todoItems = todos
            .filter(todo => !todo.isCompleted)
            .filter(todo => todo.labelId === selectedLabel.id)
            .map(todo => <Todo key={todo.id} />);

        return (
            <div className="todoContainer">
                <h1 className="displayName">{displayName}</h1>
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