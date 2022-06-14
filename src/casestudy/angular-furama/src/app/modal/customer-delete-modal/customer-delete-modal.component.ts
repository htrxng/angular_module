import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-customer-delete-modal',
  templateUrl: './customer-delete-modal.component.html',
  styleUrls: ['./customer-delete-modal.component.css']
})
export class CustomerDeleteModalComponent implements OnInit {
  @Input() customerName: string;
  @Input() customerId: number;
  @Output() confirmCustomer = new EventEmitter();
  constructor() {
  }

  ngOnInit(): void {
  }
  deleteCustomer() {
    this.confirmCustomer.emit(this.customerId);
  }
}
