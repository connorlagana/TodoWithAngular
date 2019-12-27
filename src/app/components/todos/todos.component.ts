import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo'
import { TodoService } from '../../services/todo.service'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  //we have to create a model of what Todo looks like
  todos: Todo[]

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    //subscribe
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos
    })
  }

}
