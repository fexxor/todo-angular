import { Component, OnInit, Input } from '@angular/core';
import { Todo, Priority } from '../model/todo.model';
import { TodoService } from '../service/todo.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translatex(-100%)'}),
        animate('200ms ease-in-out', style({transform: 'translatex(0%)'}))
      ]),
    ])
  ]
})
export class TodoListComponent implements OnInit {

  todos: Todo[];

  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit() {
    this.todoService.getAllTodos().subscribe(todos => {
      this.todos = this.sortTodos(todos);
    })
  }

  sortTodos(todos: Todo[]): Todo[] {

    todos = todos.sort((a, b) => {
      if (!a.title || !b.title) {
        return;
      } else {
        return a.title.localeCompare(b.title.toString());
      }
    })

    const todoMap = {high: [], medium: [], low: []};

    for (let i = 0; i < todos.length; i++) {
      const todo = todos[i];
      if (todo.priority === Priority.High) {
        todoMap.high.push(todo)
      } else if (todo.priority === Priority.Medium) {
        todoMap.medium.push(todo)
      } else {
        todoMap.low.push(todo)
      }
    }

    return todoMap.high.concat(todoMap.medium).concat(todoMap.low);
  }
}
