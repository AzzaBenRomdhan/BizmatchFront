import { Component, OnInit } from '@angular/core';
import { EntrepriseService } from '../services/entreprise.service';
import { Entreprise } from '../model/Entreprise';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UploadFileService } from '../services/upload-file.service';


@Component({
  selector: 'app-entreprise',
  templateUrl: './entreprise.component.html',
  styleUrls: ['./entreprise.component.css']
})
export class EntrepriseComponent implements OnInit {
  entrprises2: Entreprise [] = [];

  id!:number
  selectedFile: File | null = null;

  constructor(
    private entrepriseservice: EntrepriseService,
    private router: Router,
    private http: HttpClient,
    private uploadFileService: UploadFileService // Initialisation du service
  ) {}

  ngOnInit() {
    // Récupérer les données des entrprises
    this.entrepriseservice.getAllEntreprises().subscribe((entrprises) => {
      this.entrprises2 = entrprises;
      this.entrprises2 = this.entrprises2.reverse();
  
    }); }

  entreprise: Entreprise = {
    id:0,
    nom: '',
    adresse: '',
    details: '',
    photo: null,
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
  
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  uploadImage() {
    if (this.selectedFile) {
      this.uploadFileService.uploadFile(this.selectedFile).subscribe((response) => {
        console.log('Image téléchargée avec succès', response);
        console.log(this.selectedFile);
      });
    }
  }
  add(entreprise: Entreprise) {
    const formData = new FormData();
    formData.append('nom', entreprise.nom);
    formData.append('adresse', entreprise.adresse);
    formData.append('details', entreprise.details);
    formData.append('budget', entreprise.budget.toString());
    formData.append('domaine', entreprise.domaine);
    formData.append('file', entreprise.photo as File); // Ajoutez le fichier image.
  
    this.entrepriseservice.add(formData).subscribe(
      () => {
        this.router.navigate(['/home']);
        console.log('entreprise ajoutée');
      },
      (erreur) => {
        console.log("Échec de l'ajout de l'entreprise", erreur);
      }
    );
  }
  addEntreprise(entrpriseData: Entreprise): void {
    this.entrepriseservice.addEntreprise(entrpriseData).subscribe(
      (response) => {
        console.log('Entrprise ajoutée avec succès :', response);
        
        // Réinitialisez le formulaire
        this.entreprise = new Entreprise();
      },
      (error) => {
        console.error('Une erreur est survenue :', error);
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

  deleteEntreprise(id: number) {
    if (confirm('Voulez-vous supprimer cette entreprise?')) {
      this.entrepriseservice.deleteEntreprise(id).subscribe(
        () => {
          // Supprimer l'entreprise de la liste après la suppression
          this.entrprises2 = this.entrprises2.filter((entreprise) => entreprise.id !== id);
          console.log('Entreprise supprimée avec succès');
        },
        (error) => {
          console.error('Erreur lors de la suppression de l entreprise :', error);
        }
      );
    }
  }
  
  }
  

