import { Component, OnInit, Input } from '@angular/core';
import { Todo, Priority } from '../model/todo.model';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  @Input()
  todo: Todo;

  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit() {
  }

  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo).subscribe(() => {

    })
  }

  editTodo(todo: Todo, priority: Priority) {
    console.log(priority)
    todo.priority = priority;
    this.todoService.editTodo(todo).subscribe(() => {
    })
  }

}
