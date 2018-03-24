import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { HeaderComponent } from './header/header.component';
import { PatientComponent } from './patient/patient.component';
import { PhysicianComponent } from './physician/physician.component';
import { CalenderComponent } from './calender/calender.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { HelpComponent } from './help/help.component';
import { RegisterComponent } from './register/register.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'calender', component: CalenderComponent },
  { path: 'appointments', component: AppointmentsComponent },
  { path: 'help', component: HelpComponent },
  { path: 'forgotpass', component: ForgotpassComponent },
  { path: '**', component: PageNotFoundComponent }
 
];

@NgModule({
  
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
 
})
export class AppRoutingModule { }
