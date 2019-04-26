import { Component, OnInit, Input } from '@angular/core';
import { Observable, merge} from 'rxjs';

@Component({
  selector: 'promise-tracker',
  template: '<div class="progress-loader-overlay"><div class="loader"><h1>promise</h1></div></div>',
  styleUrls: ['./promise-tracker.component.scss']
})
export class PromiseTrackerComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

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
