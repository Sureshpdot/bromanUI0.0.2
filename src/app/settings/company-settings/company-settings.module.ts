import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanySettingsRoutes } from './company-settings-routing.module';
import { CompanySettingsComponent } from './company-settings.component';

@NgModule({
  imports: [
    CommonModule,
    CompanySettingsRoutes
  ],
  declarations: [
    CompanySettingsComponent
  ]
})
export class CompanySettingsModule { }
