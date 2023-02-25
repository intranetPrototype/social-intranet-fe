import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpInterceptor } from '@angular/common/http';

@Injectable()
export class RefreshTokenInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): any {
    const refreshToken = localStorage.getItem('refresh_token');

    if (request.url.includes('refresh')) {
      request = request.clone({
        setHeaders: { Authorization: `Bearer ${refreshToken}` }
      });
    }

    return next.handle(request);
  }
}
