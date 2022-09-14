import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Member} from '../../model/travel_tour_system/member';
import {TravelTourService} from '../travel-tour.service';
import {RangeType} from '../../model/travel_tour_system/range-type';
import {TourType} from '../../model/travel_tour_system/tour-type';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-create-travel-tour',
  templateUrl: './create-travel-tour.component.html',
  styleUrls: ['./create-travel-tour.component.css']
})
export class CreateTravelTourComponent implements OnInit {
  createTravelTourForm: FormGroup;
  members: Member[];
  rangeTypes: RangeType[];
  tourTypes: TourType[];
  submitted = false;

  constructor(private travelTourService: TravelTourService,
              private route: Router) {
    travelTourService.getMemberList().subscribe(members => {
      this.members = members;
      console.log(this.members);
      travelTourService.getTourTypeList().subscribe(tourTypes => {
        this.tourTypes = tourTypes;
        console.log(this.tourTypes);
        travelTourService.getRangeTypeList().subscribe(rangeTypes => {
          this.rangeTypes = rangeTypes;
          console.log(this.rangeTypes);
          this.createTravelTourForm = new FormGroup({
            tourId: new FormControl(),
            tourName: new FormControl('fun tour', [Validators.required]),
            address: new FormControl('', [Validators.required]),
            startDate: new FormControl('', [Validators.required]),
            endDate: new FormControl(''),
            endRegisterDate: new FormControl(''),
            maxPeople: new FormControl('', [Validators.required, Validators.min(1),
              Validators.pattern('^[1-9]+[0-9]*$')]),
            schedule: new FormControl(''),
            targetPeople: new FormControl(''),
            cost: new FormControl(0),
            flag: new FormControl(true),
            rangeType: new FormControl('', [Validators.required]),
            tourType: new FormControl('', [Validators.required]),
            member: new FormControl('', [Validators.required]),
          });
        });
      });
    });
  }

  ngOnInit() {
  }

  createTour() {
    this.submitted = true;
    console.log(this.createTravelTourForm.value);
    if  (this.createTravelTourForm.valid) {
      this.travelTourService.create(this.createTravelTourForm.value).subscribe(() => {
          this.route.navigateByUrl('/travel-tour/list');
          this.submitted = false;
      });
    }
  }
}
