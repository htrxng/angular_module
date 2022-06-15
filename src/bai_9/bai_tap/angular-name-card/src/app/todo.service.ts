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
    return this.http.get<Todo[]> (API_URL + '/todos')
  }
}
