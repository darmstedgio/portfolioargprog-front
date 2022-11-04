import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ComunicationsService } from '../service/comunications.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public show: boolean = true;

  @ViewChild('closeSidebar') sidebar: ElementRef<any>;

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

  close(): void{
    this.sidebar.nativeElement.click();
  }
}
