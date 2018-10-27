import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRoutes } from './customer-routing.module';
import { CustomerComponent } from './customer.component';

@NgModule({
  imports: [
    CommonModule,
    CustomerRoutes
  ],
  declarations: [
    CustomerComponent
  ]
})
export class CustomerModule { }
