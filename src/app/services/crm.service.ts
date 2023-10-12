import { Injectable } from '@angular/core';
import { ContactUs } from '../model/ContactUs';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrmService {
  PATH_OF_API = 'http://localhost:9091';
  constructor( private httpclient: HttpClient) { }
  createContact(contactUs:ContactUs): Observable<ContactUs>{
    return this.httpclient.post<ContactUs>(`${this.PATH_OF_API}/Claim/create`, contactUs);
  }
}
