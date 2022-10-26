import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Tecnology } from "../../core/models/Tecnology";
import { Observable } from "rxjs";
import { TokenService } from "./token.service";
import { AuthService } from "./auth.service";
import { ComunicationsService } from "./comunications.service";

@Injectable({
  providedIn: 'root'
})
export class TecnologiesService{
  public indexURL: string = 'http://localhost:8081/api/index/tecnologies';
  public storeURL: string = 'http://localhost:8081/api/store/tecnology';
  public updateURL: string = 'http://localhost:8081/api/update/tecnology';
  public findURL: string = 'http://localhost:8081/api/find/tecnology/';
  public deleteURL: string = 'http://localhost:8081/api/delete/tecnology/';

  constructor(
    private _http: HttpClient,
    private tokenService: TokenService,
    private authService: AuthService,
    private comunicationService: ComunicationsService
    ) { }

  public getTecnologies(): Observable<any>{
    return this._http.get<any>(this.indexURL);
  }

  // addTecnology(tecnology: Tecnology): Observable<Tecnology> {

  //   return this._http.post<Tecnology>(this.storeURL, tecnology, httpOptions)
  //     .pipe(
  //       catchError(this.handleError('addHero', tecnology))
  //     );
  // }


}


