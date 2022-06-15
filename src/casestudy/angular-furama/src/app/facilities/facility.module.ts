import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacilityRoutingModule } from './facility-routing.module';
import {FacilitiesListComponent} from './facilities-list/facilities-list.component';
import {FacilitiesCreateComponent} from './facilities-create/facilities-create.component';
import {FacilitieEditComponent} from './facilitie-edit/facilitie-edit.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    FacilitiesListComponent,
    FacilitiesCreateComponent,
    FacilitieEditComponent,
  ],
  imports: [
    CommonModule,
    FacilityRoutingModule,
    ReactiveFormsModule
  ]
})
export class FacilityModule { }
