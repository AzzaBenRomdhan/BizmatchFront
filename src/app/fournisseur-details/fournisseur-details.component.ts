import { Component } from '@angular/core';
import { FournisseurserviceService } from '../services/fournisseurservice.service';
import { Fournisseur } from '../model/Fournisseur';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fournisseur-details',
  templateUrl: './fournisseur-details.component.html',
  styleUrls: ['./fournisseur-details.component.css']
})
export class FournisseurDetailsComponent {

  fournisseur: Fournisseur = {
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

userCount: number = 0;
  constructor(private route: ActivatedRoute ,private fournisseurService: FournisseurserviceService) {}
  


    ngOnInit() {
      this.route.params.subscribe(params => {
        const username = params['username']; // Récupérer le nom d'utilisateur depuis les paramètres de la route
        this.fournisseurService.getFournisseurByUsername(username)
          .subscribe((fournisseur: Fournisseur) => {
            this.fournisseur = fournisseur;
            console.log('Fournisseur récupéré avec succès :', fournisseur);
          },
          (error) => {
            console.error('Une erreur s\'est produite lors de la récupération du fournisseur :', error);
          });
      });

      this.fournisseurService.getUserCount(1).subscribe((count) => {
        this.userCount = count;
      });
     
  } 

  sendEmail() {
    const fournisseurEmail = this.fournisseur.email;
    const emailSubject = 'Demandes de Colaboration Via Bizmatch';
    const emailBody = 'Veuillez ecrivez Votre demande';
    
    // Spécifiez le lien Gmail manuellement
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${fournisseurEmail}&su=${emailSubject}&body=${emailBody}`;
    
    // Redirigez vers le lien Gmail
    window.location.href = gmailLink;
}

  
}
