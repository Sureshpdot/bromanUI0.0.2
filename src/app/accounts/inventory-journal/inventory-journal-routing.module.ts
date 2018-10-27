import { Routes, RouterModule } from "@angular/router";
import { InventoryJournalComponent } from "./inventory-journal.component";
import { NgModule } from "@angular/core";

export const routes : Routes = [
    {
        path : '',
        component : InventoryJournalComponent
    }
];
@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports : [RouterModule]
})
export class InventoryJournalRoutes { }