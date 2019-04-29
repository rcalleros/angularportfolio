
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, merge, BehaviorSubject, of} from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class ObservableTracker {
  private isActive$ = new BehaviorSubject(true);
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
  ready = (...Observ: any[]) => {
    this.isActive$.next(true);
    const obs1 = new Observable(this.sequenceSubscriber);
    return merge(obs1, ...Observ).pipe(catchError(() => of('error dude')));
  }

  handleError = () => {
    //this.updateState(false);
    return catchError(() => of('error dude'));
  }
  updateState(isActive: boolean) {
    console.log(isActive);
    this.isActive$.next(isActive);
  }

}
