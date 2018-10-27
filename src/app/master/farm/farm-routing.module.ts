import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FarmComponent } from "./farm.component";

export const routes : Routes = [
    {
        path : '',
        component : FarmComponent
    }
];

@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports : [RouterModule]
})
export class FarmRoutes { }