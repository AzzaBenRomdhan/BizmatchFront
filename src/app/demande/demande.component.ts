import { Component, OnInit } from '@angular/core';
import { Demande } from '../model/Demande';
import { DemandeService } from '../services/demande.service';
import { Recruteur } from '../model/Recruteur';
import { RecruteurService } from '../services/recruteur.service';

@Component({
  selector: 'app-demande',
  templateUrl: './demande.component.html',
  styleUrls: ['./demande.component.css']
})
export class DemandeComponent implements OnInit {
  recruteurs: Recruteur[] = [];
  showNotification: boolean = false;

  constructor(
    private recruteurService: RecruteurService,

    ) {}
  ngOnInit() {
    // Récupérer les données des demandes
    this.recruteurService.getAllRecruteurs().subscribe((recruteurs) => {
      this.recruteurs = recruteurs;
      this.recruteurs = this.recruteurs.reverse();
      
    });}


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

    showNotificationMessage() {
      this.showNotification = true; // Show the notification
      setTimeout(() => {
        this.showNotification = false; // Hide the notification after 5 seconds
      }, 5000);
    }
    
}
