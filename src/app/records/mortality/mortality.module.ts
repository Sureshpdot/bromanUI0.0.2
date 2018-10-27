import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MortalityRoutes } from './mortality-routing.module';
import { MortalityComponent } from './mortality.component';

@NgModule({
  imports: [
    CommonModule,
    MortalityRoutes
  ],
  declarations: [
    MortalityComponent
  ]
})
export class MortalityModule { }
