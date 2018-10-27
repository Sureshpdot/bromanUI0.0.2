import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReceiptRoutes } from './receipt-routing.module';
import { ReceiptComponent } from './receipt.component';

@NgModule({
  imports: [
    CommonModule,
    ReceiptRoutes
  ],
  declarations: [
    ReceiptComponent
  ]
})
export class ReceiptModule { }
