import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VaccineAdminRoutes } from './vaccine-admin-routing.module';
import { VaccineAdminComponent } from './vaccine-admin.component';

@NgModule({
  imports: [
    CommonModule,
    VaccineAdminRoutes
  ],
  declarations: [
    VaccineAdminComponent
  ]
})
export class VaccineAdminModule { }
