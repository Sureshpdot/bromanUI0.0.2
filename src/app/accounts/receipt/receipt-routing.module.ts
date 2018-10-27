import { Routes, RouterModule } from "@angular/router";
import { ReceiptComponent } from "./receipt.component";
import { NgModule } from "@angular/core";

export const routes : Routes = [
    {
        path : '',
        component : ReceiptComponent
    }
];
@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports : [RouterModule]
})
export class ReceiptRoutes { }