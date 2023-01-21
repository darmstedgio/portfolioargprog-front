import { Injectable } from "@angular/core";

const TOKEN_KEY = 'AuthToken';
const EMAIL_KEY = 'AuthEmail';

@Injectable({
  providedIn: 'root'
})
export class TokenService{

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
  public setUserName(email: string): void {
    window.sessionStorage.removeItem(EMAIL_KEY);
    window.sessionStorage.setItem(EMAIL_KEY, email);
  }

  public getUserName(): string | null {
    return sessionStorage.getItem(EMAIL_KEY);
  }

  public logOut(): void {
    window.sessionStorage.clear();
  }
}
