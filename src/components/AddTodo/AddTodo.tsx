import * as React from 'react';

import {IconType, IconVersion} from '../../constants';
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import './AddTodo.css';
import Icon from "../UI/Icon/Icon";
import {ITodo} from "../../model/todo";

interface IAddTodoState {
    isAdding: boolean;
    content: string;
    schedule?: string;
    labelId: number | undefined;
    priorityId?: number | undefined;
    parentTodoId?: number | undefined;
}

interface IAddTodoProps {
    labelId: number;
    addTodo: (todo: ITodo) => void;
}

const DEFAULT_PRIORITY = 4;

class AddTodo extends React.Component<IAddTodoProps, IAddTodoState> {
    state = {
        isAdding: false,
        content: '',
        schedule: '',
        labelId: -1,
        priorityId: DEFAULT_PRIORITY,
        parentTodoId: undefined,
    }

    public componentDidMount() {
        this.setState({
            labelId: this.props.labelId
        });
    }

    public render() {
        const {isAdding} = this.state;

        const addTodoContent = isAdding
            ? (
                <div className="add-todo-form">
                    <div className="add-todo-form-top">
                        <Input placeholder="Enter todo" changed={this.todoChangedHandler} />
                        <div className="add-todo-schedule" onClick={this.showScheduleModal}>schedule</div>
                    </div>
                    <div className="add-todo-form-bottom">
                        <div className="add-todo-form-bottom-left">
                            <Button label="Add Todo" style="highlight" clicked={this.addTodo} />
                            <Button label="Cancel" clicked={this.cancelAddTodo}/>
                        </div>
                        <div className="add-todo-form-bottom-right">
                            <Icon type={IconType.Action} version={IconVersion.Fas} clicked={this.showLabelModal} />
                            <Icon type={IconType.Action} version={IconVersion.Fas} clicked={this.showPriorityModal} />
                        </div>
                    </div>
                </div>
            )
            : (
                <div className="add-todo-text" onClick={this.triggerAdding}>
                    <span>Add Todo</span>
                </div>
            );

        return (
            <div className="add-todo-container">
                {addTodoContent}
            </div>
        );
    }

    private todoChangedHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({content: e.target.value});
    }

    private triggerAdding = () => {
        this.setState({
            isAdding: true
        });
    }

    private showScheduleModal = () => {
        console.log('showScheduleModal');
    }

    private showLabelModal = () => {
        console.log('showLabelModal');
    }

    private showPriorityModal = () => {
        console.log('showPriorityModal');
    }

    private addTodo = () => {
        const {content, schedule, labelId, priorityId, parentTodoId} = this.state;
        const newTodo: ITodo = {
            content,
            schedule,
            labelId,
            priorityId,
            parentTodoId
        };
        this.props.addTodo(newTodo);
    }

    private cancelAddTodo = () => {
        console.log('cancelAddTodo');
    }
}

export default AddTodo;