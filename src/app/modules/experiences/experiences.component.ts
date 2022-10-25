import { Component, OnInit } from '@angular/core';
import { LaboralExperienceService } from '../service/laboral-experience.service';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css'],
  providers: [LaboralExperienceService]
})
export class ExperiencesComponent implements OnInit {
  public laboralExperiences: any;
  constructor(private _laboral_experience: LaboralExperienceService) { }

  ngOnInit(): void {
    this.loadLaboralExperiences();
  }

  loadLaboralExperiences(){
    this.laboralExperiences = false;
    this._laboral_experience.getLaboralExperience().subscribe(
      result => {
        this.laboralExperiences = result;
        console.log(<any> this.laboralExperiences);
      }
    );
  }
}
