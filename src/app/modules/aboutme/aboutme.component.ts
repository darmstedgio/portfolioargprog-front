import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Tecnology } from 'src/app/core/models/Tecnology';
import { TecnologiesService } from '../service/tecnologies.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TokenService } from '../service/token.service';
import { AboutMe } from 'src/app/core/models/AboutMe';
import { AboutMeService } from '../service/aboutme.service';
import { ComunicationsService } from '../service/comunications.service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {

  public tecnologies: any;
  public ind: number = 5;

  public tecnology: Tecnology;
  public aboutme: AboutMe;

  public name: string | null;
  public description: string | null;

  public isLogged: boolean = false;
  public editable: boolean = false;
  public editing: boolean;

  @ViewChild('open') open: ElementRef<any>;

  formAbout = new FormGroup({
    name: new FormControl(),
    description: new FormControl(),
  });

  constructor(
    private _tecnologiesService: TecnologiesService,
    private _aboutMesService: AboutMeService,
    private _tokenService: TokenService,
    private _comunicationService: ComunicationsService
  )
  {
    this.name = null;
    this.description = null;
    this.tecnology = {id: null, name: null, description: null, icon_class: null, level: null}
    this.aboutme = {id: null, name: null, description: null, image_path: null}
  }

  ngOnInit(): void {
    this._comunicationService.dispatchReload.subscribe(() => {
      this.loadTecnologies();
    })
    this.editing = false;

    if(this._tokenService.getToken()){
      this.isLogged = true;
      this.editable = true;
    }

    this.loadTecnologies();
    this.loadAboutMe();
  }

  public loadTecnologies(){
    this.tecnologies = [];
    this._tecnologiesService.getTecnologies().subscribe({
      next: (data) => { this.tecnologies = data; },
      error: (data) => { console.error(data); },
    });
  }

  loadAboutMe(){
    this._aboutMesService.getAboutMe().subscribe({
      next: (data) => { this.aboutme = data; },
      error: (data) => { console.error(data); },
    });
  }

  openModal(i: number){
    this.tecnology = this.tecnologies[i];
    this.open.nativeElement.click();
  }

  goEdit(){
    if(this.editing == false){
      this.editing = true;
    } else {
      this.editing = false;
    }
  }

  goUpdate(){
    this.editing = false;

    this.aboutme = {
      id: 1,
      name: this.formAbout.value.name,
      description: this.formAbout.value.description,
      image_path: null,
    };

    this._aboutMesService.updateAboutMe(this.aboutme);
    this._aboutMesService.updateAboutMe(this.aboutme).subscribe({ //Update
        next: (data) => { this.aboutme = data; },
        error: (data) => { console.error(data); },
    });
  }

  clearForm(){
    this.editing = false;
  }
}
