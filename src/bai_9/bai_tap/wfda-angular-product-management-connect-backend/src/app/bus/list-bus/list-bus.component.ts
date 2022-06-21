import {Component, OnInit} from '@angular/core';
import {BusService} from '../bus.service';
import {Bus} from '../../model/bus';
import {PageEvent} from '@angular/material/paginator';
@Component({
  selector: 'app-list-bus',
  templateUrl: './list-bus.component.html',
  styleUrls: ['./list-bus.component.css']
})
export class ListBusComponent implements OnInit {
  busList: Bus[];
  licensePlates: number;
  id: number;

  p: number;
  totalElements = 0;

  constructor(private busService: BusService) {
  }

  ngOnInit() {
    this.getAllBusPaging(0);
  }

  private getAllBusPaging(request) {
    this.busService.getBusList(request).subscribe(busList => {
      this.busList = busList['content'];
      this.totalElements = busList['totalElements'];
      // this.busList = busList;
    });
  }


  private getAllBusNotPaging() {
    this.busService.getList().subscribe(busList => {
      this.busList = busList;
      console.log(this.busList);
    });
  }

  sendDataToDelete(busId: number, licensePlates: number) {
    this.id = busId;
    this.licensePlates = licensePlates;
  }

  deleteBus($event: any) {
    this.busService.delete($event).subscribe(next => {
      this.ngOnInit();
    });
  }


  nextPage(event: PageEvent) {
    const request = {
      page: undefined,
      size: undefined
    };
    request.page = event.pageIndex.toString();
    request.size = event.pageSize.toString();
    this.getAllBusPaging(request);
  }
}
