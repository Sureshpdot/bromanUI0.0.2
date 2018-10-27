import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceRoutes } from './invoice-routing.module';
import { InvoiceComponent } from './invoice.component';

@NgModule({
  imports: [
    CommonModule,
    InvoiceRoutes
  ],
  declarations: [
    InvoiceComponent
  ]
})
export class InvoiceModule { }
