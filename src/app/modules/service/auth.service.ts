import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { NewUser } from "../../core/models/NewUser";
import { UserLogin } from "../../core/models/UserLogin";
import { JwtDTO } from "../../core/models/JwtDTO";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService{
  authURL = 'https://www.darmsportfolio.xyz/api/auth/';

  constructor(private _http: HttpClient){ }

  public new(newUser: NewUser): Observable<any> {
    return this._http.post<any>(this.authURL + 'new', newUser);
  }

  public login(userLogin: UserLogin): Observable<JwtDTO> {
    return this._http.post<any>(this.authURL + 'login', userLogin);
  }

}
