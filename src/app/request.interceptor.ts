import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.method === 'POST') {
      const newRequest = request.clone({
        headers: new HttpHeaders({
          'token': '012345 - added using request interceptor'
        })
      });
      return next.handle(newRequest)
    } else {
      return next.handle(request);
    }
  }
}
