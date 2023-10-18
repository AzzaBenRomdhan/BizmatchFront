import { Component } from '@angular/core';
import { EntrepriseService } from '../services/entreprise.service';
import { Entreprise } from '../model/Entreprise';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entreprise',
  templateUrl: './entreprise.component.html',
  styleUrls: ['./entreprise.component.css']
})
export class EntrepriseComponent {
  constructor(private entrepriseservice: EntrepriseService, private router: Router) {}

  entreprise: Entreprise = {
    nom: '',
    adresse: '',
    details: '',
    photo: '',
    budget: 0,
    accepte: false,
    domaine: '',
  
  };
  entreprises: Entreprise[] = [];
  

  openFileInput() {
    const inputElement = document.getElementById('photoInput');
    if (inputElement) {
      inputElement.click();
    }
  }
  
  onFileSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const files = inputElement.files;
    if (files && files.length > 0) {
      const file = files[0];
      const formData = new FormData();
      formData.append('file', file);
  
      // Submit the file to the service for upload
      this.entrepriseservice.uploadPhoto(formData).subscribe((response) => {
        this.entreprise.photo = response.photo;
      });
    }
  }
  
  addEntreprise(entreprise: Entreprise) {
    this.entrepriseservice.addEntreprise(entreprise).subscribe(
      () => {
        this.router.navigate(['/home']);
        console.log('entreprise ajoutée');
      },
      (erreur) => {
        console.log('echec d\'ajout de l\'entreprise');
      }
    );
  }

  updateEntreprise(entreprise: Entreprise) {
    this.entrepriseservice.updateEntreprise(entreprise).subscribe(
      () => {
        console.log('entreprise mise à jour');
      },
      (error) => {
        console.log('Échec de la mise à jour de l\'entreprise', error);
      }
    );
  }
  deleteEntreprise(id: number) {
    this.entrepriseservice.deleteEntreprise(id).subscribe(
      () => {
        console.log('Entreprise supprimée avec succès');
        // You can also refresh the list of entreprises if needed.
        this.retrieveAllEntreprises();
      },
      (error) => {
        console.log('Échec de la suppression de l\'entreprise', error);
      }
    );
  }

  retrieveEntrepriseById(id: number) {
    this.entrepriseservice.getEntrepriseById(id).subscribe(
      (entreprise) => {
        // Handle the retrieved entreprise as needed
        console.log('Entreprise récupérée par ID', entreprise);
      },
      (error) => {
        console.log('Échec de la récupération de l\'entreprise par ID', error);
      }
    );
  }

  retrieveAllEntreprises() {
    this.entrepriseservice.getAllEntreprises().subscribe(
      (entreprises) => {
        this.entreprises = entreprises;
        console.log('Toutes les entreprises récupérées', entreprises);
      },
      (error) => {
        console.log('Échec de la récupération de toutes les entreprises', error);
      }
    );
  }
  }
  
  

