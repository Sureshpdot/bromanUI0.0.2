import { Routes, RouterModule } from "@angular/router";
import { FeedConsumeComponent } from "./feed-consume.component";
import { NgModule } from "@angular/core";

export const routes : Routes = [
    {
        path : '',
        component : FeedConsumeComponent
    }
];
@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports : [RouterModule]
})
export class FeedConsumeRoutes{ }