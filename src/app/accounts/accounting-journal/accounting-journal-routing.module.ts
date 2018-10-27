import { Routes, RouterModule } from "@angular/router";
import { AccountingJournalComponent } from "./accounting-journal.component";
import { NgModule } from "@angular/core";

export const routes : Routes = [
    {
        path : '',
        component : AccountingJournalComponent
    }
];
@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports : [RouterModule]
})
export class AccountingJournalRoutes { }