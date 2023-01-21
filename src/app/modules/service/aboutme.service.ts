import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AboutMe } from "../../core/models/AboutMe";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AboutMeService{
  public URL: string = 'http://portfolioweb.com.devel/api/';

  public indexURL: string = this.URL + 'index/aboutme';
  public storeURL: string = this.URL + 'store/aboutme';
  public updateURL: string = this.URL + 'update/aboutme';
  public findURL: string = this.URL + 'find/aboutme/';
  public deleteURL: string = this.URL + 'delete/aboutme/';

  constructor(
    private _http: HttpClient,
  ) { }

  // Index
  public getAboutMe(): Observable<any>{
    return this._http.get<any>(this.findURL + "1");
  }

  // // Store
  // public createAboutMe(aboutme: AboutMe): any {
  //   this._http.post(this.storeURL, aboutme).subscribe(data => {
  //     return data;
  //   });
  // }

  // Update
  public updateAboutMe(aboutme: AboutMe): any {
    this._http.put(this.updateURL, aboutme).subscribe(data => {
      console.log(data);
      return data;
    });
  }

}



