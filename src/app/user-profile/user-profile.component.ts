import { Component, Input  } from '@angular/core';
import { User } from '../model/User';
import { UserAuthService } from '../services/user-auth.service';
import { UserService } from '../services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogElementsExampleDialogComponent } from '../ResetPasswordFromProfil/dialog-elements-example-dialog.component';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  @Input() passToResetPwdVal!: boolean;

  constructor(private userService: UserService, private userAuthService: UserAuthService,
    public dialog: MatDialog){}
  user: User = {
    userName: '',
    userFirstName: '',
    userLastName: '',
    userPassword: '',
    userEmail:'',
    userCode:'',
    role : [],
  };

  resultMessage: any;
  afficher = false;

  ngOnInit() {
  }
  resetPassword() {
   const email =this.user.userEmail // Remplacez par l'e-mail de l'utilisateur
    this.userService.resetPasswordEmail(email).subscribe(
      (response) => {
        this.resultMessage = response.result;
      },
      (error) => {
        console.error('Erreur lors de la réinitialisation du mot de passe :', error);
      }
    );
  }
    afficherInput() {
    this.afficher = true;
  }
  openDialog() {
    this.dialog.open(DialogElementsExampleDialogComponent);
  }
}
