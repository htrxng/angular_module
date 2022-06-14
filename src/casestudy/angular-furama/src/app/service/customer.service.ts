import { Injectable } from '@angular/core';
import {customerList} from '../data/customerList';
import {Customer} from '../model/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customerList = customerList;
  constructor() { }
  getList() {
    return this.customerList;
  }
  create(customer: Customer) {
    this.customerList.push(customer);
  }
}
