import * as constants from '../constants';
import * as types from '../types';
import {ITodo} from "../types/todo";

export interface IAddTodo {
    type: constants.ADD_TODO;
    todo: types.ITodo;
}

export interface IEditTodo {
    type: constants.EDIT_TODO;
    todo: types.ITodo;
}

export interface IDeleteTodo {
    type: constants.DELETE_TODO;
    todoId: number;
}

export interface ICompleteTodo {
    type: constants.COMPLETE_TODO;
    todoId: number;
}

export type TodoAction = IAddTodo | IEditTodo | IDeleteTodo | ICompleteTodo;

export const addTodo = (todo: ITodo): IAddTodo => {
    return {
        todo,
        type: constants.ADD_TODO,
    }
}

export const editTodo = (todo: ITodo): IEditTodo => {
    return {
        todo,
        type: constants.EDIT_TODO
    }
}

export const deleteTodo = (todoId: number): IDeleteTodo => {
    return {
        todoId,
        type: constants.DELETE_TODO
    }
}

export const completeTodo = (todoId: number): ICompleteTodo => {
    return {
        todoId,
        type: constants.COMPLETE_TODO
    }
}
