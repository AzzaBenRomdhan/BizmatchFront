import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { MatchComponent } from './match/match.component';
import { ApropsComponent } from './aprops/aprops.component';
import { useAnimation } from '@angular/animations';
import { PremiumComponent } from './premium/premium.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { BlogComponent } from './blog/blog.component';
import { DialogOverviewExampleDialogComponent } from './dialog-overview-example-dialog/dialog-overview-example-dialog.component';
import { ProfileComponent } from './profile/profile.component';
import { MarcheServiceComponent } from './marche-service/marche-service.component';
import { TestComponent } from './test/test.component';
import { SuiviObjectifsComponent } from './objectifs/suivi-objectifs/suivi-objectifs.component';
import { AdminComponent } from './admin/admin.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { AddReclamationComponent } from './add-reclamation/add-reclamation.component';

const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: "home", component: HomeComponent},
  { path: "sinscrire", component: LoginRegisterComponent},
  { path: "match", component: MatchComponent},
  { path: "profile", component: ProfileComponent},
  { path: "apropos", component: ApropsComponent},

  { path: "premium", component: PremiumComponent},
  { path: "forgetPassword", component: ForgetPasswordComponent},
  { path: "blog", component: BlogComponent},
  { path: "blog-exemple", component: DialogOverviewExampleDialogComponent},
  { path: "marché", component: MarcheServiceComponent},
  { path: "suiviObjectif", component: SuiviObjectifsComponent},
  { path: "test", component: TestComponent},
  { path: "dashboard", component: DashbordComponent},
  { path: "reclamation", component: AddReclamationComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
