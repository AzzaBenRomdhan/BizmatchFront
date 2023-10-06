import { Component } from '@angular/core';
import { User } from '../model/User';
import { UserAuthService } from '../services/user-auth.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  constructor(private userService: UserService, private userAuthService: UserAuthService){}
  user: User = {
    userName: '',
    userFirstName: '',
    userLastName: '',
    userPassword: '',
    userEmail:'',
    role : [],
  };

  resultMessage: any;

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

}
