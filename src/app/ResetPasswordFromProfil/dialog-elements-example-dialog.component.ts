import { Component, Input } from '@angular/core';
import { User } from '../model/User';
import { UserAuthService } from '../services/user-auth.service';
import { UserService } from '../services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { UserNewPassword } from '../model/UserNewPassword';


@Component({
  selector: 'app-dialog-elements-example-dialog',
  templateUrl: './dialog-elements-example-dialog.component.html',
  styleUrls: ['./dialog-elements-example-dialog.component.css']
})
export class DialogElementsExampleDialogComponent {
  constructor(private userService: UserService, private userAuthService: UserAuthService, public dialog: MatDialog){}
  
  user: User = {
    userName: '',
    userFirstName: '',
    userLastName: '',
    userPassword: '',
    userEmail:'',
    userCode:'',
    role : [],
  };
  UserNewPassword: UserNewPassword = {
    
    password: '',
    code: '',
    email: ''
  };

  resultMessage: any;
  valider= false;
  resetPassword() {
    const email ="benromdhan.azza99@gmail.com" 
    this.valider= true;
     this.userService.resetPasswordEmail(email).subscribe(
       (response) => {
         this.resultMessage = response.result;
         console.log(this.resultMessage);
       },
       (error) => {
         console.error('Erreur lors de la réinitialisation du mot de passe :', error);
       }
     );
  }

  onResetPassword() {
   
    this.userService.changerMotDepass(this.UserNewPassword).subscribe(
      (response) => {
        console.log(response.result);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}


