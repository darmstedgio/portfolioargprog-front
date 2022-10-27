import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComunicationsService {

  public binario: EventEmitter<boolean>;
  constructor() {
    this.binario = new EventEmitter<boolean>();
  }

}
