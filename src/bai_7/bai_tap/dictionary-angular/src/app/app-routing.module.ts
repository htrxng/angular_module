import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WordDetailComponent} from './word-detail/word-detail.component';
import {DictionaryPageComponent} from './dictionary-page/dictionary-page.component';


const routes: Routes = [
  {
    path: 'detail-word/:word', component: WordDetailComponent
  },
  {
    path: 'dictionary-page', component: DictionaryPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
