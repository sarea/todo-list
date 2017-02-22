import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor() { }

  todo;
  editOne;
  todoList = [];
  addTodo(todo) {
    //if(this.todoList.indexOf(todo.value) === -1){
    	this.todoList.push({todo: todo.value, edit: false, done: false})
    	todo.value = '';
   // }
    console.log(todo.value);
  }

  editTodo(index, editOne) {
    this.todoList[index].todo = editOne.value;
    console.log(this.todoList[index])
  }

  deleteTodo(index) {
  	this.todoList.splice(index, 1);
  }

  ngOnInit() {
  }

}
