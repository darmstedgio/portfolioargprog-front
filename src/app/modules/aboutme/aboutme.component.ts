import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Tecnology } from 'src/app/core/models/Tecnology';
import { TecnologiesService } from '../service/tecnologies.service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {

  public tecnologies: any;
  public index: number;

  @ViewChild('open') open: ElementRef<any>;
  constructor(
    private _tecnologiesService: TecnologiesService
  )
  {
    this.loadTecnologies();
    this.index = 0;
  }

  ngOnInit(): void {
  }

  loadTecnologies(){
    this.tecnologies = false;
    this._tecnologiesService.getTecnologies().subscribe(
      result => {
        this.tecnologies = result;
        console.log(this.tecnologies)
      }
    );
    console.log(this.tecnologies)

  }

  openModal(i: number){
    this.index = i;
    this.open.nativeElement.click();
  }

}
