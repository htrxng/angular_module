import { Component, OnInit } from '@angular/core';
import {customerList} from '../../data/customerList';
import {CustomerService} from '../../service/customer.service';
import {CustomerDeleteModalComponent} from '../../modal/customer-delete-modal/customer-delete-modal.component';
import {Customer} from '../../model/Customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customerName: string ;
  customerId: number ;
  customerList: Customer[] = [];
  constructor(private customerService: CustomerService) { }
  ngOnInit(): void {
    this.customerList = this.customerService.getList();
  }

  sendDataToDelete(id: number, name: string) {
    this.customerName = name;
    this.customerId = id;
  }

  deleteCustomer($event: number) {
    this.customerService.deleteCustomer($event);
    this.ngOnInit();
  }
}
