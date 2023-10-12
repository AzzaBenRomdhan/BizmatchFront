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
import { FormGroup, FormsModule } from '@angular/forms';
import { ApropsComponent } from './aprops/aprops.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { DialogElementsExampleDialogComponent } from './ResetPasswordFromProfil/dialog-elements-example-dialog.component';
import { PremiumComponent } from './premium/premium.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { BlogComponent } from './blog/blog.component';
import { DialogOverviewExampleDialogComponent } from './dialog-overview-example-dialog/dialog-overview-example-dialog.component';
// @ts-ignore
import { RecaptchaModule } from "ng-recaptcha";


import { ProfileComponent } from './profile/profile.component';
import { MarcheServiceComponent } from './marche-service/marche-service.component';
import { SuiviObjectifsComponent } from './objectifs/suivi-objectifs/suivi-objectifs.component';
import { AddReclamationComponent } from './add-reclamation/add-reclamation.component';
import { AdminComponent } from './admin/admin.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    LoginRegisterComponent,
    MatchComponent,
    ApropsComponent,
    DialogElementsExampleDialogComponent,
    PremiumComponent,
    ForgetPasswordComponent,
    BlogComponent,
    DialogOverviewExampleDialogComponent,
    ProfileComponent,
    MarcheServiceComponent,
    SuiviObjectifsComponent,
    AddReclamationComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatFormFieldModule,
    RecaptchaModule,
    MatInputModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
