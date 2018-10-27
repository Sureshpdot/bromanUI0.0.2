import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EggRoutes } from './egg-routing.module';
import { EggComponent } from './egg.component';

@NgModule({
  imports: [
    CommonModule,
    EggRoutes
  ],
  declarations: [
    EggComponent
  ]
})
export class EggModule { }
