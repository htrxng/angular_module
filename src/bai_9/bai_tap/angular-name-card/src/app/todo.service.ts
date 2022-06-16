import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Todo} from "./todo";
import {environment} from "../environments/environment";
import {HttpClient} from "@angular/common/http";

const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Todo[]> {
    return this.http.get<Todo[]> (API_URL + '/todos');
  }

  save(todo: Todo): Observable<void> {
    return  this.http.post<void>(API_URL + '/todos', todo);
  }

  delete(todo: Todo): Observable<Todo> {
    return this.http.delete<Todo>(`${API_URL}/todos/${todo.id}`);
  }

  update(todo: Todo): Observable<Todo> {
    return this.http.put(`${API_URL}/todos/${todo.id}`,todo);
  }
}
