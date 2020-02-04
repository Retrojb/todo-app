import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../models/todo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  mockUrl = '../../assets/mockdata.json'
  todosUrl = 'https://jsonplaceholder.typicode.com/todos';
  limit = '?_limit=5';
  header = {}
  constructor(private http: HttpClient) { }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.mockUrl}`);
  }
}
