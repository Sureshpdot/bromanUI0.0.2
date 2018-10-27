import { Routes, RouterModule } from "@angular/router";
import { ShedComponent } from "./shed.component";
import { NgModule } from "@angular/core";

export const routes : Routes = [
    {
        path : '',
        component : ShedComponent
    }
];
@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports : [RouterModule]
})
export class ShedRoutes { }