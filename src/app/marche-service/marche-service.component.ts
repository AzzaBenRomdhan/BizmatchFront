import { Component, OnInit } from '@angular/core';
import { OffreMarcheService } from '../services/offre-marche.service';
import { OffreMarche } from '../model/OffreMarche';

@Component({
  selector: 'app-marche-service',
  templateUrl: './marche-service.component.html',
  styleUrls: ['./marche-service.component.css']
})
export class MarcheServiceComponent implements OnInit{
 
  offre: any = { location: '' }; // Initialisation avec une valeur par défaut

  offres: OffreMarche[] = [];
  constructor(private offreMarcheService: OffreMarcheService) { }

  ngOnInit() {
    this.offreMarcheService.getAllOffres().subscribe(data => {
      this.offres = data;
    });
  }
  createOffre(): void {
    const nouvelleOffre: OffreMarche = {
      location: '',
      nomOffre: '',
      detailsOffre: '',
      capacite: 0,
      idoffre: 0 ,
      price: 0 ,
    };
  
    this.offreMarcheService.createOffre(nouvelleOffre).subscribe(data => {
      console.log('Offre créée :', data);
    });
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

  getOffresByLocation(): void {
    const location = this.offre.location; // Utilisez la valeur actuelle de l'emplacement
    this.offreMarcheService.getOffresByLocation(location).subscribe(data => {
      console.log('Offres par emplacement :', data);
    });
  }
  

}
