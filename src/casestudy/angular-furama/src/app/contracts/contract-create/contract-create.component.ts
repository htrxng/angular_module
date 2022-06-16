import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ContractService} from '../contract.service';
import {FacilityService} from '../../facilities/facility.service';
import {Facility} from '../../model/Facility';
import {facilityList} from '../../data/facilityList';
import {customerList} from '../../data/customerList';
import {Customer} from '../../model/Customer';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.css']
})
export class ContractCreateComponent implements OnInit {
  @Output() submitCreate = new EventEmitter();
  addContractForm: FormGroup;
  facilities = facilityList;
  customers: Customer[];

  constructor(private route: Router, private contractService: ContractService) {
    this.customers = customerList;
    this.addContractForm = new FormGroup({
      startDate: new FormControl('', [Validators.required]),
      endDate: new FormControl('', [Validators.required]),
      deposit: new FormControl(''),
      total: new FormControl(''),
      facility: new FormControl('', [Validators.required]),
      customer: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
  }

  createContract() {
    console.log(this.addContractForm);
    if (this.addContractForm.valid) {
      this.contractService.create(this.addContractForm.value);
      this.route.navigateByUrl('/contract/list');
    }
  }
}
