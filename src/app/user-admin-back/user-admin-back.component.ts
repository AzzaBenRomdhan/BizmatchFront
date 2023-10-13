import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../model/User';
import {ContactUs} from "../model/ContactUs";
import {AnalyseSentiment} from "../model/AnalyseSentiment";
import {PourcentageSentiment} from "../model/PourcentageSentiment";
import {Result} from "../model/Result";



@Component({
  selector: 'app-user-admin-back',
  templateUrl: './user-admin-back.component.html',
  styleUrls: ['./user-admin-back.component.css']
})
export class UserAdminBackComponent implements OnInit {
  users: User[] = [];

  roleToAdd: string = '';
  isAddingRole: boolean = false;
  enterprisesCount: number = 1;
  usersCount: number = 0;
  roleInputVisible: boolean = false;
  selectedUserName: string = '';
  result: Result = new Result();
  //count: number // Initialisez la variable count avec une valeur par défaut


  constructor(private userService: UserService) {


  }
  ngOnInit() {
    this.userService.getAllUsers().subscribe((data: User[]) => {
      this.users = data;
      this.usersCount = this.users.length; // Initialisez le nombre d'utilisateurs
    });
    this.getCountEntreprise();
    this.getCountUsers();
    this.calculerPourcentageSentiment(new ContactUs());

    this.analyserContenuParId(1);
    this.analyserContenuParId(2);

  }

  getCountEntreprise(): void {
    this.userService.getcountEntreprise().subscribe(
      (count: number) => {
        this.usersCount = count; // Mettez à jour le nombre d'utilisateurs à partir de l'API
      },
      (error) => {
        console.error('Error fetching Users count:', error);
      }
    );

  }

  getCountUsers() {
    this.userService.getCountUsers().subscribe(
      (count: number) => {
        this.usersCount = count;},
      (error) => {
        console.error('Error fetching Users count:', error);
      }
    );
  }




  // Fonction pour afficher l'input pour ajouter un rôle


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

  analyserContenuParId(id: number) {
    this.userService.analyserContenuParId(id).subscribe((result: AnalyseSentiment) => {
      this.result.analyseSentiment = result;
    });
  }

  calculerPourcentageSentiment(ContactUs: ContactUs) {
    const contactUs = {}; // Remplacez par les données nécessaires
    this.userService.calculerPourcentageSentiment(contactUs).subscribe((result: PourcentageSentiment) => {
      this.result.pourcentageSentiment = result;
    });
  }
}
