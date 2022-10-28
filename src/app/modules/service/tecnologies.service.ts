import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Tecnology } from "../../core/models/Tecnology";
import { Observable } from "rxjs";
import { TokenService } from "./token.service";
import { AuthService } from "./auth.service";
import { ComunicationsService } from "./comunications.service";

@Injectable({
  providedIn: 'root'
})
export class TecnologiesService{
  public URL: string = 'http://localhost:8081/api/';

  public indexURL: string = this.URL + 'index/tecnologies';
  public storeURL: string = this.URL + 'store/tecnology';
  public updateURL: string = this.URL + 'update/tecnology';
  public findURL: string = this.URL + 'find/tecnology/';
  public deleteURL: string = this.URL + 'delete/tecnology/';

  constructor(
    private _http: HttpClient,
    private _tokenService: TokenService,
    private _authService: AuthService,
    private _comunicationService: ComunicationsService
  ) { }

  public getTecnologies(): Observable<any>{
    return this._http.get<any>(this.indexURL);
  }

  public updateTecnology(tecnology: Tecnology): void {
    console.log('sending...' + tecnology);
    this._http.put(this.updateURL, tecnology).subscribe(data => {
      return data;
    });
  }


}



