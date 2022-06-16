import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacilityRoutingModule } from './facility-routing.module';
import {FacilitiesListComponent} from './facilities-list/facilities-list.component';
import {FacilitiesCreateComponent} from './facilities-create/facilities-create.component';
import {FacilityEditComponent} from './facility-edit/facility-edit.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FacilityDeleteModalComponent} from '../modal/facility-delete-modal/facility-delete-modal.component';


@NgModule({
    declarations: [
        FacilitiesListComponent,
        FacilitiesCreateComponent,
        FacilityEditComponent,
        FacilityDeleteModalComponent,
    ],
    exports: [
        FacilitiesListComponent
    ],
    imports: [
        CommonModule,
        FacilityRoutingModule,
        ReactiveFormsModule,
    ]
})
export class FacilityModule { }
