import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Fournisseur } from '../model/Fournisseur';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FournisseurserviceService {

  private baseUrl = 'http://localhost:8082/Fournisseur'; // Remplacez par l'URL de votre API

  constructor(private http: HttpClient) {}

  addFournisseur(fournisseur: Fournisseur): Observable<Fournisseur> {
    return this.http.post<Fournisseur>(`${this.baseUrl}/addFour`, fournisseur);
  }

  getFournisseurByUsername(username: string): Observable<Fournisseur> {
    return this.http.get<Fournisseur>(`${this.baseUrl}/getByUsername/${username}`);
  }

  getAllFournisseurs(): Observable<Fournisseur[]> {
    return this.http.get<Fournisseur[]>(`${this.baseUrl}/getAllFour`);
  }

  updateFournisseur(fournisseur: Fournisseur): Observable<Fournisseur> {
    return this.http.put<Fournisseur>(`${this.baseUrl}/updateFour`, fournisseur);
  }

  deleteFournisseurByUsername(username: string): void {
    this.http.delete(`${this.baseUrl}/deleteByUsername/${username}`);
  }

  assignUserToFournisseur(idfournisseur: number, userUsername: string): Observable<Fournisseur> {
    return this.http.put<Fournisseur>(`${this.baseUrl}/assignUserToFournisseur?idfournisseur=${idfournisseur}&userUsername=${userUsername}`, null);
  }

  searchFournisseursByDomaine(domaine: string): Observable<Fournisseur[]> {
    return this.http.get<Fournisseur[]>(`${this.baseUrl}/searchFournisseursByDomaine?domaine=${domaine}`);
  }

  sortFournisseursByAssignedUsers(): Observable<Fournisseur[]> {
    return this.http.get<Fournisseur[]>(`${this.baseUrl}/sortFournisseursByAssignedUsers`);
  }

  getUserCount(fournisseurId: number): Observable<number> {
    const url = `${this.baseUrl}/fournisseurs/${fournisseurId}/f`;
    return this.http.get<number>(url);
  }
}
