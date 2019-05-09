import { TodoService } from './../../services/todo.service';
import { Component, OnInit, Input, Output } from '@angular/core';
import { Todo } from '../models/Todo';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoservice: TodoService) { }

  ngOnInit() {
  }

  // Set Dynamic Classes
  setClasses() {
    let classes = {
      todo: true,
      'is-complete': this.todo.completed
    }
    return classes;
  }

  onToggle(todo) {
    // toggle On UI
    todo.completed = !todo.completed;
    
    // toggle On server
    this.todoservice.toggleCompleted(todo).subscribe((todo) => {
      console.log("Todo", todo);
    });

  }

  onDelete(todo) {
    this.deleteTodo.emit(todo);
  }
}
