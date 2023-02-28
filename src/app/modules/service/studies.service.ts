import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Study } from "../../core/models/Study";
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class StudiesService{
  public URL: string = 'https://www.darmsportfolio.xyz/api/';

  public indexURL: string = this.URL + 'index/studies';
  public storeURL: string = this.URL + 'store/studies';
  public updateURL: string = this.URL + 'update/studies';
  public findURL: string = this.URL + 'find/studies/';
  public deleteURL: string = this.URL + 'delete/studies/';

  constructor(
    private _http: HttpClient,
  ) { }

  // Index
  public getStudies(): Observable<any>{
    return this._http.get<any>(this.indexURL);
  }

  // Store
  public createStudy(study: Study): Observable<any> {
    return this._http.post(this.storeURL, study);
  }

  // Update
  public updateStudy(study: Study): Observable<any> {
    return this._http.put(this.updateURL, study);
  }

  // Delete
  public deleteStudy(i: number): Observable<any> {
    return this._http.delete(this.deleteURL + i);
  }
}


