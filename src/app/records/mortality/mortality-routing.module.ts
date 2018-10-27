import {  Routes, RouterModule } from "@angular/router";
import { MortalityComponent } from "./mortality.component";
import { NgModule } from "@angular/core";

export const routes : Routes = [
    {
        path : '',
        component : MortalityComponent
    }
];
@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports : [RouterModule]
})
export class MortalityRoutes { }