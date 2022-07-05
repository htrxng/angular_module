import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImportInvoiceRoutingModule } from './import-invoice-routing.module';
import {ImportInvoiceCreateComponent} from './import-invoice-create/import-invoice-create.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    ImportInvoiceCreateComponent
  ],
  imports: [
    CommonModule,
    ImportInvoiceRoutingModule,
    ReactiveFormsModule
  ]
})
export class ImportInvoiceModule { }
