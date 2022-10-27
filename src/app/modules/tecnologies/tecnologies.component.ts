import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ComunicationsService } from '../service/comunications.service';
import { TecnologiesService } from '../service/tecnologies.service';

@Component({
  selector: 'app-tecnologies',
  templateUrl: './tecnologies.component.html',
  styleUrls: ['./tecnologies.component.css'],
  providers: [TecnologiesService]
})
export class TecnologiesComponent implements OnInit {
  public tecnologies: any;
  public is_logged: boolean = false;
  form = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    level: new FormControl(0),
  });

  constructor(
    private _tecnologiesService: TecnologiesService,
    private _comunicationService: ComunicationsService
  ) {  }

  ngOnInit(): void {

    this.loadTecnologies();
    this.is_logged = this._comunicationService.saveBinario;
  }

  loadTecnologies(){
    this.tecnologies = false;
    this._tecnologiesService.getTecnologies().subscribe(
      result => {
        this.tecnologies = result;
      }
    );
  }

}
