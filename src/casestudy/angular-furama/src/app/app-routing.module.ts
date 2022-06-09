import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FacilitiesListComponent} from './facilities/facilities-list/facilities-list.component';
import {CustomerListComponent} from './customers/customer-list/customer-list.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {ContractListComponent} from './contracts/contract-list/contract-list.component';


// const routes: Routes = [];

const routes: Routes = [
  {path: 'facilityList', component: FacilitiesListComponent},
  {path: 'customerList', component: CustomerListComponent},
  {path: 'contractList', component: ContractListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
