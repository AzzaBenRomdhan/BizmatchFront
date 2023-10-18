import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
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
  
  // Function to add an enterprise to your backend
  addEntreprise(entreprise: Entreprise): Observable<Entreprise> {
    return this.http.post<Entreprise>(`${this.url}/addavecImage`, entreprise);
  }
  updateEntreprise(entreprise: Entreprise): Observable<void> {
    return this.http.put<void>(`${this.url}/edit`, entreprise);
  }
  deleteEntreprise(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/delete/${id}`);
  }
  getEntrepriseById(id: number): Observable<Entreprise> {
    return this.http.get<Entreprise>(`${this.url}/${id}`);
  }
  getAllEntreprises(): Observable<Entreprise[]> {
    return this.http.get<Entreprise[]>(this.url);
  }
  
  
  constructor(private http: HttpClient) { }
}