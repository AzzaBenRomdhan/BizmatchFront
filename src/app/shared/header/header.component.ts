import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/services/user-auth.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private userAuthService: UserAuthService, private userService :UserService, private router: Router ){}
  isLoggedIn: boolean = false;
  ngOnInit() {
    // Initialisez isLoggedIn avec la valeur actuelle de localStorage lors du chargement du composant
    this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  }
  username: any; // Vous devrez obtenir le nom d'utilisateur actuel depuis votre service d'authentification
  showUserDropdown: boolean = false;

 logout(){
  this.userService.logout();
  this.router.navigate(['/sinscrire']);
 }
 toggleUserDropdown(): void {
  this.showUserDropdown = !this.showUserDropdown;
}



}
