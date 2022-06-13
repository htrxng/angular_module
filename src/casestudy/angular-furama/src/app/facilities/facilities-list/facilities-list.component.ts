import { Component, OnInit } from '@angular/core';
import {facilityList} from '../../data/facilityList';

@Component({
  selector: 'app-facilities-list',
  templateUrl: './facilities-list.component.html',
  styleUrls: ['./facilities-list.component.css']
})
export class FacilitiesListComponent implements OnInit {
  facilityList = facilityList;
  constructor() { }

  ngOnInit(): void {
  }

}
