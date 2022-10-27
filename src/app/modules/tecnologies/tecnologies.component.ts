import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ComunicationsService } from '../service/comunications.service';
import { TecnologiesService } from '../service/tecnologies.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-tecnologies',
  templateUrl: './tecnologies.component.html',
  styleUrls: ['./tecnologies.component.css'],
  providers: [TecnologiesService]
})
export class TecnologiesComponent implements OnInit {
  public tecnologies: any;
  public isLogged: boolean = false;
  public editable: boolean = false;

  form = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    level: new FormControl(0),
  });

  constructor(
    private _tecnologiesService: TecnologiesService,
    private _comunicationService: ComunicationsService,
    private _tokenService: TokenService,
  ) {  }

  ngOnInit(): void {

    this.loadTecnologies();

    if(this._tokenService.getToken()){
      this.isLogged = true;
      this.editable = true;

    }
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
