
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, merge, BehaviorSubject, of} from 'rxjs';
import { map, catchError, mergeMap, tap } from 'rxjs/operators';

@Injectable()
export class ObservableTracker {
  private isActive$ = new BehaviorSubject(false);
  public currentState = this.isActive$.asObservable();

  constructor() {  }

   sequenceSubscriber(observer) {
    // synchronously deliver 1, 2, and 3, then complete
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.complete();

    // unsubscribe function doesn't need to do anything in this
    // because values are delivered synchronously
  }
  // todo: update type 'Observ'
  ready = (Observ: any) => {
    this.updateState(true);
    return Observ.pipe(
      this.handleError(),
      this.mergeMap()
    );
  }

  mergeMap = () => mergeMap(result => {
    // kill spinner overlay
    this.isActive$.next(false);
    // return new observable with result from request
    return of(result);
  })

  handleError = () => {
    return catchError((err) => {
      return of(err); //just forwards error obj to the subscriber
    });
  }

  updateState(isActive: boolean) {
    this.isActive$.next(isActive);
  }

}
