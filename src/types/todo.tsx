export interface ITodo {
    id: number;
    title: string;
    description: string;
    time: string;
    labelId: number;
    priorityId: number;
    userId: number;
    parentTodoId?: number;
    isCompleted: boolean;
}