import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  private username: string | null = null;
  private userEmail: string | null = null;

  constructor() {}

  setLoggedInUsername(username: string): void {
    this.username = username;
  }

  getLoggedInUsername(): string | null {
    return this.username;
  }
  public setRoles(roles: []) {
    localStorage.setItem('roles', JSON.stringify(roles));
  }

  public getRoles(): any[] {
    const rolesString = localStorage.getItem('roles');
    if (rolesString) {
      return JSON.parse(rolesString);
    }
    return []; // Retourne un tableau vide si les rôles ne sont pas trouvés dans le localStorage.
  }
  

  public setToken(jwtToken: string) {
    localStorage.setItem('jwtToken', jwtToken);
  }

  public getToken(): string {
    return localStorage.getItem('jwtToken') ?? ''; 
  }
  
  public clear() {
    localStorage.clear();
  }
  public isLoggedIn() {
    return this.getRoles() && this.getToken();
  }

  getUserEmail(): string | null {
    return this.userEmail;
  }
}
