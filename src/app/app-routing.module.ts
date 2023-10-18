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
import { ProfileComponent } from './profile/profile.component';
import { MarcheServiceComponent } from './marche-service/marche-service.component';
import { SuiviObjectifsComponent } from './objectifs/suivi-objectifs/suivi-objectifs.component';
import { AdminComponent } from './admin/admin.component';
import {AuthGuard} from "./auth/auth.guard";
import {UserAdminBackComponent} from "./user-admin-back/user-admin-back.component";
import { DashbordComponent } from './dashbord/dashbord.component';
import { AddReclamationComponent } from './add-reclamation/add-reclamation.component';
import { ReunionComponent } from './reunion/reunion.component';
import { DocumentComponent } from './document/document.component';
import { CancelComponent } from './payment/cancel/cancel.component';
import { SucessComponent } from './payment/sucess/sucess.component';
import { AllPostsComponent } from './forum/all-posts/all-posts.component';
import { BlogDetailsComponent } from './forum/blog-details/blog-details.component';





const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: "home", component: HomeComponent},
  { path: "sinscrire", component: LoginRegisterComponent},
  { path: "match", component: MatchComponent},
  { path: "profile", component: ProfileComponent},
  { path: "apropos", component: ApropsComponent},

  { path: "premium", component: PremiumComponent},
  { path: "forgetPassword", component: ForgetPasswordComponent},
  { path: "blog", component: AllPostsComponent},
  { path: "marché", component: MarcheServiceComponent},
  { path: "suiviObjectif", component: SuiviObjectifsComponent},

  {path:"userBack",component:UserAdminBackComponent},
  { path: "admin", component: AdminComponent,canActivate:[AuthGuard], data:{roles:['Admin']}},
  { path: "dashboard", component: DashbordComponent},
  { path: "reclamation", component: AddReclamationComponent},
  { path: "reunion", component: ReunionComponent},
  { path: "document", component: DocumentComponent},

  { path: "cancel", component: CancelComponent},
  { path: "sucess", component: SucessComponent},
  { path: 'blog-details/:idpostBlog', component: BlogDetailsComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
