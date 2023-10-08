import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogElementsExampleDialogComponent } from '../ResetPasswordFromProfil/dialog-elements-example-dialog.component';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  constructor(public dialog: MatDialog) {}
  


  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogElementsExampleDialogComponent, {
      width: '35%',
      enterAnimationDuration, 
      exitAnimationDuration,
    });
  }
  

}
