import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlockRoutes } from './flock-routing.module';
import { FlockComponent } from './flock.component';

@NgModule({
  imports: [
    CommonModule,
    FlockRoutes
  ],
  declarations: [
    FlockComponent
  ]
})
export class FlockModule { }
