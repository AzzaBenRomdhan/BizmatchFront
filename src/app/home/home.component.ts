import { Component } from '@angular/core';
import { UserAuthService } from '../services/user-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  constructor(private userAuthService: UserAuthService, private router : Router){}
  redirectToMatch(): void {
    // Vérifiez si l'utilisateur est déjà connecté
    if (this.userAuthService.isLoggedIn()) {
      // L'utilisateur est connecté, effectuez la redirection vers /match
      this.router.navigate(['/match']);
    } else {
      // L'utilisateur n'est pas connecté, redirigez-le vers la page de connexion/inscription
      this.router.navigate(['/sinscrire']);
    }
  }
}


