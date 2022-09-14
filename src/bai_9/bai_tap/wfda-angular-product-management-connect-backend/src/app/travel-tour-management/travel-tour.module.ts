import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TravelTourRoutingModule} from './travel-tour-routing.module';
import {CreateTravelTourComponent} from './create-travel-tour/create-travel-tour.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ListTravelTourComponent} from './list-travel-tour/list-travel-tour.component';
import { DeleteTourModalComponent } from './delete-tour-modal/delete-tour-modal.component';


@NgModule({
  declarations: [
    CreateTravelTourComponent,
    ListTravelTourComponent,
    DeleteTourModalComponent
  ],
  exports : [
      ListTravelTourComponent,
  ],
  imports: [
    CommonModule,
    TravelTourRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class TravelTourModule { }
