import {Component, OnInit} from '@angular/core';
import {Facility} from '../../model/Facility';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {RentType} from '../../model/RentType';
import {FacilityType} from '../../model/FacilityType';
import {FacilityService} from '../facility.service';
import {FacilityTypeService} from '../facility-type.service';
import {RentTypeService} from '../rent-type.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-facilitie-edit',
  templateUrl: './facility-edit.component.html',
  styleUrls: ['./facility-edit.component.css']
})
export class FacilityEditComponent implements OnInit {
  facility: Facility;
  editFacilityForm: FormGroup;
  rentTypes: RentType[] = [];
  facilityTypes: FacilityType[] = [];

  compareWithId(item1, item2) {
    return item1 && item2 && item1.id === item2.id;
  }

  constructor(private activatedRoute: ActivatedRoute,
              private facilityService: FacilityService,
              private facilityTypeService: FacilityTypeService,
              private rentTypeService: RentTypeService,
              private route: Router) {
    this.facilityTypes = facilityTypeService.getAll();
    this.rentTypes = rentTypeService.getAll();
    activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      if (id != null) {
        this.facility = this.facilityService.findById(Number(id));
      }
    });
    this.editFacilityForm = new FormGroup({
      id: new FormControl(this.facility.id),
      code: new FormControl(this.facility.code),
      image: new FormControl(this.facility.image),
      name: new FormControl(this.facility.name, [Validators.required]),
      rentType: new FormControl(this.facility.rentType, [Validators.required]),
      cost: new FormControl(this.facility.cost, [Validators.required]),
      area: new FormControl(this.facility.area, [Validators.required]),
      maximumPeople: new FormControl(this.facility.maximumPeople, [Validators.required]),
      roomStandard: new FormControl(this.facility.roomStandard, [Validators.required]),
      description: new FormControl(this.facility.description),
      poolSquare: new FormControl(this.facility.poolSquare),
      numberFloor: new FormControl(this.facility.numberFloor),
      facilityType: new FormControl(this.facility.facilityType, [Validators.required]),
      freeServiceInclude: new FormControl(this.facility.freeServiceInclude),
    });
  }

  ngOnInit(): void {
  }

  editFacility() {
    console.log(this.editFacilityForm);
    if (this.editFacilityForm.valid) {
      this.facilityService.update(this.editFacilityForm.value);
      this.route.navigateByUrl('/facility/list');
    }
  }
}
