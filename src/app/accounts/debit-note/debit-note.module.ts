import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DebitNoteRoutes } from './debit-note-routing.module';
import { DebitNoteComponent } from './debit-note.component';

@NgModule({
  imports: [
    CommonModule,
    DebitNoteRoutes
  ],
  declarations: [
    DebitNoteComponent
  ]
})
export class DebitNoteModule { }
