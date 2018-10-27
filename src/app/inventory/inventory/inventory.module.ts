import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryRoutes } from './inventory-routing.module';
import { InventoryComponent } from './inventory.component';

@NgModule({
  imports: [
    CommonModule,
    InventoryRoutes
  ],
  declarations: [
    InventoryComponent
  ]
})
export class InventoryModule { }
