import { Routes, RouterModule } from "@angular/router";
import { ReportsComponent } from "./reports.component";
import { NgModule } from "@angular/core";

export const routes : Routes = [
    {
        path : '',
        component : ReportsComponent
    }
];
@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports : [RouterModule]
})
export class ReportsRoutes { }