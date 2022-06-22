import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {DeleteModalComponent} from './delete-modal/delete-modal.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ListBusComponent } from './bus/list-bus/list-bus.component';
import { EditBusComponent } from './bus/edit-bus/edit-bus.component';
import { CreateBusComponent } from './bus/create-bus/create-bus.component';


@NgModule({
  declarations: [
    AppComponent,
    DeleteModalComponent,
    ListBusComponent,
    EditBusComponent,
    CreateBusComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
