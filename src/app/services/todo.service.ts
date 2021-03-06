import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Todo } from '../models/Todo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosUrl: string = 'https://jsonplaceholder.typicode.com/todos?_limit='
  todosLimit: number = 10
  constructor(private http: HttpClient) { }

  getTodos(): Observable<Todo[]> {
    //make get request to JSON placeholder
    return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`)
  }
}
