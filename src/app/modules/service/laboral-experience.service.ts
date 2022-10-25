import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { LaboralExperience } from "../../core/models/LaboralExperience";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LaboralExperienceService{
  public URL: string;

  constructor(private _http: HttpClient){
    this.URL = 'http://localhost:8080/index/laboralexperiences';
  }

  public getLaboralExperience(): Observable<any>{
    return this._http.get<any>(this.URL);
  }


}


