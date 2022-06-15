import {Injectable} from '@angular/core';
import {CustomerType} from '../model/CustomerType';

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {
  private customerTypeList: CustomerType[] = [
    {
      id: 1,
      customerType: 'Member',
    },
    {
      id: 2,
      customerType: 'Silver',
    },
    {
      id: 3,
      customerType: 'Gold',
    },
    {
      id: 4,
      customerType: 'Platinum',
    },
    {
      id: 5,
      customerType: 'Diamond',
    },
  ];

  constructor() {
  }

  getList() {
    return this.customerTypeList;
  }
}
