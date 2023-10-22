import { Component, OnInit } from '@angular/core';
import { Demande } from '../model/Demande';
import { DemandeService } from '../services/demande.service';

@Component({
  selector: 'app-demande',
  templateUrl: './demande.component.html',
  styleUrls: ['./demande.component.css']
})
export class DemandeComponent implements OnInit {
  demandes: Demande[] = [];

  constructor(
    private demandeService: DemandeService

    ) {}
  ngOnInit() {
    // Récupérer les données des demandes
    this.demandeService.getAllDemandes().subscribe((demandes) => {
      this.demandes = demandes;
      this.demandes = this.demandes.reverse();
  
    });}

}
