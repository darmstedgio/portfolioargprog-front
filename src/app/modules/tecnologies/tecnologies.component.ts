import { Component, OnInit } from '@angular/core';
import { TecnologiesService } from '../service/tecnologies.service';

@Component({
  selector: 'app-tecnologies',
  templateUrl: './tecnologies.component.html',
  styleUrls: ['./tecnologies.component.css'],
  providers: [TecnologiesService]
})
export class TecnologiesComponent implements OnInit {
  public tecnologies: any;
  constructor(
    private _tecnologiesService: TecnologiesService
  ) { }

  ngOnInit(): void {
    this.loadTecnologies();
  }

  loadTecnologies(){
    this.tecnologies = false;
    this._tecnologiesService.getTecnologies().subscribe(
      result => {
        this.tecnologies = result;
        console.log(<any> this.tecnologies);
      }
    );
  }




}
