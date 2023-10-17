import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Entreprise } from '../model/Entreprise';

@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {
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

constructor(private http: HttpClient) { }
addEntreprise(entreprise: Entreprise): Observable<Entreprise> {
  return this.http.post<Entreprise>(this.url+"/addavecImage", entreprise)
}
}
