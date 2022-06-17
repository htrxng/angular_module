import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FacilityService} from '../facility.service';
import {FacilityTypeService} from '../facility-type.service';
import {RentTypeService} from '../rent-type.service';
import {RentType} from '../../model/RentType';
import {FacilityType} from '../../model/FacilityType';
import {Router} from '@angular/router';

@Component({
  selector: 'app-facilities-create',
  templateUrl: './facilities-create.component.html',
  styleUrls: ['./facilities-create.component.css']
})
export class FacilitiesCreateComponent implements OnInit {
  addFacilityForm: FormGroup;
  rentTypes: RentType[] = [];
  facilityTypes: FacilityType[] = [];

  constructor(private route: Router,
              private facilityService: FacilityService,
              private facilityTypeService: FacilityTypeService,
              private rentTypeService: RentTypeService) {
    facilityTypeService.getAll().subscribe(facilityTypes => {
      this.facilityTypes = facilityTypes;
    });
    rentTypeService.getAll().subscribe(rentTypes => {
      this.rentTypes = rentTypes;
    });
    this.addFacilityForm = new FormGroup({
      code: new FormControl(''),
      image: new FormControl('https://pix10.agoda.net/hotelImages/118/1189080/1189080_16040409330041278078.jpg?ca=6&ce=1&s=1024x768'),
      name: new FormControl('', [Validators.required]),
      rentType: new FormControl('', [Validators.required]),
      cost: new FormControl('', [Validators.required]),
      area: new FormControl('', [Validators.required]),
      maximumPeople: new FormControl('', [Validators.required]),
      roomStandard: new FormControl('', [Validators.required]),
      description: new FormControl(''),
      poolSquare: new FormControl(''),
      numberFloor: new FormControl(''),
      facilityType: new FormControl('', [Validators.required]),
      freeServiceInclude: new FormControl(''),
    });
  }

  ngOnInit(): void {
  }

  createFacility() {
    console.log(this.addFacilityForm);
    if (this.addFacilityForm.valid) {
      this.facilityService.create(this.addFacilityForm.value).subscribe(() => {
        this.route.navigateByUrl('/facility/list');
      });
    }
  }

}
