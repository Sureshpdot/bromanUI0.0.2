import { Routes, RouterModule } from "@angular/router";
import { FlockComponent } from "./flock.component";
import { NgModule } from "@angular/core";

export const routes : Routes = [
    {
        path : '',
        component : FlockComponent
    }
];
@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports : [RouterModule]
})
export class FlockRoutes { }