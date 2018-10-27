import { Routes, RouterModule } from "@angular/router";
import { YourAccountComponent } from "./your-account.component";
import { NgModule } from "@angular/core";

export const routes : Routes = [
    {
        path : '',
        component : YourAccountComponent
    }
];
@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports : [RouterModule]
})
export class YourAccountRoutes { }