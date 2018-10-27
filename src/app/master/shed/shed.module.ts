import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ShedRoutes } from './shed-routing.module';
import { ShedComponent } from './shed.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ShedRoutes
  ],
  declarations: [
    ShedComponent
  ]
})
export class ShedModule { }
