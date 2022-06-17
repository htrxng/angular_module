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
    facilityTypeService.getAll().subscribe(facilityTypes => {
      this.facilityTypes = facilityTypes;
    });
    rentTypeService.getAll().subscribe(rentTypes => {
      this.rentTypes = rentTypes;
    });
    activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      if (id != null) {
        this.facilityService.findById(Number(id)).subscribe(facility => {
          this.editFacilityForm = new FormGroup({
            id: new FormControl(facility.id),
            code: new FormControl(facility.code),
            image: new FormControl(facility.image),
            name: new FormControl(facility.name, [Validators.required]),
            rentType: new FormControl(facility.rentType, [Validators.required]),
            cost: new FormControl(facility.cost, [Validators.required]),
            area: new FormControl(facility.area, [Validators.required]),
            maximumPeople: new FormControl(facility.maximumPeople, [Validators.required]),
            roomStandard: new FormControl(facility.roomStandard, [Validators.required]),
            description: new FormControl(facility.description),
            poolSquare: new FormControl(facility.poolSquare),
            numberFloor: new FormControl(facility.numberFloor),
            facilityType: new FormControl(facility.facilityType, [Validators.required]),
            freeServiceInclude: new FormControl(facility.freeServiceInclude),
          });
        });
      }
    });
  }

  ngOnInit(): void {
  }

  editFacility() {
    console.log(this.editFacilityForm);
    if (this.editFacilityForm.valid) {
      this.facilityService.update(this.editFacilityForm.value).subscribe(facility => {
        this.route.navigateByUrl('/facility/list');
      });
    }
  }
}
