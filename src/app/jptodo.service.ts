import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { jptodo } from './model/jptodo';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
@Injectable({
  providedIn: 'root',
})
export class JptodoService {
  url: string = 'http://jsonplaceholder.typicode.com/todos';

  constructor(private httpClient: HttpClient) {}
  getTodos(): Observable<jptodo[]> {
    return this.httpClient.get<jptodo[]>(this.url);
  }
  addTodo(todo: jptodo): Observable<jptodo> {
    console.log('add to do', todo);
    return this.httpClient.post<jptodo>(this.url, todo, httpOptions);
  }
}
