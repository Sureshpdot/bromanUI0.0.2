import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsRoutes } from './reports-routing.module';
import { ReportsComponent } from './reports.component';

@NgModule({
  imports: [
    CommonModule,
    ReportsRoutes
  ],
  declarations: [
    ReportsComponent
  ]
})
export class ReportsModule { }
