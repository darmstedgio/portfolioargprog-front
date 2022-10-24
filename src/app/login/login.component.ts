// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { FormsModule } from '@angular/forms';
// import { AuthService } from '../service/auth.service';
// import { UserLogin } from '../models/login-user';
// import { TokenService } from '../service/token.service';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {

//   isLogged = false;
//   isLoginFail = false;
//   userLogin: UserLogin;
//   username: string;
//   password: string;
//   errMsj: string;

//   roles: string[] = [];


//   constructor(
//     private tokenService: TokenService,
//     private authService: AuthService,
//     private router: Router,
//     ) {

//   }

//   ngOnInit(): void {
//       if(this.tokenService.getToken()){
//         this.isLogged = true;
//         this.isLoginFail = false;
//         this.roles = this.tokenService.getAuthorities();

//       }
//   }

//   onLogin(): void {
//     this.userLogin = new UserLogin(this.username, this.password);
//     this.authService.login(this.userLogin).subscribe(
//       data => {
//         this.isLogged = true;
//         this.isLoginFail = false;

//         this.tokenService.setToken(data.token);
//         this.tokenService.setUserName(data.username);
//         this.tokenService.setAuthorities(data.authorities);
//         this.roles = data.authorities;
//       },
//       err => {
//         this.isLogged = false;
//         this.isLoginFail = true;
//         this.errMsj = err.error.mensaje;
//         console.log(this.errMsj);
//       }
//     );
//   }

// }
