import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { MatchComponent } from './match/match.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ApropsComponent } from './aprops/aprops.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { PremiumComponent } from './premium/premium.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { BlogComponent } from './blog/blog.component';
import { DialogOverviewExampleDialogComponent } from './dialog-overview-example-dialog/dialog-overview-example-dialog.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
// app.module.ts
import { RecaptchaModule } from "ng-recaptcha";


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    LoginRegisterComponent,
    MatchComponent,
    ApropsComponent,
    UserProfileComponent,
    PremiumComponent,
    ForgetPasswordComponent,
    BlogComponent,
    DialogOverviewExampleDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,MatMenuModule,

    RecaptchaModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
