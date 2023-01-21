import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Experience } from "../../core/models/Experience";
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ExperienceService{
  public URL: string = 'https://portfolioweb.com.devel/api/';

  public indexURL: string = this.URL + 'index/laboralexperiences';
  public storeURL: string = this.URL + 'store/laboralexperience';
  public updateURL: string = this.URL + 'update/laboralexperience';
  public findURL: string = this.URL + 'find/laboralexperience/';
  public deleteURL: string = this.URL + 'delete/laboralexperience/';

  constructor(
    private _http: HttpClient,
  ) { }

  // Index
  public getExperiences(): Observable<any>{
    return this._http.get<any>(this.indexURL);
  }

  // Store
  public createExperience(experience: Experience): any {
    this._http.post(this.storeURL, experience).subscribe(data => {
      return data;
    });
  }

  // Update
  public updateExperience(experience: Experience): any {
    this._http.put(this.updateURL, experience).subscribe(data => {
      return data;
    });
  }

  // Delete
  public deleteExperience(i: number): any {
    this._http.delete(this.deleteURL + i).subscribe(data => {
      console.log(data);
    });
  }
}


