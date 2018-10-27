import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountingJournalRoutes } from './accounting-journal-routing.module';
import { AccountingJournalComponent } from './accounting-journal.component';

@NgModule({
  imports: [
    CommonModule,
    AccountingJournalRoutes
  ],
  declarations: [
    AccountingJournalComponent
  ]
})
export class AccountingJournalModule { }
