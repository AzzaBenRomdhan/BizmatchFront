import { Component,OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogElementsExampleDialogComponent } from '../ResetPasswordFromProfil/dialog-elements-example-dialog.component';
import { UserAuthService } from '../services/user-auth.service';
import { User } from '../model/User';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User | null = null;
      ngOnInit(){
    this.user= this.UserAuthService.getUser();
   }
  constructor(public dialog: MatDialog, private UserAuthService :UserAuthService ) {}
  

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogElementsExampleDialogComponent, {
      width: '35%',
      enterAnimationDuration, 
      exitAnimationDuration,
    });
  }
  
  
}
