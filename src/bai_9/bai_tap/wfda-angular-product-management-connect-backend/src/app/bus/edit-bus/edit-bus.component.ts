import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Bus} from '../../model/bus/bus';
import {BusWareHouse} from '../../model/bus/bus-ware-house';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {BusService} from '../bus.service';

@Component({
  selector: 'app-edit-bus',
  templateUrl: './edit-bus.component.html',
  styleUrls: ['./edit-bus.component.css']
})
export class EditBusComponent implements OnInit {
  bus: Bus;
  editBus: FormGroup;
  busWareHouseList: BusWareHouse[] = [];
  submitted = false;


  compareWithId(item1, item2) {
    return item1 && item2 && item1.id === item2.id;
  }
  compareWithIdBWH(item1: BusWareHouse, item2: BusWareHouse): boolean {
    return item1 && item2 && item1.busWareHouseId === item2.busWareHouseId;
  }

  constructor(private activatedRoute: ActivatedRoute,
              private busService: BusService,
              private route: Router) {
    busService.getBusWareHouseList().subscribe(busWareHouses => {
      this.busWareHouseList = busWareHouses;
    });
    activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const busId = paramMap.get('id');
      console.log(busId);
      if (busId != null) {
        this.busService.findById(Number(busId)).subscribe(bus => {
          this.bus = bus;
          console.log(this.bus);
          this.editBus = new FormGroup({
            busId: new FormControl(bus.busId),
            licensePlates: new FormControl(bus.licensePlates, [Validators.required]),
            departurePosition: new FormControl(bus.departurePosition, [Validators.required]),
            destination: new FormControl(bus.destination, [Validators.required]),
            phone: new FormControl(bus.phone, [Validators.required]),
            departureTime: new FormControl(bus.departureTime, [Validators.required]),
            destinationTime: new FormControl(bus.destinationTime, [Validators.required]),
            busType: new FormControl(bus.busType, [Validators.required]),
            busWareHouse: new FormControl(bus.busWareHouse, [Validators.required]),
          });
        });
      }
    });
  }

  ngOnInit() {
  }

  updateBus() {
    this.submitted = true;
    console.log(this.editBus);
    if (this.editBus.valid) {
      this.busService.update(this.editBus.value).subscribe(bus => {
        this.route.navigateByUrl('/buses');
        this.submitted = false;
      });
    }
  }
}
