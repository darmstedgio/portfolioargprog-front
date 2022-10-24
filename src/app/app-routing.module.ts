import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { HomeComponent } from "./home/home.component";
// import { LoginComponent } from "./login/login.component";
import { StudiesComponent } from './studies/studies.component';
import { TecnologiesComponent } from './tecnologies/tecnologies.component';

const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: "full" },
  { path: "sobre-mi", component: AboutmeComponent, pathMatch: "full" },
  { path: "tecnologias", component: TecnologiesComponent, pathMatch: "full" },
  { path: "estudios", component: StudiesComponent, pathMatch: "full" },
  { path: "experiencia", component: ExperiencesComponent, pathMatch: "full" },
  // { path: "login", component: LoginComponent, pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
