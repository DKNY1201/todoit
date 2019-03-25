import * as React from 'react';
import {connect} from 'react-redux';

import AddTodo from '../../components/AddTodo/AddTodo';
import Todo from '../../components/Todo/Todo';
import {IState, ITodoState} from "../../types/index";
import './Todos.css';

export interface ITodosState {
    isAddingTodo: boolean;
}

class Todos extends React.Component<ITodoState, ITodosState> {
    constructor(props: ITodoState) {
        super(props);
        this.state = {
            isAddingTodo: false
        };
    }


    render() {
        const {todos, labels, priorities} = this.props;
        const selectedLabel = labels.find(label => label.isSelected);
        const selectedPriority = priorities.find(priority => priority.isSelected);
        const displayName = selectedLabel ? selectedLabel.title : selectedPriority ? selectedPriority.title : '';

        const todosItem = todos.map(todo => <Todo key={todo.id} />);

        return (
            <div className="todoContainer">
                <h1 className="displayName">{displayName}</h1>
                {todosItem}
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