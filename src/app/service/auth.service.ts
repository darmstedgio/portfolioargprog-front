import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { NewUser } from "../models/new-user";
import { UserLogin } from "../models/login-user";
import { JwtDTO } from "../models/jwt-dto";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService{
  authURL = 'http://localhost:8080/auth/';

  constructor(private _http: HttpClient){ }

  public new(newUser: NewUser): Observable<any> {
    return this._http.post<any>(this.authURL + 'new', newUser);
  }

  public login(userLogin: UserLogin): Observable<JwtDTO> {
    return this._http.post<any>(this.authURL + 'login', userLogin);
  }



}
