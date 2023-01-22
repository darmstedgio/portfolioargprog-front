import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Tecnology } from "../../core/models/Tecnology";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TecnologiesService{
  public URL: string = 'http://portfolioweb.com.devel/api/';

  public indexURL: string = this.URL + 'index/tecnologies';
  public storeURL: string = this.URL + 'store/tecnologies';
  public updateURL: string = this.URL + 'update/tecnologies';
  public findURL: string = this.URL + 'find/tecnologies/';
  public deleteURL: string = this.URL + 'delete/tecnologies/';

  constructor(
    private _http: HttpClient,
  ) { }

  // Index
  public getTecnologies(): Observable<any>{
    return this._http.get<any>(this.indexURL);
  }

  // Store
  public createTecnology(tecnology: Tecnology): Observable<any> {
    return this._http.post(this.storeURL, tecnology);
  }

  // Update
  public updateTecnology(tecnology: Tecnology): Observable<any> {
    return this._http.put(this.updateURL, tecnology);
  }

  // Delete
  public deleteTecnology(i: number): Observable<any> {
    return this._http.delete(this.deleteURL + i);
  }


}



