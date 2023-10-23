import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Objectif } from '../model/Objectif';
import { Observable } from 'rxjs';

const baseUrl='http://localhost:9084/suiviObjectif'
@Injectable({
  providedIn: 'root'
})

export class ObjectifService {

  constructor(private http: HttpClient) { }

  addObjectif(objectif:Objectif): Observable<Objectif>{
    return this.http.post<Objectif>(`${baseUrl +'/'}`, objectif)
  }
  updateObjectif(objectif:Objectif, idObjectif:number): Observable<void>{
    return this.http.put<void>( `${baseUrl}/${idObjectif}`,objectif)
  }
  deleteObjectif( idObjectif: number): Observable<void>{
    return this.http.delete<void>(`${baseUrl}/ ${idObjectif}`)
  }
  findByUserName(userName:string){
    return this.http.get(`${baseUrl+'/getAllByuser'}/${userName}`)
  }

  getRealisedObjectifsForUserBetweenDates(userName: string,startDate: string,endDate: string): Observable<Objectif[]> {
    const params = new HttpParams()
      .set('userName', userName)
      .set('startDate', startDate)
      .set('endDate', endDate);

    return this.http.get<Objectif[]>(`${baseUrl+'/realized'}`, { params });
  }

  getNbrObjectifDone(userName: string):Observable<number>{
    return this.http.get<number>(`${baseUrl+ '/Done'}/${userName}`);
  }
  getNbrObjectifInprogress(userName: string):Observable<number>{
    return this.http.get<number>(`${baseUrl+ '/Inprogress'}/${userName}`);
  }
  getNbrObjectifTotal(userName: string):Observable<number>{
    return this.http.get<number>(`${baseUrl+ '/all'}/${userName}`);
  }

  messageNotif(userName: string){
    return this.http.request('GET',`${baseUrl + '/MsgNotif'}/${userName}`, { responseType: 'text' });
  }

}
