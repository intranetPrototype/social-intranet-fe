import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Injectable()
export class EmailTokenInterceptor implements HttpInterceptor {

  constructor(private readonly activatedRoute: ActivatedRoute) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const emailToken = this.activatedRoute.snapshot.queryParamMap.get('emailToken');

    if ((request.url.includes('confirm-registration') || (request.method === "PUT" && request.url.includes('/user/password'))) && emailToken) {
      request = request.clone({
        setHeaders: { Authorization: `Bearer ${emailToken}` }
      });
    }

    return next.handle(request);
  }
}
