import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Priority } from '../../model/todo.model';

@Component({
  selector: 'app-priority-select',
  templateUrl: './priority-select.component.html',
  styleUrls: ['./priority-select.component.scss']
})
export class PrioritySelectComponent implements OnInit {

  @Input()
  priority: Priority;

  @Input()
  displayErrorMessage: boolean;

  @Output()
  priorityChange = new EventEmitter<Priority>();

  constructor() { }

  ngOnInit() {
  }

  changePriority(priority) {
    this.priority = priority;
    this.priorityChange.emit(this.priority);
  }

}
