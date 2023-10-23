import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OffreMarcheService {

  private apiUrl = 'http://localhost:9083/OffreMarche'; // Remplacez ceci par l'URL de votre API

  constructor(private http: HttpClient) { }

  createOffre(offre: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/addMarche`, offre);
  }

  
  getAllOffres(): Observable<any> {
    return this.http.get(`${this.apiUrl}/listoffre`);
  }

  getOffreById(idoffre: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/listbyId/${idoffre}`);
  }

  
  updateOffre(idoffre: number, offre: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/update/${idoffre}`, offre);
  }

  
  deleteOffre(idoffre: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${idoffre}`);
  }

  getOffresByLocation(location: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/find/byLocation?location=${location}`);
  }
}
