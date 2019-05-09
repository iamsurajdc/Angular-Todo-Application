import { HttpClientModule, HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../components/models/Todo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todosUrl =  'https://jsonplaceholder.typicode.com/todos';
  todoLimit = '?_limit=5';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  constructor(
    private http: HttpClient
  ) {}

  getTodos(): Observable<Todo[]> {

    return this.http.get<Todo[]>(`${this.todosUrl}${this.todoLimit}`);

  }

  toggleCompleted(todo: Todo) {
    let url = `${this.todosUrl}/${todo.id}`
    return this.http.put(url, todo, this.httpOptions);

  }

  deleteTodo(todo: Todo) {

    let url = `${this.todosUrl}/${todo.id}`
    return this.http.delete(url, this.httpOptions);
  }

  addTodo(todo: Todo) {
    return this.http.post(this.todosUrl, todo, this.httpOptions);
  }
}
