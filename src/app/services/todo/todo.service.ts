import { Injectable } from '@angular/core';

import { ITodoItem } from '../../models/todo-item';
import { Http , Response } from '@angular/http';
// import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';




@Injectable()
export class TodoService {

  todoItems : ITodoItem[];
  constructor(private _http: Http) { }

  getTodoList() : ITodoItem[] {
    
    // Make the HTTP request:
    this._http.get("http://localhost:3000/api/TodoItems").subscribe(data => {
      // Read the result field from the JSON response.
      this.todoItems = data.json();
     // console.log("data :", data.json());
    });

    return this.todoItems;

  }



}
