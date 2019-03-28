import {ILabel} from "./label";
import {IPriority} from "./priority";
import {ITodo} from "./todo";

export {ITodo} from './todo';
export {ILabel} from './label';
export {IPriority} from './priority';
// Interface for todo reducer, for passed in props in Todos component
export interface ITodoAppState {
    todos: ITodo[];
    labels: ILabel[];
    priorities: IPriority[];
}

// Interface for whole app. Is the App state was created by combineReducers
// Using when passing data in mapStateToProps()
export interface IAppState {
    todo: ITodoAppState;
}