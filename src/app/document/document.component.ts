import { Component, OnInit } from '@angular/core';
import { Demande } from '../model/Demande';
import { Recruteur } from '../model/Recruteur';
import { DemandeService } from '../services/demande.service';
import { RecruteurService } from '../services/recruteur.service';
import { Router } from '@angular/router';
import { EntrepriseService } from '../services/entreprise.service';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {
  demandes: Demande[] = [];
  recruteurs: Recruteur[] = [];
  id!:number
  message!:string

  constructor(
    private demandeService: DemandeService,
    private recruteurService: RecruteurService,
    private entrepriseService: EntrepriseService
 
  ) {}

  ngOnInit() {
    // Récupérer les données des demandes
    this.demandeService.getAllDemandes().subscribe((demandes) => {
      this.demandes = demandes;
      this.demandes = this.demandes.reverse();
  
    });

    // Récupérer les données des recruteurs
    this.recruteurService.getAllRecruteurs().subscribe((recruteurs) => {
      this.recruteurs = recruteurs;
      this.recruteurs = this.recruteurs.reverse();
      
    });

    this.messageNotif(this.id)
  }


  demandes2: Demande = {
    id: 0,
    nom: '',
    adresse: '',
    siteWeb: '',
    dure: '',
    budget: 0 ,
    description: '',
    typePart: '',
  
  };

 deleteDemande(id: number) {
  if (confirm('voulez-vous supprimer ce formulaire?')) {
    this.demandeService.deleteDemande(id).subscribe(
      () => {
        // Supprimer la demande de la liste après la suppression
        this.demandes = this.demandes.filter((demande) => demande.id !== id);
      },
      (error) => {
        console.error('Erreur lors de la suppression de la demande :', error);
      
      }
    );
  }
  
}

  deleteRecruteur(idR: number) {
    if (confirm('voulez-vous supprimer ce formulaire?')) {
      this.recruteurService.deleteRecruteur(idR).subscribe(() => {
        // Supprimer le recruteur de la liste après la suppression
        this.recruteurs = this.recruteurs.filter((recruteur) => recruteur.idR !== idR);
      },
      (error) => {
        console.error('Erreur lors de la suppression de la demande :', error);
      
      }
    );
  }
  
  }
  messageNotif(id: number){
    this.entrepriseService.messageNotif(this.demandes2.id).subscribe(
      (data) =>{
        this.message=data
        console.log("get de message de notification a été effectué avec succée", data)
      },
      (error) =>{
        console.log("error lors de get de message de notification", error);
      }
    )
  }
}


