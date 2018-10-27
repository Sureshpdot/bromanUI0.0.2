import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FarmRoutes } from './farm-routing.module';
import { FarmComponent } from './farm.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FarmRoutes
  ],
  declarations: [
    FarmComponent
  ]
})
export class FarmModule { }
