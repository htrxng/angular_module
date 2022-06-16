import {Component, OnInit} from '@angular/core';
import {Todo} from "../todo";
import {FormControl} from "@angular/forms";
import {TodoService} from "../todo.service";
import {ActivatedRoute, ParamMap} from "@angular/router";

let _id = 1;

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  content = new FormControl();
  constructor(private todoService: TodoService) {

  }

  ngOnInit() {
    this.getAll();
  }

  toggleTodo(todo: Todo) {
    todo.complete = !todo.complete;
    this.todoService.update(todo).subscribe( todo => {
      this.ngOnInit();
    });
  }


  delete(todo: Todo) {
    console.log(todo);
    this.todoService.delete(todo).subscribe(next => {
      console.log('delete')
      this.ngOnInit()
    })
  }

  addToDo() {
    const value = this.content.value;
    if (value) {
      const todo: Todo = {
        content: value,
        complete: false
      };
      this.todoService.save(todo).subscribe(next => {
        console.log('log2')
        this.ngOnInit();
      })
    }
  }

  private getAll() {
    this.todoService.getAll().subscribe(todos => {
      this.todos = todos;
    })
  }

}
