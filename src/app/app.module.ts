import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PrincipalComponent } from './principal/principal.component';
import { TecnologiesComponent } from './tecnologies/tecnologies.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { StudiesComponent } from './studies/studies.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PrincipalComponent,
    TecnologiesComponent,
    AboutmeComponent,
    StudiesComponent,
    ExperiencesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
