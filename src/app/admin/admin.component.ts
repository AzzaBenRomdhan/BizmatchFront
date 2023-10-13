import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../services/user-auth.service';
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  constructor(private userAuthService: UserAuthService, private userService: UserService,private router: Router){}
  isLoggedIn!:boolean;
  isAdmin!:boolean;
ngOnInit(){}
  logout(){
    this.userService.logout();
    this.isLoggedIn = false;
    localStorage.setItem('isLoggedIn', 'false');
    this.router.navigate(['/sinscrire']);
  }
}
