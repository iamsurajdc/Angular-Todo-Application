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
    this.todoservice.getTodos().subscribe(r => {
      this.todos = r;
			console.log("TCL: TodosComponent -> ngOnInit -> todos", this.todos)
    });
  }
  deleteTodo(todo: Todo) {
		console.log("TCL: TodosComponent -> deleteTodo -> todo", todo)
    // Remove From UI
    this.todos = this.todos.filter(t => t.id !== todo.id);
    // Remove from server
    this.todoservice.deleteTodo(todo).subscribe();
  }

  addTodo(todo: Todo) {
    this.todoservice.addTodo(todo).subscribe((td: any) => {
			console.log("TCL: TodosComponent -> addTodo -> td", td)
      this.todos.push((td));
      // this.todoservice.getTodos().subscribe(r => {
      //   this.todos = r;});
    })
  }

  }