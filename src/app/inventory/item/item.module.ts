import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemRoutes } from './item-routing.module';
import { ItemComponent } from './item.component';

@NgModule({
  imports: [
    CommonModule,
    ItemRoutes
  ],
  declarations: [
    ItemComponent
  ]
})
export class ItemModule { }
