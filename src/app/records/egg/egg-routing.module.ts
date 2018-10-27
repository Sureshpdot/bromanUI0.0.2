import { Routes, RouterModule } from "@angular/router";
import { EggComponent } from "./egg.component";
import { NgModule } from "@angular/core";

export const routes : Routes = [
    {
        path : '',
        component : EggComponent
    }
];
@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports : [RouterModule]
})
export class EggRoutes { }