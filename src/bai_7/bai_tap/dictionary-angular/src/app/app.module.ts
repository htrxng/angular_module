import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routesConfig: Routes = [
  {
    path: 'page', component: DictionaryPageComponent
  },

];
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DictionaryPageComponent} from './dictionary-page/dictionary-page.component';
import {WordDetailComponent} from './word-detail/word-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    DictionaryPageComponent,
    WordDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routesConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
