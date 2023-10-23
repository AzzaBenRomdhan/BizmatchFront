import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { UpdateObjectifComponent } from '../update-objectif/update-objectif.component';
import { DeleteObjectifComponent } from '../delete-objectif/delete-objectif.component';
import { AddObjectifComponent } from '../add-objectif/add-objectif.component';
import { ObjectifService } from 'src/app/services/objectif.service';
import { User } from 'src/app/model/User';
import { UserAuthService } from 'src/app/services/user-auth.service';
import { Objectif } from 'src/app/model/Objectif';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-suivi-objectifs',
  templateUrl: './suivi-objectifs.component.html',
  styleUrls: ['./suivi-objectifs.component.css']
})
export class SuiviObjectifsComponent implements OnInit{
user: User | null = null;
objectifs: any;
userName =this.ac.snapshot.params['userName']
oo!:any;
startDate: string = ''; 
endDate: string = '';  
nbrObjectifsInprogress!: number;
nbrObjectifsDone!: number;
nbrTotal!: number;
message!: string;

constructor(public dialog: MatDialog, private objectifService: ObjectifService,private ac:ActivatedRoute, private userAuthService: UserAuthService
  ,private router:Router,  private toast: NgToastService){}

ngOnInit(): void {
  this.fetchData(this.userName);
  this.user= this.userAuthService.getUser(); 
  this.nbrObjectifDone();
  this.nbrObjectifInProgress()
  this.nbrObjectifTotal()
  this.messageNotif(this.userName);
  

}

fetchData(userName: string) {  
  try {
    this.objectifService.findByUserName(userName)
      .subscribe((objectifs) => {
        this.objectifs= objectifs;
        this.objectifs = this.objectifs.reverse();

        console.log('Données récupérées avec succès :', objectifs);
      }, error => {
        console.error('Erreur lors de la récupération des données :', error);
      });
  } catch (error) {
    console.error('Une erreur inattendue s\'est produite :', error);
  }
}

openDialog(idObjectif: number){
  this.dialog.open(UpdateObjectifComponent,
    {
      data: {idObjectif}
    });
}

openDialog2(idObjectif: number){
  this.dialog.open(DeleteObjectifComponent,
    {
      data: {idObjectif}
    });
}

openDialog3(){
  this.dialog.open(AddObjectifComponent);
}

getUserObjectifBetweenTwoDate() {
  this.objectifService
    .getRealisedObjectifsForUserBetweenDates(
      this.userName, // Replace with the username
      this.startDate,
      this.endDate
    )
    .subscribe(
      (objectifs: Objectif[]) => {
        // Handle the fetched objectifs here
        this.objectifs = objectifs;
      },
      (error) => {
        // Handle any errors that occur during the request
        console.error('Error fetching Realized Objectifs:', error);
      }
    );
}

nbrObjectifDone(){
  this.objectifService.getNbrObjectifDone(this.userName).subscribe(
    (count)=>{
      this.nbrObjectifsDone= count;
    }, (error) => {
      console.log("'Erreur lors de la récupération du nombre d\'objectifs done :", error);
    }
  );
}
nbrObjectifInProgress(){
  this.objectifService.getNbrObjectifInprogress(this.userName).subscribe(
    (count) => {
      this.nbrObjectifsInprogress = count;
    }, (error) => {
      console.log("'Erreur lors de la récupération du nombre d\'objectifs inprogress :", error);
    }
  )
}

nbrObjectifTotal(){
  this.objectifService.getNbrObjectifTotal(this.userName).subscribe(
    (count) => {
      this.nbrTotal = count;
    }, (error) => {
      console.log("'Erreur lors de la récupération du nombre d\'objectifs total :", error);
    }
  )
}

messageNotif(userName: string){
  this.objectifService.messageNotif(userName).subscribe(
    (data) =>{
      this.message=data;
      this.toast.error({detail:"Objectif not done",summary:this.message,sticky:true, duration:50000});
      console.log("get de message de notification a été effectué avec succée", data)
    },
    (error) =>{
      console.log("error lors de get de message de notification", error);
    }
  )
}



}
