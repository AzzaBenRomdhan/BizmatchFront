import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../model/User';
import { UserNewPassword } from '../model/UserNewPassword';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent {
constructor(private userService: UserService,private router: Router){}
  resultMessage: any;
  valider= false;
  receiveCode:boolean = false;
  user: User = {
    userName: '',
    userFirstName: '',
    userLastName: '',
    userPassword: '',
    userEmail:'',
    userCode:'',
    role : [],
    isPremium:false,
  };

  UserNewPassword: UserNewPassword = {
    
    password: '',
    code: '',
    email: ''
  };

  // tslint:disable-next-line:typedef
  showSuccessAlert(message: string) {
    alert('Succès: ' + message);
  }
  resetPassword() {
    this.valider= true;
     this.userService.resetPasswordEmail(this.user.userEmail).subscribe(
       (response) => {
         this.resultMessage = response.result;
         this.receiveCode = true;
         this.showSuccessAlert('le code a été envoyé avec succée veillez consulter votre boite e-mail.');
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
        this.router.navigate(['/sinscrire']);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
