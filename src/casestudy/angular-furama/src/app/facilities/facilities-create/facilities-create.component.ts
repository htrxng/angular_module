import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {rentTypeList} from '../../data/rentType';
import {FacilityService} from '../facility.service';
import {facilityType} from '../../data/facilityType';
import {FacilityTypeService} from '../facility-type.service';
import {RentTypeService} from '../rent-type.service';
import {RentType} from '../../model/RentType';
import {FacilityType} from '../../model/FacilityType';

@Component({
  selector: 'app-facilities-create',
  templateUrl: './facilities-create.component.html',
  styleUrls: ['./facilities-create.component.css']
})
export class FacilitiesCreateComponent implements OnInit {
  @Output() submitCreate = new EventEmitter();
  addFacilityForm: FormGroup;
  rentTypes: RentType[] = [];
  facilityTypes: FacilityType[] = [];

  constructor(private facilityService: FacilityService,
              private facilityTypeService: FacilityTypeService,
              private rentTypeService: RentTypeService) {
    this.addFacilityForm = new FormGroup({
      code: new FormControl(''),
      image: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      rentType: new FormControl('', [Validators.required]),
      cost: new FormControl('', [Validators.required]),
      area: new FormControl('', [Validators.required]),
      maximumPeople: new FormControl('', [Validators.required]),
      roomStandard: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      poolSquare: new FormControl('', [Validators.required]),
      numberFloor: new FormControl('', [Validators.required]),
      facilityType: new FormControl('', [Validators.required]),
      freeServiceInclude: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
  }

  createFacility() {
    console.log(this.addFacilityForm);
    if (this.addFacilityForm.valid) {
      this.facilityService.create(this.addFacilityForm.value);
    }
  }

}
