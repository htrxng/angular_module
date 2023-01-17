import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {DeleteModalComponent} from './delete-modal/delete-modal.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ListBusComponent} from './bus/list-bus/list-bus.component';
import {EditBusComponent} from './bus/edit-bus/edit-bus.component';
import {CreateBusComponent} from './bus/create-bus/create-bus.component';
import {AngularFireModule} from '@angular/fire/compat';
import {environment} from '../environments/environment';
import {AngularFireStorageModule} from '@angular/fire/compat/storage';
import {AngularFireDatabaseModule} from '@angular/fire/compat/database';


@NgModule({
  declarations: [
    AppComponent,
    DeleteModalComponent,
    ListBusComponent,
    EditBusComponent,
    CreateBusComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFireDatabaseModule,
  ],
  providers: [],
  exports: [
    DeleteModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
