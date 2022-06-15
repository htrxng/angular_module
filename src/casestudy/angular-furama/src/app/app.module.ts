import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {FacilitiesListComponent} from './facilities/facilities-list/facilities-list.component';
import {FacilitiesCreateComponent} from './facilities/facilities-create/facilities-create.component';
import {ContractListComponent} from './contracts/contract-list/contract-list.component';
import {ContractCreateComponent} from './contracts/contract-create/contract-create.component';
import {FacilitieEditComponent} from './facilities/facilitie-edit/facilitie-edit.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FacilitiesListComponent,
    FacilitiesCreateComponent,
    FacilitieEditComponent,
    ContractListComponent,
    ContractCreateComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
