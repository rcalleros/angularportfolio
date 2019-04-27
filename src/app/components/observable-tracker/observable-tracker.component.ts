import { Component, OnInit, Input } from '@angular/core';
import { ObservableTracker } from '../../services/observabletracker.service';
import { Observable, merge} from 'rxjs';

@Component({
  selector: 'observable-tracker',
  template: '<div *ngIf="isActive" class="progress-loader-overlay"><button (click)="stopIt()"> stop it</button><div class="loader"><h1>promise</h1></div></div>',
  styleUrls: ['./observable-tracker.component.scss'],
  // providers: [ObservableTracker]
})
export class ObservableTrackerComponent implements OnInit {
  isActive;

  constructor(private tracker: ObservableTracker) { }

  ngOnInit() {
    this.tracker.currentState.subscribe((isActive) => this.isActive = isActive);
  }
  stopIt() {
    this.tracker.updateState(false);
  }
}
