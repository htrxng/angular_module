import { Component, OnInit } from '@angular/core';
import {Tour} from '../../model/travel_tour_system/tour';
import {RangeType} from '../../model/travel_tour_system/range-type';
import {TourType} from '../../model/travel_tour_system/tour-type';
import {Member} from '../../model/travel_tour_system/member';
import {TravelTourService} from '../travel-tour.service';

@Component({
  selector: 'app-list-travel-tour',
  templateUrl: './list-travel-tour.component.html',
  styleUrls: ['./list-travel-tour.component.css']
})
export class ListTravelTourComponent implements OnInit {
  tourList: Tour[];
  rangeTypes: RangeType[];
  tourTypes: TourType[];
  members: Member[];
  id: number;
  tourName: string;

  constructor(private travelTourService: TravelTourService) {
    travelTourService.getMemberList().subscribe(members => {
      this.members = members;
      travelTourService.getRangeTypeList().subscribe(rangeTypes => {
        this.rangeTypes = rangeTypes;
        travelTourService.getTourTypeList().subscribe(tourTypes => {
          this.tourTypes = tourTypes;
        });
      });
    });
  }

  ngOnInit() {
    this.getTourList();
  }

  private getTourList() {
    this.travelTourService.getTourList().subscribe(tours => {
      this.tourList = tours;
      console.log(this.tourList);
    });
  }

  sendDataToDelete(tourId: number, tourName: string) {
      this.id = tourId;
      this.tourName = tourName;
  }
  deleteTour($event: any) {
    this.travelTourService.delete($event).subscribe(next => {
      this.ngOnInit();
    });
  }
}
