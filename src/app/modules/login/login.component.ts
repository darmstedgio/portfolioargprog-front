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
  public username: string = 'amunoz@mail';
  public password: string = 'aMunoz1';
  public errMsj: string = '';

  constructor(
    private _tokenService: TokenService,
    private _authService: AuthService,
    private _comunicationService: ComunicationsService
  ) { }

  ngOnInit(): void {
      if(this._tokenService.getToken()){
        this.isLogged = true;
        this.isLoginFail = false;
      }
  }

  onLogin(): void {
    this.userLogin = new UserLogin(this.username, this.password);
    this._authService.login(this.userLogin).subscribe(
      data => {
        this.isLogged = true;
        this.isLoginFail = false;

        this._tokenService.setToken(data.access_token);
        this._tokenService.setUserName(data.user_email);
        // Emit para ocultar login del navbar
        this._comunicationService.binario.emit(true);
      }
      ,
      err => {
        this.isLogged = false;
        this.isLoginFail = true;
        this.errMsj = err.error.mensaje;
        console.log(this.errMsj);

        // Emit para ocultar login del navbar
        this._comunicationService.binario.emit(false);
      }
    );
  }

  logOut(){
    this._tokenService.logOut();
    this.isLogged = false;
    this.isLoginFail = true;
    // Emit para ocultar login del navbar
    this._comunicationService.binario.emit(false);
  }

}
