import { SettingsComponent } from './settings/settings.component';
import { ReportComponent } from './report/report.component';
import { CreateStatmentComponent } from './create-statment/create-statment.component';
import { CreateBillsComponent } from './create-bills/create-bills.component';
import { CoachViewComponent } from './coach-view/coach-view.component';
import { ClientViewComponent } from './client-view/client-view.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { ManagerViewComponent } from './manager-view/manager-view.component';
import { CoachesComponent } from './coaches/coaches.component';
import { ClassesComponent } from './classes/classes.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AddMemberComponent } from './add-member/add-member.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
    // { path: '', redirectTo: '/', pathMatch: 'full' },
    {path: '',  component: HomePageComponent, pathMatch: 'full'},
    { path: 'AddMember', component: AddMemberComponent},
    { path: 'Login', component: LoginComponent },
    { path: 'SignUp', component: SignUpComponent },
    { path: 'HomePage', component: HomePageComponent },
    { path: 'classes', component: ClassesComponent },
    { path: 'Coaches', component: CoachesComponent },
    { path: 'ManagerView', component: ManagerViewComponent },
    { path: 'AdminView', component: AdminViewComponent },
    { path: 'ClientView', component: ClientViewComponent },
    { path: 'CoachView', component: CoachViewComponent },
    { path: 'CreateBills', component: CreateBillsComponent },
    { path: 'CreateStatment' , component: CreateStatmentComponent },
    { path: 'Report', component: ReportComponent },
    { path: 'settings', component: SettingsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
