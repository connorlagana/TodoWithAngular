import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  //we want to fetch from axios or somewhere else
  getTodos() {
    return [
      {
        id: 1,
        title: "Todo one",
        completed: true
      },
      {
        id: 2,
        title: "Todo two",
        completed: true
      },
      {
        id: 3,
        title: "Todo three",
        completed: false
      }
    ]
  }
}
