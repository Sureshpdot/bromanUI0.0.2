import { Routes, RouterModule } from "@angular/router";
import { StrainComponent } from "./strain.component";
import { NgModule } from "@angular/core";

export const routes : Routes = [
    {
        path : '',
        component : StrainComponent
    }
];
@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports : [RouterModule]
})
export class StrainRoutes { }