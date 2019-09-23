import { TestBed } from '@angular/core/testing';

import { TodoService } from './todo.service';
import { Todo, Priority } from '../model/todo.model';

describe('TodoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TodoService = TestBed.get(TodoService);
    expect(service).toBeTruthy();
  });

  it('should load all todos', () => {
    const service: TodoService = TestBed.get(TodoService);
    service.getAllTodos().subscribe((todos) => {
      expect(Array.isArray(todos)).toBeTruthy();
    })
  });

  it('should add a todo', () => {
    const service: TodoService = TestBed.get(TodoService);
    const newTodo: Todo = {
      id: '123',
      title: 'Pick up the kids from school',
      description: 'Pick up the kids, and don´t forget to bring a snack.',
      priority: Priority.Medium
    }

    service.addTodo(newTodo).subscribe((todo: Todo)=> {
      expect(todo.id).toEqual(newTodo.id);
      expect(todo.title).toEqual(newTodo.title);
      expect(todo.description).toEqual(newTodo.description);
      expect(todo.priority).toEqual(newTodo.priority);
    })
  });

});
