import { Component, Renderer2, ElementRef, AfterViewInit } from '@angular/core';
import { Demande } from '../model/Demande';
import { DemandeService } from '../services/demande.service'; // Importez votre service

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements AfterViewInit {
  demandes: Demande[] = [];
  newDemande: Demande = new Demande();

  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    private demandeService: DemandeService // Injectez votre service
  ) {}

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

  addDemande(demande: Demande): void {
    this.demandeService.addDemande(demande).subscribe(
      () => {
        console.log('Demande ajoutée avec succès');
        this.clearForm();
        this.retrieveAllDemandes();
      },
      (error) => {
        console.error('Échec de l\'ajout de la demande', error);
      }
    );
  }

  updateDemande(demande: Demande): void {
    this.demandeService.updateDemande(demande).subscribe(
      () => {
        console.log('Demande mise à jour avec succès');
        this.retrieveAllDemandes();
      },
      (error) => {
        console.error('Échec de la mise à jour de la demande', error);
      }
    );
  }

  deleteDemande(id: number): void {
    this.demandeService.deleteDemande(id).subscribe(
      () => {
        console.log('Demande supprimée avec succès');
        this.retrieveAllDemandes();
      },
      (error) => {
        console.error('Échec de la suppression de la demande', error);
      }
    );
  }

  retrieveAllDemandes(): void {
    this.demandeService.getAllDemandes().subscribe(
      (demandes) => {
        this.demandes = demandes;
        console.log('Toutes les demandes récupérées', demandes);
      },
      (error) => {
        console.error('Échec de la récupération de toutes les demandes', error);
      }
    );
  }

  private clearForm(): void {
    this.newDemande = new Demande();
  }
}
