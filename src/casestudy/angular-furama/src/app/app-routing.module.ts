import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FacilitiesListComponent} from './facilities/facilities-list/facilities-list.component';
import {CustomerListComponent} from './customers/customer-list/customer-list.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {ContractListComponent} from './contracts/contract-list/contract-list.component';
import {CustomerEditComponent} from './customers/customer-edit/customer-edit.component';
import {CustomerCreateComponent} from './customers/customer-create/customer-create.component';
import {FacilitieEditComponent} from './facilities/facilitie-edit/facilitie-edit.component';
import {FacilitiesCreateComponent} from './facilities/facilities-create/facilities-create.component';
import {ContractCreateComponent} from './contracts/contract-create/contract-create.component';


// const routes: Routes = [];

const routes: Routes = [
  {path: 'facilityList', component: FacilitiesListComponent},
  {path: 'facilityEdit', component: FacilitieEditComponent},
  {path: 'facilityCreate', component: FacilitiesCreateComponent},
  {path: 'customerList', component: CustomerListComponent},
  {path: 'contractList', component: ContractListComponent},
  {path: 'contractCreate', component: ContractCreateComponent},
  {path: 'customerEdit', component: CustomerEditComponent},
  {path: 'customerCreate', component: CustomerCreateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
