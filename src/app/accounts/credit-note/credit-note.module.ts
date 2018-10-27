import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditNoteRoutes } from './credit-note-routing.module';
import { CreditNoteComponent } from './credit-note.component';

@NgModule({
  imports: [
    CommonModule,
    CreditNoteRoutes
  ],
  declarations: [
    CreditNoteComponent
  ]
})
export class CreditNoteModule { }
