import { Component, OnInit } from '@angular/core';
import { Todo } from '../model/todo.model';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  todo = new Todo();
  submitted = false;

  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit() {
  }

  saveTodo(todo: Todo) {
    if (todo.title && todo.title.trim() && todo.priority) {
      this.todoService.addTodo(todo).subscribe(() => {
        this.todo = new Todo();
        this.submitted = false;
      });
    } else {
      this.submitted = true;
    }
  }

}
