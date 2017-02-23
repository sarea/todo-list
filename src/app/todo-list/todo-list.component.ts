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
		if(todo.value !== ''){
			this.todoList.push({todo: todo.value, edit: false, done: false})
			todo.value = '';
		}
	}
	editTodo(index, editOne) {
		if(editOne.value !== ''){
			this.todoList[index].todo = editOne.value;
		}
	}
	deleteTodo(index) {
		this.todoList.splice(index, 1);
	}
	changePriority(k,i) {
		let temp = this.todoList[i];
		this.todoList[i] = this.todoList[k];
		this.todoList[k] = temp;
	}
	ngOnInit() {
	}

}
