import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Study } from "../../core/models/Study";
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class StudiesService{
  public URL: string = 'http://portfolioweb.com.devel/api/';

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
  public createStudy(study: Study): any {
    this._http.post(this.storeURL, study).subscribe(data => {
      return data;
    });
  }

  // Update
  public updateStudy(study: Study): any {
    this._http.put(this.updateURL, study).subscribe(data => {
      return data;
    });
  }

  // Delete
  public deleteStudy(i: number): any {
    this._http.delete(this.deleteURL + i).subscribe(data => {
      console.log(data);
    });
  }


}


