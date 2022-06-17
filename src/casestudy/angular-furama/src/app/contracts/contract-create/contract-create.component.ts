import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ContractService} from '../contract.service';
import {FacilityService} from '../../facilities/facility.service';
import {Facility} from '../../model/Facility';
import {Customer} from '../../model/Customer';
import {Router} from '@angular/router';
import {CustomerService} from '../../customers/customer.service';

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.css']
})
export class ContractCreateComponent implements OnInit {
  facilitySelected: Facility;
  total: number;
  addContractForm: FormGroup;
  facilities: Facility[];
  customers: Customer[];

  constructor(private route: Router,
              private contractService: ContractService,
              private customerService: CustomerService,
              private facilityService: FacilityService) {
    customerService.getList().subscribe(customers => {
      this.customers = customers;
    });
    facilityService.getList().subscribe(facilities => {
      this.facilities = facilities;
    });
    this.addContractForm = new FormGroup({
      startDate: new FormControl('', [Validators.required]),
      endDate: new FormControl('', [Validators.required]),
      deposit: new FormControl(0),
      total: new FormControl(0),
      facility: new FormControl('', [Validators.required]),
      customer: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
  }

  createContract() {
    console.log(this.addContractForm);
    if (this.addContractForm.valid) {
      this.contractService.create(this.addContractForm.value).subscribe(() => {
        this.route.navigateByUrl('/contract/list');
      });
    }
  }

  selectFacility(facility: any) {
    this.facilitySelected = facility;
    this.total = this.facilitySelected.cost;
  }
}
