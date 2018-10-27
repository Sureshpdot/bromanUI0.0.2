import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedProgramRoutes } from './feed-program-routing.module';
import { FeedProgramComponent } from './feed-program.component';

@NgModule({
  imports: [
    CommonModule,
    FeedProgramRoutes
  ],
  declarations: [
    FeedProgramComponent
  ]
})
export class FeedProgramModule { }
