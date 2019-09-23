export class Todo {
    id: String;
    title: String;
    description: String;
    priority: Priority;
}

export enum Priority {
    High = 'High',
    Medium = 'Medium',
    Low = 'Low'
}