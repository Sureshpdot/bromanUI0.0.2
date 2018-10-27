import { Routes, RouterModule } from "@angular/router";
import { DebitNoteComponent } from "./debit-note.component";
import { NgModule } from "@angular/core";

export const routes : Routes = [
    {
        path : '',
        component : DebitNoteComponent
    }
];
@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports : [RouterModule]
})
export class DebitNoteRoutes { }