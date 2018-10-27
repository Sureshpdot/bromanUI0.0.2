import { Routes, RouterModule } from "@angular/router";
import { ManageUserComponent } from "./manage-user.component";
import { NgModule } from "@angular/core";

export const routes : Routes = [
    {
        path : '',
        component : ManageUserComponent
    }
];
@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports : [RouterModule]
})
export class ManageUserRoutes { }