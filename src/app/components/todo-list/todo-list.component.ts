import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo/todo.service';
import { ITodoItem } from '../../models/todo-item';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {


  todoItems : ITodoItem[];

  constructor(private _todoService : TodoService,
              
  ) { }

  ngOnInit() {
     this.todoItems =   this._todoService.getTodoList();
    console.log( "inside todolst commp :",this.todoItems);     
  }

}
