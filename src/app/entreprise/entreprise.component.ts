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
  constructor(    
    private entrepriseservice: EntrepriseService , private router : Router){ }
    entreprise: Entreprise = {
      nom:'',
      adresse: '',
      details: '',
      photo:''
  
      

    }
    addEntreprise(f:any) { this.entrepriseservice.addEntreprise(f).subscribe((response) => {
      this.router.navigate(["/home"])
      console.log("entreprise ajoutée")
    },(erreur) => {console.log ("echec d'ajour de l'entreprise ")})}
}

