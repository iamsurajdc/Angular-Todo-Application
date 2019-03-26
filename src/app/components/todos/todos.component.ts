import { Todo } from './../models/Todo';

import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor(private todoservice: TodoService) { 
   
  }

  ngOnInit() {
    this.todos = this.todoservice.getTodos();
  }

}