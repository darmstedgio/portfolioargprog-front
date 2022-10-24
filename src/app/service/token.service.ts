import { Injectable } from "@angular/core";

const TOKEN_KEY = 'AuthToken';
const USERNAME_KEY = 'AuthUserName';
const AUTHORITIES_KEY = 'AuthAuthorities';

@Injectable({
  providedIn: 'root'
})
export class TokenService{

  roles: Array<string> = [];

  constructor(){ }

  // Token
  public setToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  // User
  public setUserName(username: string): void {
    window.sessionStorage.removeItem(USERNAME_KEY);
    window.sessionStorage.setItem(USERNAME_KEY, username);
  }

  public getUserName(): string | null {
    return sessionStorage.getItem(USERNAME_KEY);
  }

  // Authorities
  public setAuthorities(authorities: Array<string>): void {
    window.sessionStorage.removeItem(AUTHORITIES_KEY);
    window.sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
  }

  public getAuthorities(): Array<string> {
    this.roles = [];
    let auth = sessionStorage.getItem(AUTHORITIES_KEY);
    if(auth){
      let auth_parsed = JSON.parse(auth);
      auth_parsed.forEach((authority: any) => {
        this.roles.push(authority.authority);
      });
    }
    return this.roles;
  }

  public logOut(): void {
    window.sessionStorage.clear();
  }
}
