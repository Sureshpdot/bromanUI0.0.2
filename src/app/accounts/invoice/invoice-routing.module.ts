import { Routes, RouterModule } from "@angular/router";
import { InvoiceComponent } from "./invoice.component";
import { NgModule } from "@angular/core";

export const routes : Routes = [
    {
        path : '',
        component : InvoiceComponent
    }
];
@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports : [RouterModule]
})
export class InvoiceRoutes { }