import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Objectif } from 'src/app/model/Objectif';
import { User } from 'src/app/model/User';
import { ObjectifService } from 'src/app/services/objectif.service';
import { UserAuthService } from 'src/app/services/user-auth.service';


const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();


@Component({
  selector: 'app-update-objectif',
  templateUrl: './update-objectif.component.html',
  styleUrls: ['./update-objectif.component.css']
})


export class UpdateObjectifComponent {
  userName!: string; 
  idObjectif!: number;
  o!:Objectif;
  user: User | null = null;
  objectif: Objectif = {
    idObjectif:0 ,
    userName:'',
    title:'',
    description:'', 
    status:'', 
    pirorite:'',
    dateRealisation:new Date(), 
    startDate:new Date(),
    endDate: new Date()
  }; 

  
  constructor(private objectifService: ObjectifService, private userAuthService: UserAuthService,
   @Inject(MAT_DIALOG_DATA) private data: any, private router: Router){ this.idObjectif = data.idObjectif; }

    
  ngOnInit(){
    this.user= this.userAuthService.getUser();
    console.log('idObjectif:', this.idObjectif);
  }

   updateObjectif(f: any) {
  const idObjectif = this.data.idObject
    this.objectifService.updateObjectif(f, this.idObjectif).subscribe(
      () => {
        location.reload();
        console.log('Objectif updated successfully.');
      },
      (error) => {
        // Handle error, if needed
        console.error('Error updating Objectif:', error);
      }
    );
  }





}
