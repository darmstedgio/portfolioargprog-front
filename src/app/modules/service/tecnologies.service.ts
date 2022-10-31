import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Tecnology } from "../../core/models/Tecnology";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TecnologiesService{
  public URL: string = 'https://frozen-citadel-63653.herokuapp.com/api/';

  public indexURL: string = this.URL + 'index/tecnologies';
  public storeURL: string = this.URL + 'store/tecnology';
  public updateURL: string = this.URL + 'update/tecnology';
  public findURL: string = this.URL + 'find/tecnology/';
  public deleteURL: string = this.URL + 'delete/tecnology/';

  constructor(
    private _http: HttpClient,
  ) { }

  // Index
  public getTecnologies(): Observable<any>{
    return this._http.get<any>(this.indexURL);
  }

  // Store
  public createTecnology(tecnology: Tecnology): any {
    this._http.post(this.storeURL, tecnology).subscribe(data => {
      return data;
    });
  }

  // Update
  public updateTecnology(tecnology: Tecnology): any {
    this._http.put(this.updateURL, tecnology).subscribe(data => {
      console.log(data);
      return data;
    });
  }

  // Delete
  public deleteTecnology(i: number): any {
    this._http.delete(this.deleteURL + i).subscribe(data => {
      console.log(data);
    });
  }


}



