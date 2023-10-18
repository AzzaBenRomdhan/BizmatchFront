import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAuthService } from './user-auth.service';
import {Observable} from 'rxjs';
import { UserNewPassword } from '../model/UserNewPassword';
import { User } from '../model/User';
import {AnalyseSentiment} from "../model/AnalyseSentiment";
import {ContactUs} from "../model/ContactUs";
import {PourcentageSentiment} from "../model/PourcentageSentiment";


@Injectable({
  providedIn: 'root',
})
export class UserService {
  PATH_OF_API1 = 'http://localhost:9091';
  PATH_OF_API = 'http://localhost:9090';
  private isLoggedIn: boolean = false;


  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });
  constructor(
    private httpclient: HttpClient,
    private userAuthService: UserAuthService,
  ) {}

  isLoggedInFnc(): boolean {
    console.log(this.isLoggedIn);
    return this.isLoggedIn;
  }

  // tslint:disable-next-line:typedef
  public login(loginData:any) {
    return this.httpclient.post(this.PATH_OF_API + '/authen', loginData, {
      headers: this.requestHeader,
    })
  }

  logout(): void {
    // Perform any necessary cleanup or API calls to invalidate the session
    this.isLoggedIn = false;
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('roles');
    localStorage.removeItem('user');
    localStorage.removeItem('_grecaptcha');
    localStorage.setItem('isLoggedIn', 'false');

  }

  // tslint:disable-next-line:typedef
  public forUser() {
    return this.httpclient.get(this.PATH_OF_API + '/forUser', {
      responseType: 'text',
    });
  }
  public roleMatch(allowedRoles: any): boolean {
    let isMatch = false;
    const userRoles: any = this.userAuthService.getRoles();

    if (userRoles != null && userRoles) {
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < userRoles.length; i++) {
        // tslint:disable-next-line:prefer-for-of
        for (let j = 0; j < allowedRoles.length; j++) {
          if (userRoles[i].roleName === allowedRoles[j]) {
            isMatch = true;
            return isMatch;
          }
        }
      }
    }
    return isMatch;
  }

  registerNewUser(user: any): Observable<any> {
    return this.httpclient.post(`${this.PATH_OF_API1}/registerNewUser`, user);
  }
  activateUser(verificationToken: string): Observable<any> {
    return this.httpclient.put(`${this.PATH_OF_API1}/activate/${verificationToken}`, {});
  }
  resetPasswordEmail(email: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const resetPassword = { email: email };

    return this.httpclient.post<any>(`${this.PATH_OF_API1}/checkEmail`, resetPassword, {
      headers: headers,
    });
  }
  changerMotDepass(newPassword:any): Observable<any> {
    return this.httpclient.post<any>(`${this.PATH_OF_API1}/resetPassword`, newPassword);
  }

  addRoleToUser(roleName: string, userName: string): Observable<any> {
    const url = `${this.PATH_OF_API1}/addroles/${roleName}/${userName}`;
    return this.httpclient.put(url, {});
  }


  getAllUsers(): Observable<User[]> {
    return this.httpclient.get<User[]>(`${this.PATH_OF_API1}/getallUser`);
  }

 
  getCountEntreprise(): Observable<number> {
    return this.httpclient.get<number>(`${this.PATH_OF_API1}/countentreprise`);
  } 

  getCountFournisseur(): Observable<number> {
    return this.httpclient.get<number>(`${this.PATH_OF_API1}/countFournisseur`);
  }


  getCountUsers(): Observable<number> {
    return this.httpclient.get<number>(`${this.PATH_OF_API1}/userss`);
  }

  //CRM Non Fonctionelles 
  analyserContenuParId(id: number): Observable<AnalyseSentiment> {
    return this.httpclient.get<AnalyseSentiment>(`${this.PATH_OF_API1}/Claim/analyser-contenu/${id}`);
  }

  calculerPourcentageSentiment(contactUs: {}): Observable<PourcentageSentiment> {
    return this.httpclient.post<PourcentageSentiment>(`${this.PATH_OF_API1}/Claim/calculer-pourcentage-sentiment`, contactUs);
  }
}
