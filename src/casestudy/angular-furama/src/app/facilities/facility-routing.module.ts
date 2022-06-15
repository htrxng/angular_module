import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FacilitiesListComponent} from './facilities-list/facilities-list.component';
import {FacilitieEditComponent} from './facilitie-edit/facilitie-edit.component';
import {FacilitiesCreateComponent} from './facilities-create/facilities-create.component';


const routes: Routes = [
  {path: 'list', component: FacilitiesListComponent},
  {path: 'edit', component: FacilitieEditComponent},
  {path: 'create', component: FacilitiesCreateComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacilityRoutingModule {
}
