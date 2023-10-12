import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { UserAuthService } from 'src/app/services/user-auth.service';
import { UserService } from 'src/app/services/user.service';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private userAuthService: UserAuthService, private userService :UserService,
     private router: Router ){}

  isLoggedIn!:boolean;
  isAdmin!:boolean;
  ngOnInit() {
    // Initialisez isLoggedIn avec la valeur actuelle de localStorage lors du chargement du composant
   this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    /*const rolesData = localStorage.getItem('roles');

    if (rolesData) {
      const roles = JSON.parse(rolesData);

      if (roles.length > 0) {
        const roleName = roles[0].roleName;

        if (roleName === 'Admin') {
          localStorage.setItem('isAdmin', 'true');
        } else {
          localStorage.setItem('isAdmin', 'false');
        }
      }
    } else {
      console.log("Aucune donnée de rôle dans le localStorage.");
    }
    this.isAdmin = localStorage.getItem('isAdmin') === 'true';
    console.log(this.isAdmin);
*/
  }
 logout(){
  this.userService.logout();
  this.isLoggedIn = false;
  localStorage.setItem('isLoggedIn', 'false');
  this.router.navigate(['/sinscrire']);
 }











}
