import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Route, Router } from '@angular/router';
import { UpdateObjectifComponent } from '../update-objectif/update-objectif.component';
import { DeleteObjectifComponent } from '../delete-objectif/delete-objectif.component';
import { AddObjectifComponent } from '../add-objectif/add-objectif.component';

@Component({
  selector: 'app-suivi-objectifs',
  templateUrl: './suivi-objectifs.component.html',
  styleUrls: ['./suivi-objectifs.component.css']
})
export class SuiviObjectifsComponent {


constructor(public dialog: MatDialog){}

openDialog() {
  this.dialog.open(UpdateObjectifComponent);
}
openDialog2(){
this.dialog.open(DeleteObjectifComponent);
}

openDialog3(){
  this.dialog.open(AddObjectifComponent);
  }
}
