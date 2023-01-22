import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Experience } from "../../core/models/Experience";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ExperienceService{
  public URL: string = 'http://portfolioweb.com.devel/api/';

  public indexURL: string = this.URL + 'index/laboralexperiences';
  public storeURL: string = this.URL + 'store/laboralexperiences';
  public updateURL: string = this.URL + 'update/laboralexperiences';
  public findURL: string = this.URL + 'find/laboralexperiences/';
  public deleteURL: string = this.URL + 'delete/laboralexperiences/';

  constructor(
    private _http: HttpClient,
  ) { }

  // Index
  public getExperiences(): Observable<any>{
    return this._http.get<any>(this.indexURL);
  }

  // Store
  public createExperience(experience: Experience): Observable<any> {
    return this._http.post(this.storeURL, experience);
  }

  // Update
  public updateExperience(experience: Experience): Observable<any> {
    return this._http.put(this.updateURL, experience);
  }

  // Delete
  public deleteExperience(i: number): Observable<any> {
    return this._http.delete(this.deleteURL + i);
  }
}


