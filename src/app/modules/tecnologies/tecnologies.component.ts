import { AfterContentInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Tecnology } from 'src/app/core/models/Tecnology';
import { ComunicationsService } from '../service/comunications.service';
import { TecnologiesService } from '../service/tecnologies.service';
import { TokenService } from '../service/token.service';

import * as myIcons from '../../core/structures/icons';

@Component({
  selector: 'app-tecnologies',
  templateUrl: './tecnologies.component.html',
  styleUrls: ['./tecnologies.component.css'],
  providers: [TecnologiesService]
})
export class TecnologiesComponent implements OnInit, AfterContentInit {

  @ViewChild('closeModal') formModal: ElementRef<any>;

  ngAfterContentInit(){
  }

  public tecnologies: any;
  public tecnology: Tecnology;
  public isLogged: boolean = false;
  public editable: boolean = false;

  public name: string;
  public description: string;
  public level: string;

  // String: create or update
  public is_create: boolean;

  // icons from core structures
  public icons: Array<any> = myIcons.icons;
  public icon_class_selected: any;

  form = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    description: new FormControl(''),
    level: new FormControl(null, [Validators.max(100)]),
    icon_class: new FormControl('')
  });

  constructor(
    private _tecnologiesService: TecnologiesService,
    private _tokenService: TokenService,
  )
  {
    this.name = '';
    this.description = '';
    this.level = '';
    this.tecnology = {id: null, name: null, level: null, description: null, icon_class: null};
    this.is_create = true;
    this.icon_class_selected = '';
    this.loadTecnologies();

  }

  ngOnInit(): void {

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

  goEdit(i: number, j: boolean): void{
    // Set old values to form
    const id = this.form.get('id') as FormControl;
    id.setValue(this.tecnologies[i].id);

    const name = this.form.get('name') as FormControl;
    name.setValue(this.tecnologies[i].name);

    const description = this.form.get('description') as FormControl;
    description.setValue(this.tecnologies[i].description);

    const level = this.form.get('level') as FormControl;
    level.setValue(this.tecnologies[i].level);

    const icon_class = this.form.get('icon_class') as FormControl;
    icon_class.setValue(this.tecnologies[i].icon_class);

    this.icon_class_selected = this.form.value.icon_class;

    this.is_create = j;
  }

  clearForm(): void{
    const id = this.form.get('id') as FormControl;
    id.setValue('');

    const name = this.form.get('name') as FormControl;
    name.setValue('');

    const description = this.form.get('description') as FormControl;
    description.setValue('');

    const level = this.form.get('level') as FormControl;
    level.setValue('');
  }

  updateForm(): void{
    this.tecnology = {
      id: this.form.value.id,
      name: this.form.value.name,
      level: this.form.value.level,
      description: this.form.value.description,
      icon_class: this.form.value.icon_class
    };

    const id = this.form.get('id') as FormControl;

    this._tecnologiesService.updateTecnology(this.tecnology);
    this.formModal.nativeElement.click();

    // investigar rxjs
    setTimeout(()=>{
    window.location.reload();
}, 1500);
  }

  goDelete(i: number, name: string): void{
    var confirm = window.confirm("??Est?? seguro que desea borrar " + name + "?");
    if(confirm == true){
      this._tecnologiesService.deleteTecnology(i);
    }

    // investigar rxjs
    setTimeout(()=>{
    window.location.reload();
}, 1500);
  }

  createForm(): void{

    this.tecnology = {
      id: this.form.value.id,
      name: this.form.value.name,
      level: this.form.value.level,
      description: this.form.value.description,
      icon_class: this.form.value.icon_class
    };
    this.formModal.nativeElement.click(); //close modal
    this._tecnologiesService.updateTecnology(this.tecnology);

    // investigar rxjs
    setTimeout(()=>{
    window.location.reload();
}, 1500);
  }

}
