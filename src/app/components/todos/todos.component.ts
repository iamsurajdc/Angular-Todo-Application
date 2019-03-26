import { Todo } from './../models/Todo';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor() { 
    this.todos = [
      {
        id: 1,
        title: 'Todo One',
        completed: false,
      },
      {
        id: 2,
        title: 'Todo Two',
        completed: true,
      },
      {
        id: 1,
        title: 'Todo Three',
        completed: false,
      }


    ]
  }

  ngOnInit() {
  }

}