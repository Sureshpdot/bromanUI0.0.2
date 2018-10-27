import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StrainComponent } from './strain.component';
import { StrainRoutes } from './strain-routing.module';

@NgModule({
  imports: [
    CommonModule,
    StrainRoutes
  ],
  declarations: [
    StrainComponent
  ]
})
export class StrainModule { }
