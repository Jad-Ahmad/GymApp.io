import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppDirectiveDirective } from './app-directive.directive';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AddMemberComponent } from './add-member/add-member.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FooterComponent } from './footer/footer.component';
import { ClassesComponent } from './classes/classes.component';
import { CoachesComponent } from './coaches/coaches.component';
import { GymAppPipePipe } from './gym-app-pipe.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ManagerViewComponent } from './manager-view/manager-view.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { ClientViewComponent } from './client-view/client-view.component';
import { CoachViewComponent } from './coach-view/coach-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CreateBillsComponent } from './create-bills/create-bills.component';
import { CreateStatmentComponent } from './create-statment/create-statment.component';
import { ReportComponent } from './report/report.component';
import { SettingsComponent } from './settings/settings.component';


@NgModule({
  declarations: [
    AppComponent,
    AppDirectiveDirective,
    LoginComponent,
    SignUpComponent,
    AddMemberComponent,
    HomePageComponent,
    FooterComponent,
    ClassesComponent,
    CoachesComponent,
    GymAppPipePipe,
    ManagerViewComponent,
    AdminViewComponent,
    ClientViewComponent,
    CoachViewComponent,
    CreateBillsComponent,
    CreateStatmentComponent,
    ReportComponent,
    SettingsComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent, FooterComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
