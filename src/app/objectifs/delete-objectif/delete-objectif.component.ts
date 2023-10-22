import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Objectif } from 'src/app/model/Objectif';
import { User } from 'src/app/model/User';
import { ObjectifService } from 'src/app/services/objectif.service';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-delete-objectif',
  templateUrl: './delete-objectif.component.html',
  styleUrls: ['./delete-objectif.component.css']
})
export class DeleteObjectifComponent implements OnInit {

idObjectif!: number;
user: User | null = null;

constructor(private objectifService: ObjectifService,private ac:ActivatedRoute,
    private userAuthService: UserAuthService, @Inject(MAT_DIALOG_DATA) private data: any){ this.idObjectif = data.idObjectif;
    }
 

  ngOnInit(){
  this.user= this.userAuthService.getUser();
  console.log('idObjectif:', this.idObjectif);
  this.deleteObjectif(this.idObjectif);
 }

 deleteObjectif(idObjectif: number) {
  this.objectifService.deleteObjectif(idObjectif).subscribe(
    () => {
      // Handle the successful deletion here
      console.log('Objectif with idObjectif', idObjectif, 'deleted successfully.');
    },
    (error) => {
      // Handle errors if the deletion fails
      console.error('Error deleting objectif:', error);
    }
  );
}

  
}
