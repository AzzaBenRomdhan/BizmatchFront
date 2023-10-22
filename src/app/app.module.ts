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
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApropsComponent } from './aprops/aprops.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import { DialogElementsExampleDialogComponent } from './ResetPasswordFromProfil/dialog-elements-example-dialog.component';
import { PremiumComponent } from './premium/premium.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { BlogComponent } from './blog/blog.component';

import { RecaptchaModule } from "ng-recaptcha";
import { ScheduleModule , RecurrenceEditorModule, DayService, WeekService, WorkWeekService, MonthService, MonthAgendaService} from '@syncfusion/ej2-angular-schedule';

import { ProfileComponent } from './profile/profile.component';
import { MarcheServiceComponent } from './marche-service/marche-service.component';
import { SuiviObjectifsComponent } from './objectifs/suivi-objectifs/suivi-objectifs.component';
import { AddReclamationComponent } from './add-reclamation/add-reclamation.component';
import { AdminComponent } from './admin/admin.component';
import { CrmComponent } from './crm/crm.component';
import { ReunionComponent } from './reunion/reunion.component';
import { DocumentComponent } from './document/document.component';
import { CancelComponent } from './payment/cancel/cancel.component';
import { SucessComponent } from './payment/sucess/sucess.component';
import { MatCardModule } from '@angular/material/card';
import { AllPostsComponent } from './forum/all-posts/all-posts.component';
import { BlogDetailsComponent } from './forum/blog-details/blog-details.component';
import { UpdateObjectifComponent } from './objectifs/update-objectif/update-objectif.component';
import { DeleteObjectifComponent } from './objectifs/delete-objectif/delete-objectif.component';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatChipsModule} from '@angular/material/chips';
import { AddObjectifComponent } from './objectifs/add-objectif/add-objectif.component';
import { EntrepriseComponent } from './entreprise/entreprise.component';
import { NgToastModule } from 'ng-angular-popup';
import { FormationComponent } from './learning/formation/formation.component';
import { AllFormationComponent } from './learning/all-formation/all-formation.component';
import {MatListModule} from '@angular/material/list';



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
    ProfileComponent,
    MarcheServiceComponent,
    SuiviObjectifsComponent,
    AddReclamationComponent,
    AdminComponent,
    CrmComponent,
    ReunionComponent,
    DocumentComponent,
    CancelComponent,
    SucessComponent,
    AllPostsComponent,
    BlogDetailsComponent,
    UpdateObjectifComponent,
    DeleteObjectifComponent,
    AddObjectifComponent,
    
    EntrepriseComponent,
          FormationComponent,
          AllFormationComponent,
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
    MatDialogModule,
    MatIconModule,
    ScheduleModule, 
    RecurrenceEditorModule,
    MatCardModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatChipsModule,

    ScheduleModule, RecurrenceEditorModule,
    NgToastModule,
    MatListModule
  ],
  providers: [DayService, WeekService, WorkWeekService, MonthService, MonthAgendaService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
