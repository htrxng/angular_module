import { Component, OnInit } from '@angular/core';
import {customerList} from '../../data/customerList';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customerList = customerList;
  constructor() { }

  ngOnInit(): void {
  }

}
