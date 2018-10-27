import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageUserRoutes } from './manage-user-routing.module';
import { ManageUserComponent } from './manage-user.component';

@NgModule({
  imports: [
    CommonModule,
    ManageUserRoutes
  ],
  declarations: [
    ManageUserComponent
  ]
})
export class ManageUserModule { }
