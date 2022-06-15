import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FacilitiesListComponent} from './facilities/facilities-list/facilities-list.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {ContractListComponent} from './contracts/contract-list/contract-list.component';
import {FacilitieEditComponent} from './facilities/facilitie-edit/facilitie-edit.component';
import {FacilitiesCreateComponent} from './facilities/facilities-create/facilities-create.component';
import {ContractCreateComponent} from './contracts/contract-create/contract-create.component';


const routes: Routes = [
  {path: 'facilityList', component: FacilitiesListComponent},
  {path: 'facilityEdit', component: FacilitieEditComponent},
  {path: 'facilityCreate', component: FacilitiesCreateComponent},
  {path: 'contractList', component: ContractListComponent},
  {path: 'contractCreate', component: ContractCreateComponent},
  {path: 'customer', loadChildren: () => import('./customers/customer.module').then(module => module.CustomerModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
