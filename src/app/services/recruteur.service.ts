import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recruteur } from '../model/Recruteur';

@Injectable({
  providedIn: 'root'
})
export class RecruteurService {
  private url = 'http://localhost:9093/recruteur';

  constructor(private http: HttpClient) {}

  getAllRecruteurs(): Observable<Recruteur[]> {
    return this.http.get<Recruteur[]>(`${this.url}/getAll`);
  }

  getRecruteurById(idR: number): Observable<Recruteur> {
    return this.http.get<Recruteur>(`${this.url}/get/${idR}`);
  }

  addRecruteur(recruteur: Recruteur): Observable<Recruteur> {
    return this.http.post<Recruteur>(`${this.url}/add`, recruteur);
  }

  updateRecruteur(idR: number, recruteur: Recruteur): Observable<void> {
    return this.http.put<void>(`${this.url}/update/${idR}`, recruteur);
  }

  deleteRecruteur(idR: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/delete/${idR}`);
  }
}
