import { Component } from '@angular/core';
import { AfterViewInit, Renderer2, ElementRef } from '@angular/core';
import { User } from '../model/User';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { UserAuthService } from '../services/user-auth.service';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent  implements AfterViewInit {
  newUser: User = {
    userName: '',
    userFirstName: '',
    userLastName: '',
    userPassword: '',
    userEmail:'',
    role : [],
  };
  registrationSuccess = false;
  registrationError = false;

  userRole = '';
  isLoggedIn: boolean = false;

  constructor(private renderer: Renderer2, private el: ElementRef,
    private userService: UserService, private router: Router, private userAuthService: UserAuthService,
    ){}

  ngAfterViewInit() {
    const signUpButton = this.el.nativeElement.querySelector('#signUp');
    const signInButton = this.el.nativeElement.querySelector('#signIn');

    if (signUpButton && signInButton) {
      this.renderer.listen(signUpButton, 'click', () => {
        this.el.nativeElement.querySelector('#container').classList.add("right-panel-active");
      });

      this.renderer.listen(signInButton, 'click', () => {
        this.el.nativeElement.querySelector('#container').classList.remove("right-panel-active");
      });
    }
  }

  registerUser() {
    this.userService.registerNewUser(this.newUser).subscribe(
      (response) => {
        this.showSuccessAlert('Votre compte a créé avec succès.');
        location.reload();
      },
      (error) => {
          this.showErrorAlert(' Erreur lors de la création du compte. Veuillez réssayer.');
        }
    );
  }
   // tslint:disable-next-line:typedef
   showSuccessAlert(message: string) {
    alert('Succès: ' + message);
  }

  // tslint:disable-next-line:typedef
  showErrorAlert(error: string) {
    alert('Erreur: ' + error);
  }

    // tslint:disable-next-line:typedef
    login(loginForm: NgForm) {
      this.userService.login(loginForm.value).subscribe(
        (response: any) => {
          this.userAuthService.setRoles(response.user.role);
          this.userAuthService.setToken(response.jwtToken);
          this.isLoggedIn = true;
          localStorage.setItem('isLoggedIn', 'true');
          this.activateAccount(response.verificationToken);
          const role = response.user.role[0].roleName;
          if (role === 'Admin') {
            this.router.navigate(['/admin']);
          } else {
            this.router.navigate(['/match']);
          }
        },
        (error) => {
          console.log(error);
        }
      );
    }
    activateAccount(verificationToken: string) {
      this.userService.activateUser(verificationToken).subscribe(
        () => {
          // Account activation successful, handle accordingly (e.g., show a success message)
          console.log('Account activated successfully.');
        },
        (error) => {
          // Account activation failed, handle accordingly (e.g., show an error message)
          console.error('Failed to activate account:', error);
        }
      );
    }
  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
  }
}
