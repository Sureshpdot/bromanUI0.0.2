import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedConsumeRoutes } from './feed-consume-routing.module';
import { FeedConsumeComponent } from './feed-consume.component';

@NgModule({
  imports: [
    CommonModule,
    FeedConsumeRoutes
  ],
  declarations: [
    FeedConsumeComponent
  ]
})
export class FeedConsumeModule { }
