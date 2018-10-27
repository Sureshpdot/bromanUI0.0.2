import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YourAccountRoutes } from './your-account-routing.module';
import { YourAccountComponent } from './your-account.component';

@NgModule({
  imports: [
    CommonModule,
    YourAccountRoutes
  ],
  declarations: [
    YourAccountComponent
  ]
})
export class YourAccountModule { }
