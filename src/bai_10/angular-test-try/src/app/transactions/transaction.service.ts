import { Injectable } from '@angular/core';
import {Transaction} from "../model/transaction";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  transactions: Transaction[] = [{
    id: 1,
    transactionCode: 'GD-0001',
    transactionDate: '01-01-2022',
    serviceType: 'House',
    cost: 300000,
    area: 200,
    customer: {
      id: 1,
      customerCode: 'KH-0001',
      name: 'Huu Trung',
      phone: '0901231234',
      email: 'huutrungg02@gmail.com'
    }
  }]
  constructor(private http: HttpClient) { }
  getAll(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(API_URL + '/transactions');
  }
}
