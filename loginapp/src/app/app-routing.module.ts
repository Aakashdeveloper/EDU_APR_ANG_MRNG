import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterFormComponent } from './register-form/register-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileGaurdService } from './profile-guard.service';
import { RegisterGaurdService } from './register-gaurd.service';

const routes: Routes = [
  {path: 'register', canActivate: [RegisterGaurdService], component: RegisterFormComponent },
  {path: 'profile', canActivate: [ProfileGaurdService], component: ProfileComponent },
  {path: 'login', component: LoginFormComponent },
  {path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ProfileGaurdService, RegisterGaurdService ]
})
export class AppRoutingModule { }
