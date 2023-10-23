import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../services/user-auth.service';
import { Router } from '@angular/router';
import { Entreprise } from '../model/Entreprise';
import { EntrepriseService } from '../services/entreprise.service';
import { DemandeService } from '../services/demande.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  entrprises2: Entreprise [] = [];
  entreprises: Entreprise[] = [];
  nomEntreprise: string = ''; // Ajoutez cette variable pour le champ de recherche
  entreprise: Entreprise | undefined; // Variable pour stocker le résultat de la recherche

  constructor(private userAuthService: UserAuthService, private router : Router , private entrepriseservice: EntrepriseService,
    private demandeService: DemandeService, private toast: NgToastService) {}

    idDemande:any;
    message!:string;

ngOnInit() {
  // Récupérer les données des entrprises
  this.entrepriseservice.getAllEntreprises().subscribe((entrprises) => {
    this.entrprises2 = entrprises;
    this.entrprises2 = this.entrprises2.reverse();
  }); 

  this.lastDemande();
  this.messageNotif();
  console.log(this.message)

}
  
      
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

  rechercheParNom(): void {
    if (this.nomEntreprise) {
      this.entreprise = this.entrprises2.find(entreprise => entreprise.nom === this.nomEntreprise);
    }
  }
  lastDemande(){
    this.demandeService.getLastId().subscribe(
      (response)=>{
        this.idDemande= response;
        console.log(response);
      },
      (error) =>{
        console.log("failed to load lastid", error);
      }
    )
  }


  messageNotif(){
    this.demandeService.getLastId().subscribe(
      (lastId) =>{
        this.demandeService.trouverMeilleurMatch(lastId).subscribe(res => {
          this.message =res;
          console.log("get de message de notification a été effectué avec succée", res)
        }, (error) =>{
          console.log("eroore ", error)
        })
       
      }
    )
  }
 
}

  