import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Objectif } from 'src/app/model/Objectif';
import { ObjectifService } from 'src/app/services/objectif.service';
import { UserAuthService } from 'src/app/services/user-auth.service';

const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();


@Component({
  selector: 'app-add-objectif',
  templateUrl: './add-objectif.component.html',
  styleUrls: ['./add-objectif.component.css']
})
export class AddObjectifComponent implements OnInit {
  userName!: string; 
  status="Waiting"
  o=new Objectif
  objectifs: Objectif[] = [];

  ngOnInit(){
    this.userName = this.userAuthService.getUserName();
    console.log(this.userName)
  }
  
  constructor(private objectifService: ObjectifService, private userAuthService: UserAuthService, private router: Router){}
  
  createObjectif(f:any){
    f.userName = this.userName;
    f.status = this.status;
    this.objectifService.addObjectif(f).subscribe((response) => {  
      location.reload();
      console.log("objectif a été ajouté");
    },
    (error)=> {
      console.log("erreur lors de la creation de l'objectif");
    })
  }

  campaignOne = new FormGroup({
    start: new FormControl(new Date(year, month, 13)),
    end: new FormControl(new Date(year, month, 16)),
  });
  campaignTwo = new FormGroup({
    start: new FormControl(new Date(year, month, 15)),
    end: new FormControl(new Date(year, month, 19)),
  });
  
}
