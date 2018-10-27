import { Routes, RouterModule } from "@angular/router";
import { VaccineAdminComponent } from "./vaccine-admin.component";
import { NgModule } from "@angular/core";

export const routes : Routes = [
    {
        path : '',
        component : VaccineAdminComponent
    }
];
@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports : [RouterModule]
})
export class VaccineAdminRoutes{ }