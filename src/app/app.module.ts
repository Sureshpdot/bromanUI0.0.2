import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { HttpModule, Http } from '@angular/http';
import { FormsModule } from '@angular/forms';

//Layout Modules
import { CommonLayoutComponent } from './common/common-layout.component';
import { AuthenticationLayoutComponent } from './common/authentication-layout.component';

//Directives
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Sidebar_Directives } from './shared/directives/side-nav.directive';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

// Routing Module
import { AppRoutes } from './app.routing';

//Common Title Service
import { CommonTitle } from './title/title.service';

// App Component
import { AppComponent } from './app.component';
import { CompanySettingsComponent } from './settings/company-settings/company-settings.component';
import { CompanySettingsService } from './settings/company-settings/company-settings.service';


@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(AppRoutes),
        NgbModule.forRoot(),
        PerfectScrollbarModule,
        FormsModule,
        HttpClientModule,
        HttpModule
        
    ],
    declarations: [
        AppComponent,
        CommonLayoutComponent,
        AuthenticationLayoutComponent,
        Sidebar_Directives,  
        CompanySettingsComponent
       
    ],
    providers: [Title,CommonTitle,CompanySettingsService],
    bootstrap: [AppComponent]
})


export class AppModule { }
