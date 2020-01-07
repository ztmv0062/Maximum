import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../environments/environment';
import { tap } from 'rxjs/operators';
import { v4 as uuid } from 'uuid';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private router: Router,
    private toastr: ToastrService, 
    private authService: AuthService
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("jhkjhjk");
    if (req.method === 'POST' || req.method === 'GET' || req.method === 'PUT' || req.method == 'DELETE') {
     
         console.log(environment.baseURL + req.url);
          req = req.clone({
            url: environment.baseURL + req.url
          });
         
      return next.handle(req).pipe(    
        tap(event => {

      }, err => {
        if ((err.status === 401 || err.status === 440) && this.router.url !== '/login') {
          let title = 'Session expired. Please login again';
          if(req.url.match('getUser')){
            this.toastr.error('Fail!!!', 'Session expired. Please login again');
          }
          this.authService.clearLocalStorage();
          return this.router.navigate(['/authentication/login']);
        } else if (err.status && err.status !== 434) {
          if (err.error.error) {
            this.toastr.error('error', err.error.error.message);
          }
        }
      })
      );
    } else {
      return next.handle(req);
    }
  }

}
