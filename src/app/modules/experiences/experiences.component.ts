import { AfterContentInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TokenService } from '../service/token.service';

import * as myIcons from '../../core/structures/icons';
import { Experience } from 'src/app/core/models/Experience';
import { ExperienceService } from '../service/experiences.service';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css'],
  providers: [ExperienceService]
})
export class ExperiencesComponent implements OnInit, AfterContentInit {

  @ViewChild('closeModal') formModal: ElementRef<any>;
  ngAfterContentInit(){
  }

  public experiences: any;
  public experience: Experience;
  public isLogged: boolean = false;
  public editable: boolean = false;

  public name: string;
  public description: string;
  public start_activity: string;
  public end_activity: string;
  public company: string;
  public keep_going: boolean;

  // String: create or update
  public is_create: boolean;

  // icons from core structures
  public icons: Array<any> = myIcons.icons;
  public icon_class_selected: any;

  formExperience = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    description: new FormControl(''),
    start_activity: new FormControl(''),
    end_activity: new FormControl(''),
    company: new FormControl(''),
    keep_going: new FormControl(false),
    icon_class: new FormControl('')
  });

  constructor(
    private _experienceService: ExperienceService,
    private _tokenService: TokenService,
  )
  {
    this.name = '';
    this.description = '';
    this.start_activity = '';
    this.end_activity = '';
    this.company = '';
    this.experience = {id: null, name: null, description: null, start_activity: null, end_activity: null, company: null, keep_going: null, icon_class: null};
    this.keep_going = false;
    this.is_create = true;
    this.icon_class_selected = '';
    this.loadExperience();
  }

  ngOnInit(): void {
    if(this._tokenService.getToken()){
      this.isLogged = true;
      this.editable = true;
    }
  }

  loadExperience(){
    this.experiences = false;
    this._experienceService.getExperiences().subscribe(
      result => {
        this.experiences = result;
        // console.log(this.experiences)
      }
    );
  }

  goEdit(i: number, j: boolean): void{
    // Set old values to form
    const id = this.formExperience.get('id') as FormControl;
    id.setValue(this.experiences[i].id);

    const name = this.formExperience.get('name') as FormControl;
    name.setValue(this.experiences[i].name);

    const description = this.formExperience.get('description') as FormControl;
    description.setValue(this.experiences[i].description);

    const start_activity = this.formExperience.get('start_activity') as FormControl;
    start_activity.setValue(this.experiences[i].start_activity);

    const end_activity = this.formExperience.get('end_activity') as FormControl;
    end_activity.setValue(this.experiences[i].end_activity);

    const company = this.formExperience.get('company') as FormControl;
    company.setValue(this.experiences[i].company);

    const keep_going = this.formExperience.get('keep_going') as FormControl;
    keep_going.setValue(this.experiences[i].keep_going);

    const icon_class = this.formExperience.get('icon_class') as FormControl;
    icon_class.setValue(this.experiences[i].icon_class);

    this.icon_class_selected = this.formExperience.value.icon_class;

    this.is_create = j;
  }

  clearForm(): void{
    const id = this.formExperience.get('id') as FormControl;
    id.setValue('');

    const name = this.formExperience.get('name') as FormControl;
    name.setValue('');

    const description = this.formExperience.get('description') as FormControl;
    description.setValue('');

    const start_activity = this.formExperience.get('start_activity') as FormControl;
    start_activity.setValue('');

    const end_activity = this.formExperience.get('end_activity') as FormControl;
    end_activity.setValue('');

    const company = this.formExperience.get('company') as FormControl;
    company.setValue('');
  }

  updateForm(): void{
    this.experience = {
      id: this.formExperience.value.id,
      name: this.formExperience.value.name,
      description: this.formExperience.value.description,
      start_activity: this.formExperience.value.start_activity,
      end_activity: (this.formExperience.value.keep_going != true) ? this.formExperience.value.end_activity : null,
      company: this.formExperience.value.company,
      keep_going: this.formExperience.value.keep_going,
      icon_class: this.formExperience.value.icon_class
    };

    const id = this.formExperience.get('id') as FormControl;

    this._experienceService.updateExperience(this.experience);
    this.formModal.nativeElement.click();
  }

  goDelete(i: number, name: string): void{
    var confirm = window.confirm("¿Está seguro que desea borrar " + name + "?");
    if(confirm == true){
      this._experienceService.deleteExperience(i);
    }

  }

  createForm(): void{

    this.experience = {
      id: this.formExperience.value.id,
      name: this.formExperience.value.name,
      description: this.formExperience.value.description,
      start_activity: this.formExperience.value.start_activity,
      end_activity: this.formExperience.value.end_activity,
      company: this.formExperience.value.company,
      keep_going: this.formExperience.value.keep_going,
      icon_class: this.formExperience.value.icon_class
    };
    this.formModal.nativeElement.click(); //close modal
    this._experienceService.updateExperience(this.experience);
  }

  switch(){
    const end_activity = this.formExperience.get('end_activity') as FormControl;
    end_activity.setValue(null);
  }
}
