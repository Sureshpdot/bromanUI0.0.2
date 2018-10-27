import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsOfAccountsRoutes } from './charts-of-accounts-routing.module';
import { ChartsOfAccountsComponent } from './charts-of-accounts.component';

@NgModule({
  imports: [
    CommonModule,
    ChartsOfAccountsRoutes
  ],
  declarations: [
    ChartsOfAccountsComponent
  ]
})
export class ChartsOfAccountsModule { }
