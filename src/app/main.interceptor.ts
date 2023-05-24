import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {catchError, Observable, switchMap, throwError} from 'rxjs';
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";

import {AuthService} from "./servises";

@Injectable()
export class MainInterceptor implements HttpInterceptor {

  isRefreshing:boolean = false;

  constructor(private authService: AuthService,
              private dialog: MatDialog,
              private router: Router) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    const isAuthenticated = this.authService.isAuthenticated()

    if (isAuthenticated) {
      request = this.addToken(request, this.authService.getAccessToken())
    }
    return next.handle(request).pipe(
      catchError((res: HttpErrorResponse) => {
        if (res && res.error && res.status === 401) {
          return this.handle401Error(request, next)
        }

        return throwError(() => res)
      })
    );
  }

  addToken(request: HttpRequest<any>, token: string): HttpRequest<any> {
    return request.clone({
      setHeaders: {Authorization: `Bearer ${token}`}
    })
  }

  handle401Error(request: HttpRequest<any>, next: HttpHandler): any {
    const refresh = this.authService.getRefreshToken();

    if (refresh && !this.isRefreshing) {
      this.isRefreshing = true
      return this.authService.refresh(refresh).pipe(
        switchMap((token) => {
          this.isRefreshing = false
          return next.handle(this.addToken(request, token.access_token))
        }),
        catchError(() => {
          this.isRefreshing = false
          this.authService.deleteTokens()
          this.router.navigate(['/login'])
          return throwError(() => new Error('Token is invalid or expired'))

        })
      )
    }
  }
}
