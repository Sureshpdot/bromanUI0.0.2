import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpensesRoutes } from './expenses-routing.module';
import { ExpensesComponent } from './expenses.component';

@NgModule({
  imports: [
    CommonModule,
    ExpensesRoutes
  ],
  declarations: [
    ExpensesComponent
  ]
})
export class ExpensesModule { }
