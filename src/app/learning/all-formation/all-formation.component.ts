import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormationService } from 'src/app/services/formation.service';

@Component({
  selector: 'app-all-formation',
  templateUrl: './all-formation.component.html',
  styleUrls: ['./all-formation.component.css']
})

export class AllFormationComponent implements OnInit {
  formations: any[]  = [];
  imageData!: string;
  totalItems : any; 

  ngOnInit(){
    this.getAll();
    this.formations
  }

  constructor(private formationService : FormationService, private router:Router){}

  getAll( ){
    this.formationService.getAll().subscribe(
      (formations:any) => {
        this.formations=formations;
        for (let i = 0; i < this.formations.length; i++) {
          const idFormation = this.formations[i].idFormation;
          this.getImage(idFormation, this.formations[i]);
        }
        this.formations=this.formations.reverse();
        this.totalItems = formations.totalPosts;
      }, 
      (error) =>{
        console.log('erreur de getAll', error)
      }
    )
  }

  


  getImage(idFormation: number, formation: any) {
    this.formationService.getImageByidFormation(idFormation).subscribe((data: Blob) => {
      const reader = new FileReader();
      reader.onload = () => {
        formation.imageData = reader.result as string; // Store image data in post object
      };
      reader.readAsDataURL(data);
    });
  }
  
}
