import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CullRoutes } from './cull-routing.module';
import { CullComponent } from './cull.component';

@NgModule({
  imports: [
    CommonModule,
    CullRoutes
  ],
  declarations: [
    CullComponent
  ]
})
export class CullModule { }
