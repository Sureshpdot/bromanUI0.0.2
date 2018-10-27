import { Routes, RouterModule } from "@angular/router";
import { CompanySettingsComponent } from "./company-settings.component";
import { NgModule } from "@angular/core";

export const routes : Routes = [
    {
        path : '',
        component : CompanySettingsComponent
    }
];
@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports : [RouterModule]
})
export class CompanySettingsRoutes{ }