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
  constructor(private userService: UserService){}
  newUser: User = {
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
    this.userService.resetPasswordEmail(this.newUser.userEmail).subscribe(
      (response) => {
        this.resultMessage = response.result; // Assuming your response has a 'result' property
      },
      (error) => {
        console.error('Error:', error);
        this.resultMessage = 'An error occurred.';
      }
    );
  }

}
