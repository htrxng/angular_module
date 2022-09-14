import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateTravelTourComponent} from './create-travel-tour/create-travel-tour.component';
import {ListTravelTourComponent} from './list-travel-tour/list-travel-tour.component';


const routes: Routes = [
  {
    path: 'list', component: ListTravelTourComponent
  },
  {
    path: 'create', component: CreateTravelTourComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TravelTourRoutingModule { }
