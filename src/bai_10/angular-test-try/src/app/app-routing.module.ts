import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TransactionListComponent} from "./transactions/transaction-list/transaction-list.component";

const routes: Routes = [
  {
    // path: '',component:
    path: 'transaction/list',component: TransactionListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
