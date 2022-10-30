import { AfterContentInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { StudiesService } from '../service/studies.service';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Study } from 'src/app/core/models/Study';
import { TokenService } from '../service/token.service';

import * as myIcons from '../../core/structures/icons';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.css'],
  providers: [StudiesService]
})
export class StudiesComponent implements OnInit, AfterContentInit {

  @ViewChild('closeModal') formModal: ElementRef<any>;
  ngAfterContentInit(){
  }

  public studies: any;
  public study: Study;
  public isLogged: boolean = false;
  public editable: boolean = false;

  public name: string;
  public description: string;
  public start_activity: string;
  public end_activity: string;
  public institution: string;
  public keep_going: boolean;

  // String: create or update
  public is_create: boolean;

  // icons from core structures
  public icons: Array<any> = myIcons.icons;
  public icon_class_selected: any;

  form = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    description: new FormControl(''),
    start_activity: new FormControl(''),
    end_activity: new FormControl(''),
    institution: new FormControl(''),
    keep_going: new FormControl(false),
    icon_class: new FormControl('')
  });

  constructor(
    private _studiesService: StudiesService,
    private _tokenService: TokenService,
  )
  {
    this.name = '';
    this.description = '';
    this.start_activity = '';
    this.end_activity = '';
    this.institution = '';
    this.study = {id: null, name: null, description: null, start_activity: null, end_activity: null, institution: null, keep_going: null, icon_class: null};
    this.keep_going = false;
    this.is_create = true;
    this.icon_class_selected = '';
    this.loadStudies();
  }

  ngOnInit(): void {
    if(this._tokenService.getToken()){
      this.isLogged = true;
      this.editable = true;
    }
  }

  loadStudies(){
    this.studies = false;
    this._studiesService.getStudies().subscribe(
      result => {
        this.studies = result;
        console.log(this.studies)

      }
    );

  }

  goEdit(i: number, j: boolean): void{
    // Set old values to form
    const id = this.form.get('id') as FormControl;
    id.setValue(this.studies[i].id);

    const name = this.form.get('name') as FormControl;
    name.setValue(this.studies[i].name);

    const description = this.form.get('description') as FormControl;
    description.setValue(this.studies[i].description);

    const start_activity = this.form.get('start_activity') as FormControl;
    start_activity.setValue(this.studies[i].start_activity);

    const end_activity = this.form.get('end_activity') as FormControl;
    end_activity.setValue(this.studies[i].end_activity);

    const institution = this.form.get('institution') as FormControl;
    institution.setValue(this.studies[i].institution);

    const keep_going = this.form.get('keep_going') as FormControl;
    keep_going.setValue(this.studies[i].keep_going);

    const icon_class = this.form.get('icon_class') as FormControl;
    icon_class.setValue(this.studies[i].icon_class);

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

    const start_activity = this.form.get('start_activity') as FormControl;
    start_activity.setValue('');

    const end_activity = this.form.get('end_activity') as FormControl;
    end_activity.setValue('');

    const institution = this.form.get('institution') as FormControl;
    institution.setValue('');
  }

  updateForm(): void{
    this.study = {
      id: this.form.value.id,
      name: this.form.value.name,
      description: this.form.value.description,
      start_activity: this.form.value.start_activity,
      end_activity: (this.form.value.keep_going != true) ? this.form.value.end_activity : null,
      institution: this.form.value.institution,
      keep_going: this.form.value.keep_going,
      icon_class: this.form.value.icon_class
    };

    const id = this.form.get('id') as FormControl;

    this._studiesService.updateStudy(this.study);
    this.formModal.nativeElement.click();

    // investigar rxjs
    window.location.reload();
  }

  goDelete(i: number, name: string): void{
    var confirm = window.confirm("¿Está seguro que desea borrar " + name + "?");
    if(confirm == true){
      this._studiesService.deleteStudy(i);
    }

    // investigar rxjs
    window.location.reload();
  }

  createForm(): void{

    this.study = {
      id: this.form.value.id,
      name: this.form.value.name,
      description: this.form.value.description,
      start_activity: this.form.value.start_activity,
      end_activity: this.form.value.end_activity,
      institution: this.form.value.institution,
      keep_going: this.form.value.keep_going,
      icon_class: this.form.value.icon_class
    };
    this.formModal.nativeElement.click(); //close modal
    this._studiesService.updateStudy(this.study);

    // investigar rxjs
    window.location.reload();
  }

  switch(){
    const end_activity = this.form.get('end_activity') as FormControl;
    end_activity.setValue(null);
  }
}
