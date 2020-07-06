import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';

interface Todo {
  id: number;
  content: string;
  complete: boolean;
}

// tslint:disable-next-line:variable-name
let _id = 1;

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  userInput: FormControl;
  todos: Array<Todo>;

  constructor() {
    this.userInput = new FormControl();
    this.todos = [];
  }

  ngOnInit(): void {
  }

  onChange(): void {
    const {value} = this.userInput;
    if (value) {
      const todo: Todo = {
        id: _id++,
        content: value,
        complete: false
      };
      this.todos.push(todo);
      this.userInput.setValue('');
    }
  }

  toggleTodo(i: any): void {
    this.todos[i].complete = !this.todos[i].complete;
  }
}
