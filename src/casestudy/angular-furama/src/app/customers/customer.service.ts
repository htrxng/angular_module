import {Injectable} from '@angular/core';
import {customerList} from '../data/customerList';
import {Customer} from '../model/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private customerList: Customer[] = [
    {
      id: 1,
      code: 'KH-0001',
      name: 'Huu Trung',
      birthday: '2002-18-08',
      idCard: '191923459',
      phone: '0345059222',
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
      birthday: '1995-18-01',
      idCard: '123123123',
      phone: '051141411',
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
      phone: '068688554',
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
    return this.customerList;
  }

  create(customer: Customer) {
    customer.id = this.customerList.length + 1;
    this.customerList.push(customer);
  }

  update() {}

  deleteCustomer($event: number) {
    this.customerList = this.customerList.filter(customer => $event !== customer.id);
  }
}
