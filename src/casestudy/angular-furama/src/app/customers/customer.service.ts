import {Injectable} from '@angular/core';
import {Customer} from '../model/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private customers: Customer[] = [
    {
      id: 1,
      code: 'KH-0001',
      name: 'Huu Trung',
      birthday: '2002-01-08',
      idCard: '191923459',
      phone: '0904333333',
      email: 'huutrungg02@gmail.com',
      address: 'Hue',
      customerType: {
        id: 1,
        customerType: 'Platinum',
      },
      gender: 1,
    },
    {
      id: 2,
      code: 'KH-0002',
      name: 'Grace',
      birthday: '1995-01-01',
      idCard: '123123123',
      phone: '0904333333',
      email: 'grace.ray@gmail.com',
      address: 'London',
      customerType: {
        id: 2,
        customerType: 'Silver',
      },
      gender: 0,
    },
    {
      id: 3,
      code: 'KH-0003',
      name: 'Kate Hunington',
      birthday: '1992-12-08',
      idCard: '12314594111',
      phone: '0904333333',
      email: 'kate.hunington@gmail.com',
      address: 'New York',
      customerType: {
        id: 3,
        customerType: 'Gold',
      },
      gender: 0,
    }
  ];

  constructor() {
  }

  getList() {
    return this.customers;
  }

  create(customer: Customer) {
    customer.id = this.customers.length + 1;
    this.customers.push(customer);
  }

  update(customer: Customer) {
    for (let i = 0; i < this.customers.length; i++) {
      if (this.customers[i].id === customer.id) {
        this.customers[i] = customer;
      }
    }
  }

  deleteCustomer($event: number) {
    this.customers = this.customers.filter(customer => $event !== customer.id);
  }

  findById(id: number) {
    for (let i = 0; i < this.customers.length; i++) {
      if (this.customers[i].id === id) {
        return this.customers[i];
      }
    }
  }
}
