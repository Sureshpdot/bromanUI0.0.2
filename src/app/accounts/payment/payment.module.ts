import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentRoutes } from './payment-routing.module';
import { PaymentComponent } from './payment.component';

@NgModule({
  imports: [
    CommonModule,
    PaymentRoutes
  ],
  declarations: [
    PaymentComponent
  ]
})
export class PaymentModule { }
