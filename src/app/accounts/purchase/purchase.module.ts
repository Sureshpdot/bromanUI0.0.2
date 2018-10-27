import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseRoutes } from './purchase-routing.module';
import { PurchaseComponent } from './purchase.component';

@NgModule({
  imports: [
    CommonModule,
    PurchaseRoutes
  ],
  declarations: [
    PurchaseComponent
  ]
})
export class PurchaseModule { }
