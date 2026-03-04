export interface Todo {
    id: number;
    task: string;
    isDone: boolean;
}

export interface Add_todo{
    (todo: string): void;
}