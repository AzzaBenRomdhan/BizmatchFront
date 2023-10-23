import { Component } from '@angular/core';
import { Fournisseur } from '../model/Fournisseur';
import { FournisseurserviceService } from '../services/fournisseurservice.service';
import { UserAuthService } from '../services/user-auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css']
})
export class FournisseurComponent {

  stFournisseur: boolean = false; // Initialisez ici
  estConnecte: boolean = false;
  error: string | null = null;
  username: string = '';

  domaine: string = ''; // Assurez-vous que cette ligne est correctement définie
  successAlert: boolean = false; // Initialement défini à false
  errorAlert: boolean = false; // Initialement défini à false
  
  fournisseurs: Fournisseur[] = [];
  newFournisseur: Fournisseur = {
    idfournisseur: 0,
    domainesactivite: '',
    details: '',
    username: '',
    prenom: '',
    email: '',
    address: '',
    partenaire: '',
    usersfournisseur: []
  }; 


  
  
  
  fournisseurData: any = {};
  
  constructor(private router: Router,private fournisseurService: FournisseurserviceService , private authService: UserAuthService) {}
  showFournisseurDetails(username: string) {
    this.router.navigate(['DetailsFour', username]);
  }
  ngOnInit(): void {
    this.loadFournisseurs();
   
  
  } 

  onSubmit(): void {
    if (!this.authService.isLoggedIn()) {
      // L'utilisateur n'est pas connecté
      this.errorAlert = true; // Affiche l'alerte d'erreur
    } else {
      this.fournisseurService.addFournisseur(this.fournisseurData).subscribe(
        (data) => {
          // L'ajout s'est effectué avec succès
          this.successAlert = true; // Affiche l'alerte de succès
        },
        (error) => {
          // Une erreur s'est produite lors de l'ajout
          this.errorAlert = true; // Affiche l'alerte d'erreur
        }
      );
    }
  }
  
  

  loadFournisseurs(): void {
    this.fournisseurService.getAllFournisseurs().subscribe(data => {
      this.fournisseurs = data;
    });
  }

  addFournisseur(): void {
    this.fournisseurService.addFournisseur(this.newFournisseur).subscribe(data => {
      this.newFournisseur = {
        idfournisseur: 0,
        domainesactivite: '',
        details: '',
        username: '',
        prenom: '',
        email: '',
        address: '',
        partenaire: '',
        usersfournisseur: []

      };
      this.loadFournisseurs();
    });
  }

  updateFournisseur(fournisseur: Fournisseur): void {
    this.fournisseurService.updateFournisseur(fournisseur).subscribe(() => {
      this.loadFournisseurs();
    });
  }

  deleteFournisseur(username: string): void {
    this.fournisseurService.deleteFournisseurByUsername(username);
    this.loadFournisseurs();
  }

  assignUserToFournisseur(idfournisseur: number, userUsername: string): void {
    this.fournisseurService.assignUserToFournisseur(idfournisseur, userUsername).subscribe(() => {
      this.loadFournisseurs();
    });
  } 

  searchFournisseurs() {
    if (this.domaine) { // Vérifiez si la chaîne de recherche n'est pas vide
      // Appelez le service pour obtenir les fournisseurs
      this.fournisseurService.searchFournisseursByDomaine(this.domaine).subscribe(fournisseurs => {
        // Utilisez .filter pour filtrer les fournisseurs en fonction de la chaîne de recherche
        this.fournisseurs = fournisseurs.filter(fournisseur => {
          // Utilisez .toLowerCase() pour rendre la comparaison insensible à la casse
          return fournisseur.domainesactivite.toLowerCase().includes(this.domaine.toLowerCase());
        });
      });
    } else {
      // Si la chaîne de recherche est vide, chargez tous les fournisseurs
      this.loadFournisseurs();
    }
  }

  getFournisseurByUsername(username: string) {
    this.fournisseurService.getFournisseurByUsername(username)
      .subscribe(
        (fournisseur) => {
          this.fournisseurData = fournisseur;
          this.error = null; // Réinitialisez toute erreur précédente
        },
        (error) => {
          this.fournisseurData = null; // Assurez-vous que fournisseur est vide en cas d'erreur
          this.error = 'Une erreur s\'est produite lors de la récupération des détails de l\'utilisateur.';
        }
      );
  }
  
  
  
}
