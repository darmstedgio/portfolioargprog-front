import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Tecnology } from "../../core/models/Tecnology";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TecnologiesService{
  public URL: string;

  constructor(private _http: HttpClient){
    this.URL = 'http://localhost:8081/index/tecnologies';
  }

  public getTecnologies(): Observable<any>{
    return this._http.get<any>(this.URL);
  }


}


