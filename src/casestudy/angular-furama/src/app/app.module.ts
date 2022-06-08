import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';
import { CustomerCreateComponent } from './customers/customer-create/customer-create.component';
import { CustomerEditComponent } from './customers/customer-edit/customer-edit.component';
import { FacilitiesListComponent } from './facilities/facilities-list/facilities-list.component';
import { FacilitiesCreateComponent } from './facilities/facilities-create/facilities-create.component';
import { ContractListComponent } from './contracts/contract-list/contract-list.component';
import { ContractCreateComponent } from './contracts/contract-create/contract-create.component';
import { FacilitieEditComponent } from './facilities/facilitie-edit/facilitie-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CustomerListComponent,
    CustomerCreateComponent,
    CustomerEditComponent,
    FacilitiesListComponent,
    FacilitiesCreateComponent,
    ContractListComponent,
    ContractCreateComponent,
    FacilitieEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
