import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { ObservableTracker } from './observabletracker.service';
/** Pass untouched request through to the next request handler. */
@Injectable()
export class ObservableTrackerInterceptor implements HttpInterceptor {
  constructor(
   private tracker: ObservableTracker
  ){}

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    // console.log(req);
    return next.handle(req);
  }
}
