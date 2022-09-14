import {Component, OnInit} from '@angular/core';
import {BusService} from '../bus.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {BusWareHouse} from '../../model/bus/bus-ware-house';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-bus',
  templateUrl: './create-bus.component.html',
  styleUrls: ['./create-bus.component.css']
})
export class CreateBusComponent implements OnInit {
  submitted = false;
  addBusForm: FormGroup;
  busWareHouseList: BusWareHouse[];

  constructor(private route: Router,
              private busService: BusService) {
    busService.getBusWareHouseList().subscribe(busWareHouses => {
      this.busWareHouseList = busWareHouses;
    });
    this.addBusForm = new FormGroup({
      busId: new FormControl(),
      licensePlates: new FormControl('', [Validators.required]),
      departurePosition: new FormControl('', [Validators.required]),
      destination: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      departureTime: new FormControl('', [Validators.required]),
      destinationTime: new FormControl('', [Validators.required]),
      busType: new FormControl('', [Validators.required]),
      busWareHouse: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit() {
  }

  createBus() {
    this.submitted = true;
    console.log(this.addBusForm);
    if (this.addBusForm.valid) {
      this.busService.create(this.addBusForm.value).subscribe(() => {
        this.route.navigateByUrl('');
        this.submitted = false;
      });
    }
  }
}
