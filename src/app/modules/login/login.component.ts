import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { UserLogin } from '../../core/models/UserLogin';
import { TokenService } from '../service/token.service';
import { ComunicationsService } from '../service/comunications.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLogged = false;
  isLoginFail = false;
  userLogin: any;
  public username: string = 'ariel';
  public password: string = 'aMunoz1';
  public errMsj: string = '';

  roles: string[] = [];


  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private comunicationService: ComunicationsService
  )
  {

  }

  ngOnInit(): void {
      if(this.tokenService.getToken()){
        this.isLogged = true;
        this.isLoginFail = false;
        this.roles = this.tokenService.getAuthorities();
      }
  }

  onLogin(): void {
    this.userLogin = new UserLogin(this.username, this.password);
    this.authService.login(this.userLogin).subscribe(
      data => {
        this.isLogged = true;
        this.isLoginFail = false;

        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.username);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        // Emit para ocultar login del navbar
        this.comunicationService.binario.emit(true);
      }
      ,
      err => {
        this.isLogged = false;
        this.isLoginFail = true;
        this.errMsj = err.error.mensaje;
        console.log(this.errMsj);

        // Emit para ocultar login del navbar
        this.comunicationService.binario.emit(false);
      }
    );
  }

  logOut(){
    this.tokenService.logOut();
    this.isLogged = false;
    this.isLoginFail = true;
    // Emit para ocultar login del navbar
    this.comunicationService.binario.emit(false);
  }

}
