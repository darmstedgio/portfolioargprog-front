import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TokenService } from "src/app/modules/service/token.service";

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor{

  constructor(private tokenService: TokenService ){ }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let intReq = req;
    const token = this.tokenService.getToken();
    if(token != null){
      intReq = req.clone({headers: req.headers.set('Authorization', 'Bearer ' + token)
                                              .set('Content-Type', 'application/json')})
                                              ;
    }
    return next.handle(intReq);
  }
}

export const interceptorProvider = [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}]
