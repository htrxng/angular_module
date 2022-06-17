import {Component, OnInit} from '@angular/core';
import {Customer} from '../../model/Customer';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {CustomerService} from '../customer.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerType} from '../../model/CustomerType';
import {CustomerTypeService} from '../customer-type.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  customer: Customer;
  editCustomerForm: FormGroup;
  customerTypeList: CustomerType[] = [];

  compareWithId(item1, item2) {
    return item1 && item2 && item1.id === item2.id;
  }

  constructor(private activatedRoute: ActivatedRoute,
              private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private route: Router
  ) {
    this.customerTypeList = customerTypeService.getList();
    activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      if (id != null) {
        this.customerService.findById(Number(id)).subscribe(customer => {
          this.editCustomerForm = new FormGroup({
            id: new FormControl(customer.id),
            code: new FormControl(customer.code, [Validators.required, Validators.pattern(/^KH-\d{4}$/)]),
            name: new FormControl(customer.name, [Validators.required]),
            birthday: new FormControl(customer.birthday, [Validators.required]),
            idCard: new FormControl(customer.idCard, [Validators.required, Validators.pattern(/^\d{9}|\d{12}$/)]),
            email: new FormControl(customer.email, [Validators.required, Validators.email]),
            phone: new FormControl(customer.phone, [Validators.required,
              Validators.pattern(/^((\(84\)\+(90))|(\(84\)\+(91))|(090)|(091))\d{7}$/)]),
            gender: new FormControl(customer.gender, [Validators.required]),
            address: new FormControl(customer.address, [Validators.required]),
            customerType: new FormControl(customer.customerType, [Validators.required]),
          });
        });
      }
    });
  }

  ngOnInit(): void {
  }


  editCustomer() {
    console.log(this.editCustomerForm);
    if (this.editCustomerForm.valid) {
      this.customerService.update(this.editCustomerForm.value).subscribe(customer => {
        this.route.navigateByUrl('/customer/list');
      });
    }
  }
}
