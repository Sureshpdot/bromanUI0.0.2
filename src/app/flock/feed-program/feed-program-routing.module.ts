import { Routes, RouterModule } from "@angular/router";
import { FeedProgramComponent } from "./feed-program.component";
import { NgModule } from "@angular/core";

export const routes : Routes = [
    {
        path : '',
        component : FeedProgramComponent
    }
];
@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports : [RouterModule]
})
export class FeedProgramRoutes { }