import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {customerTypeList} from '../../data/customerTypeList';
import {customerList} from '../../data/customerList';
import {CustomerService} from '../../service/customer.service';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  @Output() submitCreate = new EventEmitter();
  addCustomerForm: FormGroup;
  customerTypes = customerTypeList;
  customers = customerList;

  constructor(private customerService: CustomerService) {
    this.addCustomerForm = new FormGroup({
      code: new FormControl('', [Validators.required, Validators.pattern(/^KH-\d{4}$/)]),
      name: new FormControl('', [Validators.required]),
      birthday: new FormControl('', [Validators.required]),
      idCard: new FormControl('', [Validators.required, Validators.pattern(/^\d{9}|\d{12}$/)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.pattern(/^((\(84\)\+(90))|(\(84\)\+(91))|(090)|(091))\d{7}$/)]),
      gender: new FormControl(-1, [Validators.required]),
      address: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
  }

  createCustomer() {
    console.log(this.addCustomerForm);
    if (this.addCustomerForm.valid) {
      this.submitCreate.emit(this.addCustomerForm.value);
      this.customerService.create(this.addCustomerForm.value);
    }
  }
}
