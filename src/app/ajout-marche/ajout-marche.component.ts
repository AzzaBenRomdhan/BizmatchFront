import { Component } from '@angular/core';
import { OffreMarche } from '../model/OffreMarche';
import { OffreMarcheService } from '../services/offre-marche.service';

@Component({
  selector: 'app-ajout-marche',
  templateUrl: './ajout-marche.component.html',
  styleUrls: ['./ajout-marche.component.css']
})
export class AjoutMarcheComponent {
  nouvelleOffre: OffreMarche = new OffreMarche(0, '', '', '', 0, 0);

  
  offres: OffreMarche[] = [];
  constructor(private offreMarcheService: OffreMarcheService) { }
  
  ngOnInit() {
    this.offreMarcheService.getAllOffres().subscribe(data => {
      this.offres = data;
    });
  }
  createOffre(): void {
    if (this.nouvelleOffre.location && this.nouvelleOffre.nomOffre && this.nouvelleOffre.detailsOffre && this.nouvelleOffre.capacite) {
      this.offreMarcheService.createOffre(this.nouvelleOffre).subscribe(data => {
        console.log('Offre créée :', data);
        // Réinitialiser le formulaire après la création réussie
        this.nouvelleOffre = new OffreMarche(0, '', '', '', 0, 0);
      });
    } else {
      // Afficher un message d'erreur ou empêcher la soumission
      console.log('Veuillez remplir tous les champs obligatoires.');
    }
  }
  

  getAllOffres(): void {
    this.offreMarcheService.getAllOffres().subscribe(data => {
      console.log('Toutes les offres :', data);
    });
  }

  getOffreById(idoffre: number): void {
    this.offreMarcheService.getOffreById(idoffre).subscribe(data => {
      console.log('Offre par ID :', data);
    });
  }

  updateOffre(idoffre: number): void {
    const offreMiseAJour = {
      // Remplissez ici les détails mis à jour de l'offre
      location: 'Nouveau lieu',
      nomOffre: 'Nouveau nom',
      detailsOffre: 'Nouveaux détails',
      capacite: 20
    };

    this.offreMarcheService.updateOffre(idoffre, offreMiseAJour).subscribe(data => {
      console.log('Offre mise à jour :', data);
    });
  }

  deleteOffre(idoffre: number): void {
    this.offreMarcheService.deleteOffre(idoffre).subscribe(() => {
      console.log('Offre supprimée avec succès.');
    });
  }

  getOffresByLocation(location: string): void {
    this.offreMarcheService.getOffresByLocation(location).subscribe(data => {
      console.log('Offres par emplacement :', data);
    });
  }

}
