import { Component, OnInit } from '@angular/core';
import { Demande } from '../model/Demande';
import { Recruteur } from '../model/Recruteur';
import { DemandeService } from '../services/demande.service';
import { RecruteurService } from '../services/recruteur.service';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {
  demandes: Demande[] = [];
  recruteurs: Recruteur[] = [];

  constructor(
    private demandeService: DemandeService,
    private recruteurService: RecruteurService
  ) {}

  ngOnInit() {
    // Récupérer les données des demandes
    this.demandeService.getAllDemandes().subscribe((demandes) => {
      this.demandes = demandes;
    });

    // Récupérer les données des recruteurs
    this.recruteurService.getAllRecruteurs().subscribe((recruteurs) => {
      this.recruteurs = recruteurs;
    });
  }

 deleteDemande(id: number) {
  this.demandeService.deleteDemande(id).subscribe(
    () => {
      // Supprimer la demande de la liste après la suppression
      this.demandes = this.demandes.filter((demande) => demande.id !== id);
    },
    (error) => {
      console.error('Erreur lors de la suppression de la demande :', error);
      // Affichez un message d'erreur à l'utilisateur
      // this.errorMessage = 'Une erreur s'est produite lors de la suppression.';
    }
  );
}


  deleteRecruteur(idR: number) {
    this.recruteurService.deleteRecruteur(idR).subscribe(() => {
      // Supprimer le recruteur de la liste après la suppression
      this.recruteurs = this.recruteurs.filter((recruteur) => recruteur.idR !== idR);
    });
  }
}
