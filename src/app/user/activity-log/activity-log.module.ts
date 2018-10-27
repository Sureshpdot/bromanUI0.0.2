import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityLogRoutes } from './activity-log-routing.module';
import { ActivityLogComponent } from './activity-log.component';
import { DataTablesModule } from "angular-datatables";

@NgModule({
  imports: [
    CommonModule,
    ActivityLogRoutes,
    DataTablesModule,
  ],
  declarations: [
    ActivityLogComponent
  ]
})
export class ActivityLogModule { }
