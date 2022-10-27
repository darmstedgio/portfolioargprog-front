import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComunicationsService {

  public saveBinario: boolean = false;
  public binario: EventEmitter<boolean>;
  constructor() {
    this.binario = new EventEmitter<boolean>();

    this.binario.subscribe(
      variable => {
        this.saveBinario = variable;
        console.log('valor binario:' + this.saveBinario)
      }
    );
  }

}
