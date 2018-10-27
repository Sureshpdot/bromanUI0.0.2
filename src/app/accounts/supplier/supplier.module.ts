import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupplierRoutes } from './supplier-routing.module';
import { SupplierComponent } from './supplier.component';

@NgModule({
  imports: [
    CommonModule,
    SupplierRoutes
  ],
  declarations: [
    SupplierComponent
  ]
})
export class SupplierModule { }
