import { Component, OnInit, Input } from '@angular/core';
import { ObservableTracker } from '../../services/observabletracker.service';

@Component({
  selector: 'loading-overlay',
  template: '<div *ngIf="isActive" class="progress-loader-overlay"><button (click)="stopIt()"> stop it</button><div class="loader"></div></div>',
  styleUrls: ['./loading-overlay.component.scss'],
})
export class LoadingOverlayComponent implements OnInit {
  isActive = false;

  constructor(private tracker: ObservableTracker) { }

  ngOnInit() {
    this.tracker.currentState.subscribe((isActive) => this.isActive = isActive);
  }
  stopIt() {
    this.tracker.updateState(false);
  }
}
