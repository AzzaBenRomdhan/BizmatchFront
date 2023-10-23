import { Demande } from '../model/Demande';
import { DemandeService } from '../services/demande.service'; // Importez votre service
import { Recruteur } from '../model/Recruteur';
import { RecruteurService } from '../services/recruteur.service';
import { AfterViewInit, Component, ElementRef, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements AfterViewInit {

  recruteur: Recruteur = new Recruteur();
  demande: Demande = new Demande(); // Déclarez la propriété demande
  id!:number

  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    private recruteurService: RecruteurService,
    private demandeService: DemandeService,
    private router :Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = +params['id']; // Get the 'id' parameter from the route
      if (this.id) {
        this.demandeService.getDemandeById(this.id).subscribe(
          (demande) => {
            this.demande = demande;
            // Now, 'this.demande' will contain the data from the service
          },
          (error) => {
            console.error('Error fetching Demande:', error);
          }
        );
      }
    });
  }

  ngAfterViewInit() {
    const signUpButton = this.el.nativeElement.querySelector('#signUp');
    const signInButton = this.el.nativeElement.querySelector('#signIn');

    if (signUpButton && signInButton) {
      this.renderer.listen(signUpButton, 'click', () => {
        this.el.nativeElement.querySelector('#container').classList.add('right-panel-active');
      });

      this.renderer.listen(signInButton, 'click', () => {
        this.el.nativeElement.querySelector('#container').classList.remove('right-panel-active');
      });
    }
  }

  addRecruteur(recruteurData: Recruteur): void {
    this.recruteurService.addRecruteur(recruteurData).subscribe(
      (response) => {
        console.log('Recruteur ajouté avec succès :', response);
        // Réinitialisez le formulaire
        this.recruteur = new Recruteur();
      },
      (error) => {
        console.error('Une erreur est survenue :', error);
      }
    );
  }

  addDemande(demandeData: Demande ): void {

    this.demandeService.addDemande(demandeData).subscribe(
      (response) => {
        console.log('Demande ajoutée avec succès :', response);
   // Use the Router to navigate to the document route with the 'id' parameter
   this.router.navigate(['/document', this.demande.id]);
        // Réinitialisez le formulaire
        this.demande = new Demande();
      },
      (error) => {
        console.error('Une erreur est survenue :', error);
      }
    );
  }
  
  
}