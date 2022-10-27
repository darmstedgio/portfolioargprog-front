import { Component, Input, OnInit } from '@angular/core';
import { ComunicationsService } from '../service/comunications.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public show: boolean = true;

  constructor(
    private _comunicationService: ComunicationsService
  ) { }

  ngOnInit(): void {
    this._comunicationService.binario.subscribe(
      variable => {
        this.show = !variable;
      }
    );
  }
}
