import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { MatchComponent } from './match/match.component';
import { ApropsComponent } from './aprops/aprops.component';
import { useAnimation } from '@angular/animations';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { PremiumComponent } from './premium/premium.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';

const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: "home", component: HomeComponent},
  { path: "sinscrire", component: LoginRegisterComponent},
  { path: "match", component: MatchComponent},
  { path: "profile", component: UserProfileComponent},
  { path: "apropos", component: ApropsComponent},
  { path: "premium", component: PremiumComponent},
  { path: "forget-password", component: ForgetPasswordComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
