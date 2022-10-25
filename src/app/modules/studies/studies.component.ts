import { Component, OnInit } from '@angular/core';
import { StudiesService } from '../service/studies.service';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.css'],
  providers: [StudiesService]
})
export class StudiesComponent implements OnInit {

  public studies: any;
  constructor(
    private _studiesService: StudiesService
  ) { }

  ngOnInit(): void {
    this.loadStudies();
  }

  loadStudies(){
    this.studies = false;
    this._studiesService.getStudies().subscribe(
      result => {
        this.studies = result;
        console.log(<any> this.studies);
      }
    );
  }

}
