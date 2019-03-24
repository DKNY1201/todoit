import * as React from 'react';
import {connect} from 'react-redux';
import {ITodoState} from "../../types/index";

// import classes from './Todos.css';
// import Todo from '../../components/Todo/Todo';
// import AddTodo from '../../components/AddTodo/AddTodo';

class Todos extends React.Component {
    // state = {
    //     isAddingTodo: false
    // };
    //
    // render() {
    //     const {todos, labels, priorities} = this.props;
    //     const selectedLabel = labels.find(label => label.isSelected);
    //     const selectedPriority = priorities.find(priority => priority.isSelected);
    //     const displayName = selectedLabel ? selectedLabel.title : selectedPriority ? selectedPriority.title : '';
    //
    //     const todosItem = todos.map(todo => <Todo key={todo.id} />);
    //
    //     return (
    //         <div className={classes.TodosContainer}>
    //             <h1 className="DisplayName">{displayName}</h1>
    //             {todosItem}
    //             <AddTodo />
    //         </div>
    //     )
    // }

    render() {
        return <h1>TODOSSS</h1>;
    }
}


const mapStateToProps = ({todos, labels, priorities}: ITodoState) => {
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