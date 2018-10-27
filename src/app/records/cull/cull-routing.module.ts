import { Routes, RouterModule } from "@angular/router";
import { CullComponent } from "./cull.component";
import { NgModule } from "@angular/core";

export const routes : Routes = [
    {
        path : '',
        component : CullComponent
    }
];
@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports : [RouterModule]
})
export class CullRoutes { }