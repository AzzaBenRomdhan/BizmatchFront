import { Component } from '@angular/core';
import { CrmService } from '../services/crm.service';
import { ContactUs } from '../model/ContactUs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-reclamation',
  templateUrl: './add-reclamation.component.html',
  styleUrls: ['./add-reclamation.component.css']
})
export class AddReclamationComponent {
  constructor(private crmService: CrmService, private router: Router){}
  contactUs: ContactUs = {
    Firstname:'',
    LastName: '',
    Email: '',
    contenu:'',
    Location:''

  }
  createContactUs(f:any){
    this.crmService.createContact(f).subscribe((response) => {
        console.log("message envoyé");
        this.router.navigate([''])
      },
      (error)=> {
        console.log("message non envoyé");
      })
  }

}
