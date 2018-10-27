import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertsNotificationsRoutes } from './alerts-notifications-routing.module';
import { AlertsNotificationsComponent } from './alerts-notifications.component';

@NgModule({
  imports: [
    CommonModule,
    AlertsNotificationsRoutes
  ],
  declarations: [
    AlertsNotificationsComponent
  ]
})
export class AlertsNotificationsModule { }
