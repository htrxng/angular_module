import { Component, OnInit } from '@angular/core';
import {customerList} from '../../data/customerList';
import {CustomerService} from '../../service/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  constructor(private customerService: CustomerService) { }
  customerList = this.customerService.getList();

  ngOnInit(): void {
  }

}
