import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FacilitiesListComponent} from './facilities-list/facilities-list.component';
import {FacilityEditComponent} from './facility-edit/facility-edit.component';
import {FacilitiesCreateComponent} from './facilities-create/facilities-create.component';


const routes: Routes = [
  {path: 'list', component: FacilitiesListComponent},
  {path: 'edit/:id', component: FacilityEditComponent},
  {path: 'create', component: FacilitiesCreateComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacilityRoutingModule {
}
