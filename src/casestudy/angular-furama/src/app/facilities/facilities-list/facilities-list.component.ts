import { Component, OnInit } from '@angular/core';
import {facilityList} from '../../data/facilityList';
import {Facility} from '../../model/Facility';
import {FacilityService} from '../facility.service';

@Component({
  selector: 'app-facilities-list',
  templateUrl: './facilities-list.component.html',
  styleUrls: ['./facilities-list.component.css']
})
export class FacilitiesListComponent implements OnInit {
  facilityList: Facility[] = [];
  constructor(private facilityService: FacilityService) {}

  ngOnInit(): void {
    this.facilityList = this.facilityService.getList();
  }

}
