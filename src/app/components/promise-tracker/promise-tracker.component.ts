import { Component, OnInit, Input } from '@angular/core';
import { ObservableTracker } from '../../services/observabletracker.service'
import { Observable, merge} from 'rxjs';

@Component({
  selector: 'promise-tracker',
  template: '<div class="progress-loader-overlay"><button (click)="stopIt()"> stop it</button><div class="loader"><h1>promise</h1></div></div>',
  styleUrls: ['./promise-tracker.component.scss'],
  // providers: [ObservableTracker]
})
export class PromiseTrackerComponent implements OnInit {
  isActive = true;

  constructor(private tracker: ObservableTracker) { }

  ngOnInit() {
    //this.tracker.initTracker().subscribe((isActive) => this.isActive = isActive);
  }
  stopIt(){
    this.tracker.updateState(false);
  }
}
