import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {customerTypeList} from '../../data/customerTypeList';
import {customerList} from '../../data/customerList';
import {CustomerService} from '../customer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  submitted = false;
  addCustomerForm: FormGroup;
  customerTypes = customerTypeList;
  customers = customerList;

  constructor(private route: Router, private customerService: CustomerService) {
    this.addCustomerForm = new FormGroup({
      code: new FormControl('', [Validators.required, Validators.pattern(/^KH-\d{4}$/)]),
      name: new FormControl('', [Validators.required]),
      birthday: new FormControl('', [Validators.required]),
      idCard: new FormControl('', [Validators.required, Validators.pattern(/^\d{9}|\d{12}$/)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.pattern(/^((\(84\)\+(90))|(\(84\)\+(91))|(090)|(091))\d{7}$/)]),
      gender: new FormControl(-1, [Validators.required]),
      address: new FormControl('', [Validators.required]),
      customerType: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
  }

  createCustomer() {
    this.submitted = true;
    console.log(this.addCustomerForm);
    if (this.addCustomerForm.valid) {
      this.customerService.create(this.addCustomerForm.value).subscribe(() => {
        this.route.navigateByUrl('/customer/list');
        this.submitted = false;
      });
    }
  }
}
