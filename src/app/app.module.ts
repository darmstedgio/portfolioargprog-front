import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './modules/navbar/navbar.component';
import { PrincipalComponent } from './modules/principal/principal.component';
import { TecnologiesComponent } from './modules/tecnologies/tecnologies.component';
import { AboutmeComponent } from './modules/aboutme/aboutme.component';
import { StudiesComponent } from './modules/studies/studies.component';
import { ExperiencesComponent } from './modules/experiences/experiences.component';
import { FooterComponent } from './modules/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './modules/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './modules/login/login.component';
import { interceptorProvider } from './core/interceptors/auth-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PrincipalComponent,
    TecnologiesComponent,
    AboutmeComponent,
    StudiesComponent,
    ExperiencesComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
