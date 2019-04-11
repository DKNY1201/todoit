export interface ITodo {
    id?: number;
    content: string;
    schedule?: string;
    labelId: number;
    priorityId: number;
    userId?: number;
    parentTodoId?: number;
    isCompleted?: boolean;
}