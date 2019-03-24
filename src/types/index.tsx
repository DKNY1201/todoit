import {ILabel} from "./label";
import {IPriority} from "./priority";
import {ITodo} from "./todo";

export {ITodo} from './todo';
export {ILabel} from './label';
export {IPriority} from './priority';
export interface ITodoState {
    todos: ITodo[];
    labels: ILabel[];
    priorities: IPriority[];
}

export interface IState {
    todo: ITodoState;
}