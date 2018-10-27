import { Routes, RouterModule } from "@angular/router";
import { CreditNoteComponent } from "./credit-note.component";
import { NgModule } from "@angular/core";

export const routes : Routes = [
    {
        path : '',
        component : CreditNoteComponent
    }
];
@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports : [RouterModule]
})
export class CreditNoteRoutes { }