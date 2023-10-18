import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../services/user-auth.service';
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";
import { AnalyseSentiment } from '../model/AnalyseSentiment';
import { PourcentageSentiment } from '../model/PourcentageSentiment';
import { User } from '../model/User';
import { ContactUs } from '../model/ContactUs';
import { Result } from '../model/Result';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  users: User[] = [];
  isLoggedIn!:boolean;
  isAdmin!:boolean;
  roleToAdd: string = '';
  isAddingRole: boolean = false;
  enterprisesCount: number = 0;
  fournisseurCount:number = 0;
  usersCount: number = 0;
  roleInputVisible: boolean = false;
  selectedUserName: string = '';
  result: Result = new Result();
  enterprises: User[] = [];
  fournisseur: User[]=[];
  //count: number // Initialisez la variable count avec une valeur par défaut


  constructor(private userAuthService: UserAuthService, private userService: UserService,private router: Router) {


  }
  ngOnInit() {
    this.userService.getAllUsers().subscribe((data: User[]) => {
      this.users = data;
      this.usersCount = this.users.length; // Initialisez le nombre total d'utilisateurs
  
      // Calcul du nombre d'entreprises à partir des données
      this.enterprises = this.users.filter(user => user.role === 'Entreprise');
      this.enterprisesCount = this.enterprises.length; // Initialisez le nombre d'entreprises 

      this.fournisseur = this.users.filter(user => user.role === 'Fournisseur');
      this.fournisseurCount = this.fournisseur.length; // Initialisez le nombre d'entreprises


    });
    
    

    this.getCountEntreprise();
    this.getCountUsers();
    this.getCountFournisseur();
   

  }

  getCountUsers() {
    return this.userService.getCountUsers().subscribe((count: number) => {
      return this.usersCount=count;
    });
  }
  
  getCountEntreprise() {
    return this.userService.getCountEntreprise().subscribe((count: number) => {
      return this.enterprisesCount= count;
    });
  } 

  getCountFournisseur() {
    return this.userService.getCountFournisseur().subscribe((count: number) => {
      return this.fournisseurCount= count;
    });
  }

  
  ajouterRoleUtilisateur(roleName: string, userName: string) {
    this.userService.addRoleToUser(roleName, userName).subscribe(
      () => {
        console.log('Rôle ajouté avec succès !');
        // Traitez la réponse ou redirigez l'utilisateur selon vos besoins
      },
      (error) => {
        console.error('Erreur lors de l\'ajout du rôle :', error);
        // Gérez les erreurs ici
      }
    );
    this.roleInputVisible = false;
    this.selectedUserName = '';
  }

  
  logout(){
    this.userService.logout();
    this.isLoggedIn = false;
    localStorage.setItem('isLoggedIn', 'false');
    this.router.navigate(['/sinscrire']);
  }
}
