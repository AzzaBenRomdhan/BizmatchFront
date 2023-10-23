import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Formation } from 'src/app/model/Formation';
import { FormationService } from 'src/app/services/formation.service';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent {
  constructor(private formationService : FormationService, private router:Router){}
  formation=new Formation;
  hideFormAdd!:boolean;
  showFormAdd!: boolean;
  showForm= false;
  
  image!: File;
  addf(f:any){
    this.formationService.addFormation(f).subscribe(
      (data)=>{
        console.log('added and affected')
        //this.router.navigate(['/blog'])
      },    
      (error)=>{
        console.log(error)
      }
    )
  }

  hideForm() : void { this.hideFormAdd = !this.hideFormAdd;
    this.showFormAdd = !this.showFormAdd }

    onImageChange(event : any) { this.image = event.target.files[0];}

    onUpload() {
      this.formationService.getLastId().subscribe(lastId => {
        this.formationService.uploadImage(lastId, this.image).subscribe(res => {
          console.log(res);
          this.router.navigate(['/admin']);
        });
      })
      
    }

}
