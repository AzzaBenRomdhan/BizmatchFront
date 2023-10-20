import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { Entreprise } from '../model/Entreprise';



@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {
  entreprise: Entreprise = new Entreprise();
  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('jwtToken')
    })
  }
  url = 'http://localhost:9093/entreprise';
  newUrl!: string;
  ENTREPRISES = [];

  private _refresh$=new Subject<void>()

  get refresh$(){
    return this._refresh$;
  }

  uploadPhoto(formData: FormData): Observable<{ photo: string }> {
    return this.http.post<{ photo: string }>(`${this.url}/upload-file`, formData);
  }
  
  
  // Add an enterprise without an image
  addEntreprise(entreprise: Entreprise): Observable<Entreprise> {
    return this.http.post<Entreprise>(`${this.url}/add`, entreprise, this.httpOptions);
  }

  // Add an enterprise with an image
  addEntrepriseWithImage(
    nom: string,
    image: File,
    adresse: string,
    details: string,
    budget: number,
    domaine: string,
    recruteurId: number,
    demandeAchatId: number
  ): Observable<Entreprise> {
    const formData = new FormData();
    formData.append('nom', nom);
    formData.append('image', image, image.name);
    formData.append('adresse', adresse);
    formData.append('details', details);
    formData.append('budget', budget.toString());
    formData.append('domaine', domaine);
    formData.append('recruteurId', recruteurId.toString());
    formData.append('demandeAchatId', demandeAchatId.toString());

    return this.http.post<Entreprise>(`${this.url}/addavecImage`, formData);
  }
    
 
  deleteEntreprise(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/delete/${id}`).pipe(
      tap(() => {
        this._refresh$.next();
      })
    );
  }
  getEntrepriseById(id: number): Observable<Entreprise> {
    return this.http.get<Entreprise>(`${this.url}/${id}`);
  }
  getAllEntreprises(): Observable<Entreprise[]> {
    return this.http.get<Entreprise[]>(this.url);
  }
  
  
  constructor(private http: HttpClient) { }
}