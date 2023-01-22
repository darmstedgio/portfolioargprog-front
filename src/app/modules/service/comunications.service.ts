import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComunicationsService {

  public binario: EventEmitter<boolean>;
  constructor() {
    this.binario = new EventEmitter<boolean>();
  }

  @Output()
  dispatchReload: EventEmitter<any> = new EventEmitter();

}
