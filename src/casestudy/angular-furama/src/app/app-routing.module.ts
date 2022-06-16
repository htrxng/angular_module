import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HomeComponent} from './home/home.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'facility', loadChildren: () => import('./facilities/facility.module').then(module => module.FacilityModule)},
  {path: 'contract', loadChildren: () => import('./contracts/contract.module').then(module => module.ContractModule)},
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
