import {Injectable} from '@angular/core';
import {Customer} from '../model/Customer';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private customers: Customer[] = [];

  constructor(private http: HttpClient) {
  }

  getList(): Observable<Customer[]> {
    return this.http.get<Customer[]>(API_URL + '/customers');
  }

  create(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(API_URL + '/customers', customer);
  }

  update(customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(`${API_URL}/customers/${customer.id}`, customer);
    // for (let i = 0; i < this.customers.length; i++) {
    //   if (this.customers[i].id === customer.id) {
    //     this.customers[i] = customer;
    //   }
    // }
  }

  deleteCustomer($event: number): Observable<void> {
    return this.http.delete<void>(`${API_URL}/customers/${$event}`);
    // this.customers = this.customers.filter(customer => $event !== customer.id);
  }

  findById(id: number): Observable<Customer> {
    return this.http.get<Customer>(`${API_URL}/customers/${id}`);
  }
}
