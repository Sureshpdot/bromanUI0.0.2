import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryJournalRoutes } from './inventory-journal-routing.module';
import { InventoryJournalComponent } from './inventory-journal.component';

@NgModule({
  imports: [
    CommonModule,
    InventoryJournalRoutes
  ],
  declarations: [
    InventoryJournalComponent
  ]
})
export class InventoryJournalModule { }
