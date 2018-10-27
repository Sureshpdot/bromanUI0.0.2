import { Routes, RouterModule } from "@angular/router";
import { ItemcategoryComponent } from "./itemcategory.component";
import { NgModule } from "@angular/core";

export const routes : Routes = [
    {
        path : '',
        component : ItemcategoryComponent
    }
];
@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports : [RouterModule]
})
export class ItemcategoryRoutes { }