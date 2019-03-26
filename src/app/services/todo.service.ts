import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  getTodos() {
    return  [
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
}
