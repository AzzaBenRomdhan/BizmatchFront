import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Formation } from '../model/Formation';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FormationService {

  constructor(private http: HttpClient) { }

  addFormation(formation:Formation): Observable<Formation>{
    return this.http.post<Formation>(`${environment.serverUrl}/addFormation`, formation)
  }
  getAll():Observable<Formation[]>{
    return this.http.get<Formation[]>(`${environment.serverUrl}/all`)
  }
  
  getLastId(): Observable<number> {
    return this.http.get<number>(`${environment.serverUrl}/lastidpost`);
  }

  uploadImage(idFormation: number, image: File): Observable<any> {
    const formData = new FormData();
    formData.append('image', image);
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    return this.http.post(`${environment.serverUrl}/upload/${idFormation}`, formData, { headers: headers });
  }

  getImageByidFormation(idFormation: number): Observable<Blob> {
    return this.http.get(`${environment.serverUrl}/img/${idFormation}`, { responseType: 'blob' });
  }
}
