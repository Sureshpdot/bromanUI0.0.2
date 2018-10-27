import { Routes, RouterModule } from "@angular/router";
import { ChartsOfAccountsComponent } from "./charts-of-accounts.component";
import { NgModule } from "@angular/core";

export const routes : Routes = [
    {
        path : '',
        component : ChartsOfAccountsComponent
    }
];
@NgModule({
    imports : [ RouterModule.forChild(routes)],
    exports : [ RouterModule]
})
export class ChartsOfAccountsRoutes{ }