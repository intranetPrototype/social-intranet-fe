import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, filter, switchMap, take, throwError } from 'rxjs';
import { AuthService } from 'src/api/services';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  private isRefreshing = false;
  private refreshToken$ = new BehaviorSubject<any>(null);

  constructor(
    private readonly authService: AuthService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const accessToken = localStorage.getItem('access_token');
    const refreshToken = localStorage.getItem('refresh_token');

    if (accessToken && !request.url.includes('confirm-registration')) {
      request = this.setBearerToken(request, accessToken);
    }

    return next.handle(request).pipe(
      catchError(error => {
        if (error instanceof HttpErrorResponse && error.status === 401) {
          return this.refreshTokens(request, next, refreshToken);
        }

        throw new Error(error);
      })
    );
  }

  private refreshTokens(request: HttpRequest<any>, next: HttpHandler, refreshToken: string | null): Observable<HttpEvent<any>> {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      this.refreshToken$.next(null);

      return this.authService.refreshTokens().pipe(
        switchMap(tokens => {
          this.isRefreshing = false;
          this.refreshToken$.next(tokens);

          localStorage.setItem('access_token', tokens.access_token);
          localStorage.setItem('refresh_token', tokens.refresh_token);

          return next.handle(this.setBearerToken(request, tokens.access_token));
        })
      );
    } else {
      return this.refreshToken$.pipe(
        filter(token => token !== null),
        take(1),
        switchMap(tokens => next.handle(this.setBearerToken(request, tokens.access_token)))
      );
    }
  }

  private setBearerToken(request: HttpRequest<any>, token: string | null): HttpRequest<any> {
    return request.clone({
      setHeaders: { Authorization: `Bearer ${token}` }
    });
  }

}
