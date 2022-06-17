import {Component, OnInit} from '@angular/core';
import {Facility} from '../../model/Facility';
import {FacilityService} from '../facility.service';

@Component({
  selector: 'app-facilities-list',
  templateUrl: './facilities-list.component.html',
  styleUrls: ['./facilities-list.component.css']
})
export class FacilitiesListComponent implements OnInit {
  facilityName: string;
  facilityId: number;
  facilityList: Facility[] = [];

  constructor(private facilityService: FacilityService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  sendDataToDelete(id: number, name: string) {
    this.facilityName = name;
    this.facilityId = id;
  }

  deleteFacility($event: number) {
    this.facilityService.deleteFacility($event).subscribe(() => {
      this.ngOnInit();
    });
  }

  private getAll() {
    this.facilityService.getList().subscribe(facilities => {
      this.facilityList = facilities;
    });
  }
}
