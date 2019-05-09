import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {

  @Output() addTodo: EventEmitter<any> = new EventEmitter;

  title: string;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log("Hi")
    let todo = {
      title: this.title,
      completed: false
    }
    this.addTodo.emit(todo);
		console.log("TCL: AddTodoComponent -> onSubmit -> todo", todo)
  }

}
