import { Routes, RouterModule } from "@angular/router";
import { AlertsNotificationsComponent } from "./alerts-notifications.component";
import { NgModule } from "@angular/core";

export const routes : Routes = [
    {
        path : '',
        component : AlertsNotificationsComponent
    }
];
@NgModule({
    imports : [ RouterModule.forChild(routes)],
    exports : [ RouterModule]
})
export class AlertsNotificationsRoutes{ }