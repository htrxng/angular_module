import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {BusService} from '../bus.service';
import {Bus} from '../../model/bus/bus';
import {BusWareHouse} from '../../model/bus/bus-ware-house';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-bus',
  templateUrl: './list-bus.component.html',
  styleUrls: ['./list-bus.component.css']
})
export class ListBusComponent implements OnInit {
  busList: Bus[];
  busWareHouseList: BusWareHouse[];
  licensePlates: number;
  id: number;
  @ViewChild('busWareHouseName', {static: false}) busWareHouseName: ElementRef;
  @ViewChild('busWareHouseId', {static: false}) busWareHouseId: ElementRef;

  constructor(private busService: BusService,
              private route: Router) {
    busService.getBusWareHouseList().subscribe(busWareHouseList => {
      this.busWareHouseList = busWareHouseList;
    });
  }

  ngOnInit() {
    this.getAllBusNotPaging();
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

  search() {
    this.busService.searchVehicle(this.busWareHouseName.nativeElement.value,
      this.busWareHouseId.nativeElement.value).subscribe(busList => {
      this.busList = busList;
      this.route.navigateByUrl('');
    });
  }
}
