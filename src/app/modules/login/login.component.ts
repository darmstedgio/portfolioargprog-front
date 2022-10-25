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
  public username: string = '';
  public password: string = '';
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
        this.comunicationService.binario.emit(false);

      }
      ,
      err => {
        this.isLogged = false;
        this.isLoginFail = true;
        this.errMsj = err.error.mensaje;
        console.log(this.errMsj);
      }
    );
  }

  logOut(){
    this.tokenService.logOut();
    // window.sessionStorage.clear();
    this.isLogged = false;
    this.isLoginFail = true;
    this.comunicationService.binario.emit(true);
  }

}
