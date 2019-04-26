
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, merge} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ObservableTracker {

  constructor() { }

   sequenceSubscriber(observer) {
    // synchronously deliver 1, 2, and 3, then complete
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.complete();

    // unsubscribe function doesn't need to do anything in this
    // because values are delivered synchronously
    return {unsubscribe() {}};
  }
  // todo: update type 'Observ'
  ready = (...Observ: any[]) => {
    const obs1 = new Observable(this.sequenceSubscriber);

    return merge(obs1, ...Observ);
  }

}
