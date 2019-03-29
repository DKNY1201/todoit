export interface ITodo {
    id: number;
    content: string;
    time: string;
    labelId: number;
    priorityId: number;
    userId?: number;
    parentTodoId?: number;
    isCompleted: boolean;
}