import { Routes, RouterModule } from "@angular/router";
import { InventoryComponent } from "./inventory.component";
import { NgModule } from "@angular/core";

export const routes : Routes = [
    {
        path : '',
        component : InventoryComponent
    }
];
@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports : [RouterModule]
})
export class InventoryRoutes { }