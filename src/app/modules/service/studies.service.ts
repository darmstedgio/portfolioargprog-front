import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Study } from "../../core/models/Study";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StudiesService{
  public URL: string;

  constructor(private _http: HttpClient){
    this.URL = 'http://localhost:8080/index/studies';
  }

  public getStudies(): Observable<any>{
    return this._http.get<any>(this.URL);
  }


}


