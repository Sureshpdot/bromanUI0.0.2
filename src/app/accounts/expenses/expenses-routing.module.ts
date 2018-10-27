import { Routes, RouterModule } from "@angular/router";
import { ExpensesComponent } from "./expenses.component";
import { NgModule } from "@angular/core";

export const routes : Routes = [
    {
        path : '',
        component : ExpensesComponent
    }
];
@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports : [RouterModule]
})
export class ExpensesRoutes { }