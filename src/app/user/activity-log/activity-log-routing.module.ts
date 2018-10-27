import { Routes, RouterModule } from "@angular/router";
import { ActivityLogComponent } from "./activity-log.component";
import { NgModule } from "@angular/core";

export const routes : Routes = [
    {
        path : '',
        component : ActivityLogComponent
    }
];
@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports : [RouterModule]
})
export class ActivityLogRoutes { }