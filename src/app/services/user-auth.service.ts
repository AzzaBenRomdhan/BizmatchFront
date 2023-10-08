import { Injectable } from '@angular/core';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  private username: string | null = null;
  private userEmail: string | null = null;
  user!: User;
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

  public setUser(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
  }
  public getUser(): User | null {
    const userString = localStorage.getItem('user');
    if (userString) {
      const user = JSON.parse(userString) as User;
      return user;
    }
    return null;
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
