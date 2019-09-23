import { Injectable } from '@angular/core';
import { ReplaySubject, Observable } from 'rxjs';
import { of } from 'rxjs';
import { Todo } from '../model/todo.model';

/**
 * Fake Service that fetches from local storage instead of from an API.
 */
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todoListSubject: ReplaySubject<Todo[]> = new ReplaySubject();

  constructor() { 
    if (!localStorage.getItem('todos')) {
      localStorage.setItem('todos', JSON.stringify([]));
    }
  }

  getAllTodos(): ReplaySubject<Todo[]>  {
    this.todoListSubject.next(JSON.parse(localStorage.getItem('todos')));
    return this.todoListSubject;
  }

  addTodo(newTodo: Todo): Observable<Todo> {
    newTodo.id = Math.floor(100 * Math.random()).toString();
    const todos: Todo[] = JSON.parse(localStorage.getItem('todos'));
    todos.push(newTodo);
    localStorage.setItem('todos', JSON.stringify(todos));
    this.todoListSubject.next(JSON.parse(localStorage.getItem('todos')));
    return of(newTodo);
  } 

  editTodo(todo: Todo): Observable<Todo> {
    let todos: Todo[] = JSON.parse(localStorage.getItem('todos'));
    todos = todos.filter(t => {
      if (t.id !== todo.id) {
        return t;
      }
    })
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
    this.todoListSubject.next(JSON.parse(localStorage.getItem('todos')));
    return of(todo);
  } 

  deleteTodo(todo: Todo): Observable<Todo> {
    let todos: Todo[] = JSON.parse(localStorage.getItem('todos'));
    todos = todos.filter(t => {
      if (t.id !== todo.id) {
        return t;
      }
    })
    localStorage.setItem('todos', JSON.stringify(todos));
    this.todoListSubject.next(JSON.parse(localStorage.getItem('todos')));
    return of(todo);
  } 
}
