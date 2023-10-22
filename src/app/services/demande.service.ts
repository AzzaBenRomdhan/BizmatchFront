import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Demande } from '../model/Demande';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {
  
  private url = 'http://localhost:9093/demandeAchat';

  constructor(private http: HttpClient) {}

  getAllDemandes(): Observable<Demande[]> {
    return this.http.get<Demande[]>(`${this.url}/getAll`);
  }

  getDemandeById(id: number): Observable<Demande> {
    return this.http.get<Demande>(`${this.url}/get/${id}`);
  }

  addDemande(demande: Demande): Observable<void> {
    return this.http.post<void>(`${this.url}/add`, demande);
  }

  updateDemande(id: number, demande: Demande): Observable<void> {
    return this.http.put<void>(`${this.url}/update/${id}`, demande);
  }

  deleteDemande(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/delete/${id}`);
  }
 
  
}
