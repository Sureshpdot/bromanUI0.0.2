import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemcategoryRoutes } from './itemcategory-routing.module';
import { ItemcategoryComponent } from './itemcategory.component';

@NgModule({
  imports: [
    CommonModule,
    ItemcategoryRoutes
  ],
  declarations: [
    ItemcategoryComponent
  ]
})
export class ItemcategoryModule { }
