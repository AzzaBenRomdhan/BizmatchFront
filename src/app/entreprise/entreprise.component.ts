import { Component } from '@angular/core';
import { EntrepriseService } from '../services/entreprise.service';
import { Entreprise } from '../model/Entreprise';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entreprise',
  templateUrl: './entreprise.component.html',
  styleUrls: ['./entreprise.component.css'],
})
export class EntrepriseComponent {
  constructor(private entrepriseservice: EntrepriseService, private router: Router) { }

  entreprise: Entreprise = {
    id: 0,
    nom: '',
    adresse: '',
    details: '',
    photo: '',
    budget: 0,
    accepte: false,
    domaine: '',
  };
  entreprises: Entreprise[] = [];
  showForm = false;

  openFileInput() {
    const inputElement = document.getElementById('photoInput') as HTMLInputElement;
    if (inputElement) {
      inputElement.style.display = 'block';
      inputElement.click();
      inputElement.style.display = 'none';
    }
  }

  onImageChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const files = inputElement.files;
    if (files && files.length > 0) {
      const file = files[0];
      const formData = new FormData();
      formData.append('image', file);

      this.entrepriseservice.uploadPhoto(formData).subscribe((response) => {
        this.entreprise.photo = response.photo;
      });
    }
  }

  onUpload() {
    if (typeof this.entreprise.photo === 'string') {
      // Photo is already a string (image path), so call addEntreprise
      this.entrepriseservice.addEntreprise(this.entreprise).subscribe(
        () => {
          this.retrieveAllEnterprises();
          this.hideAllForm();
          console.log('Entreprise ajoutée');
        },
        (erreur) => {
          console.log("Échec d'ajout de l'entreprise", erreur);
        }
      );
    } else if (this.entreprise.photo instanceof File) {
      // Photo is a File, so call addEntrepriseWithImage
      if (this.entreprise.recruteurId && this.entreprise.demandeAchatId) {
        this.entrepriseservice.addEntrepriseWithImage(
          this.entreprise.nom,
          this.entreprise.photo,
          this.entreprise.adresse,
          this.entreprise.details,
          this.entreprise.budget,
          this.entreprise.domaine,
          this.entreprise.recruteurId,
          this.entreprise.demandeAchatId
        ).subscribe(
          () => {
            this.retrieveAllEnterprises();
            this.hideAllForm();
            console.log('Entreprise ajoutée');
          },
          (erreur) => {
            console.log("Échec d'ajout de l'entreprise", erreur);
          }
        );
      } else {
        console.log("Recruteur ID or DemandeAchat ID is undefined. Handle this case accordingly.");
      }
    } else {
      console.log("Invalid photo type");
    }
  }
  
  

  hideAllForm() {
    this.showForm = !this.showForm;
  }

  retrieveAllEnterprises() {
    this.entrepriseservice.getAllEntreprises().subscribe((enterprises) => {
      this.entreprises = enterprises;
    });
  }
}
